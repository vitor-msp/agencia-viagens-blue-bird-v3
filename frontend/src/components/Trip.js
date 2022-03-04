import { useDispatch, useSelector } from "react-redux";
import { updateModalTripContent } from "../store/actions/modalTripContent.actions";
import { formatCurrency } from "../helpers/formatCurrency";
import { formatDateTime } from "../helpers/formatDateTime";

export function Trip({ trip }) {
  const { departure, arrival, defaultValue } = trip;
  const destination = useSelector((state) => {
    return state.destinations.find(({ id }) => id === trip.destinationId);
  });
  const { city, uf, landingPlace } = destination;
  const offer = useSelector((state) => {
    return state.offers.find(({ id }) => id === state.currentReq.offer);
  });
  const { discount } =
    offer === undefined
      ? {
          discount: 0,
        }
      : offer;
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(updateModalTripContent(trip, destination, offer, true));
  };

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light text-end">
        <span style={{ fontWeight: "600", fontSize: "1.2em" }}>
          {city} - {uf}
        </span>
      </div>

      <div className="card-body text-primary">
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Desembarque: </span>
          {landingPlace}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Partida: </span>
          {formatDateTime(departure)}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Chegada: </span>
          {formatDateTime(arrival)}
        </p>

        <hr />

        {discount !== 0 && (
          <h5 className="card-title text-end">
            <span style={{ fontSize: "0.9em" }}>de</span>{" "}
            {formatCurrency(defaultValue)}
            <br />
          </h5>
        )}
        <h5 className="card-title text-end mb-4">
          por apenas
          <span style={{ fontSize: "1.5em" }}>
            {" "}
            {formatCurrency(defaultValue * (1 - discount))}
          </span>
        </h5>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleSelect}
        >
          Selecionar
        </button>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span>Viagem</span>
      </div>
    </div>
  );
}
