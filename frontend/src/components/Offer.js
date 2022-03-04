import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateTrips } from "../store/actions/trips.actions";
import { updateCurrentOffer } from "../store/actions/currentReq.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import { getTrips } from "../api/api";
import { formatDateTime } from "../helpers/formatDateTime";

export function Offer({ offer }) {
  const { discount, expiration, destinationId } = offer;
  const destination = useSelector((state) => {
    return state.destinations.find(({ id }) => id === destinationId);
  });
  const { city, uf } =
    destination === undefined
      ? {
          city: "",
          uf: "",
        }
      : destination;
  const dispatch = useDispatch();

  const handleSelect = async () => {
    dispatch(updateCurrentOffer(offer.id));
    if (destinationId !== null) {
      try {
        const res = await getTrips(destinationId, offer.id);
        if (res.status === 200) {
          dispatch(updateTrips(res.data));
        } else {
          dispatch(updateModalInfo("Erro ao obter as viagens!", false));
        }
      } catch {
        dispatch(
          updateModalInfo("Falha na comunicação com o servidor!", false)
        );
        dispatch(updateTrips([]));
      }
    }
  };

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light">
        <span>Promoção</span>
      </div>

      <div className="card-body text-primary">
        <h5 className="card-title">
          <span style={{ fontSize: "1.5em" }}>{discount * 100}% </span>
          <span style={{ fontSize: "0.9em" }}>de</span> desconto
        </h5>
        <p className="card-title text-end">em viagens para</p>
        <p className="card-title text-end mb-3">
          <span style={{ fontWeight: "600" }}>
            {destinationId === null
              ? "QUALQUER DESTINO"
              : `${city.toUpperCase()} - ${uf.toUpperCase()}`}
          </span>
        </p>
        <Link
          to={destinationId === null ? "/Destinos" : "/Viagens"}
          onClick={handleSelect}
          className="btn btn-outline-primary"
        >
          Selecionar
        </Link>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">
          Válido até {formatDateTime(expiration)}
        </span>
      </div>
    </div>
  );
}
