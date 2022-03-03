import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "../api/api";
import { updateAllDestinations } from "../store/actions/destinations.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import { Destination } from "./Destination";

export function DestinationsList() {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await getDestinations();
        if (res.status === 200) {
          dispatch(updateAllDestinations(res.data));
        } else {
          dispatch(updateModalInfo(res.data.message, false));
        }
      } catch (error) {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    };
    if (destinations.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {destinations.map((destination) => (
        <Destination key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
