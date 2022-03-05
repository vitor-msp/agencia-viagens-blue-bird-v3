import { useDispatch } from "react-redux";
import { updateModalTripContent } from "../store/actions/modalTripContent.actions";
import { formatDateTime } from "../helpers/formatDateTime";

export function MyTrip({ myPurchase }) {
  const { id, trip, offer } = myPurchase;
  const { departure, arrival, destination } = trip;
  const { city, uf, landingPlace } = destination;
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(updateModalTripContent(trip, destination, offer, false, id));
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

        <div className="text-end">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleSelect}
          >
            Detalhes
          </button>
        </div>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span>Minha Viagem</span>
      </div>
    </div>
  );
}
