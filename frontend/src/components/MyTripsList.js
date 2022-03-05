import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyTrip } from "./MyTrip";
import { SpinnerMap } from "./SpinnerMap";
import { getPurchases } from "../api/api";
import { updateAllMyPurchases } from "../store/actions/myPurchases.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";

export function MyTripsList() {
  const myPurchases = useSelector((state) => state.myPurchases);
  const [showMap, setShowMap] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const reqPurchases = async () => {
      try {
        const res = await getPurchases();
        if (res.status === 200) {
          dispatch(updateAllMyPurchases(res.data));
        } else {
          dispatch(updateModalInfo("Erro ao obter as viagens!", false));
        }
      } catch (error) {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    };
    if (myPurchases.length === 0) {
      reqPurchases();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {myPurchases.length === 0 ? (
        <p className="lead">
          <strong>Nenhuma viagem encontrada.</strong>
        </p>
      ) : !showMap ? (
        <SpinnerMap
          showMap={(bool) => {
            setShowMap(bool);
          }}
        />
      ) : (
        ""
      )}
      {showMap &&
        myPurchases.map((myPurchase) => (
          <MyTrip key={myPurchase.id} myPurchase={myPurchase} />
        ))}
    </div>
  );
}
