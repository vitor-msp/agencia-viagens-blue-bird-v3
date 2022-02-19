import { useState } from "react";
import { useSelector } from "react-redux";
import { Trip } from "./Trip";
import { SpinnerMap } from "./SpinnerMap";

export function TripsList() {
  const trips = useSelector((state) => state.trips);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {trips.length === 0 ? (
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
      {showMap && trips.map((trip) => <Trip key={trip.id} trip={trip} />)}
    </div>
  );
}
