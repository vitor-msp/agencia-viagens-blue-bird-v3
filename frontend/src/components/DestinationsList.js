import { useSelector } from "react-redux";
import { Destination } from "./Destination";

export function DestinationsList() {
  const destinations = useSelector((state) => state.destinations);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {destinations.map((destination) => (
        <Destination key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
