import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateTrips } from "../store/actions/trips.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import { getTrips } from "../api/api";

export function Destination({ destination }) {
  const { city, uf, landingPlace } = destination;
  const currentOffer = useSelector((state) => state.currentReq.offer);
  const dispatch = useDispatch();

  const handleSelect = async () => {
    try {
      const res = await getTrips(destination.id, currentOffer);
      if (res.status === 200) {
        dispatch(updateTrips(res.data));
      } else {
        dispatch(updateModalInfo("Erro ao obter as viagens!", false));
      }
    } catch {
      dispatch(updateModalInfo("Falha na comunicação com o servidor!", false));
      dispatch(updateTrips([]));
    }
  };

  return (
    <div
      id={city.replaceAll(" ", "")}
      className="card border-primary mb-3"
      style={{ width: "100%" }}
    >
      <div className="card-header bg-primary text-light">
        <span>Destino</span>
      </div>

      <div
        className="card-body text-primary p-0"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundImage: `url('${require(`../images/${city}.jpg`)}')`,
        }}
      >
        <div className="m-0 p-3 row" style={{ minHeight: "23rem" }}>
          <div
            className="align-self-start rounded p-2 "
            style={{ width: "auto", backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <h5
              className="display-6 m-0 "
              style={{ fontSize: "1.8em", fontWeight: "bold" }}
            >
              {city} - {uf}
            </h5>
          </div>
          <div className="col-12 align-self-end text-end">
            <Link
              to={"/Viagens"}
              onClick={handleSelect}
              className="btn btn-lg btn-primary"
            >
              Selecionar
            </Link>
          </div>
        </div>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">Desembarque: {landingPlace}</span>
      </div>
    </div>
  );
}
