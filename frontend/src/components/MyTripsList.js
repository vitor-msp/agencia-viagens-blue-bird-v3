import { useState } from "react";
import { useSelector } from "react-redux";
import { MyTrip } from "./MyTrip";
import { SpinnerMap } from "./SpinnerMap";

export function MyTripsList() {
  const myPurchases = useSelector((state) => state.myPurchases);
  const [showMap, setShowMap] = useState(false);

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
