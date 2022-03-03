import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../api/api";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import { updateAllOffers } from "../store/actions/offers.actions";
import { Offer } from "./Offer";

export function OffersList() {
  const offers = useSelector((state) => state.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await getOffers();
        if (res.status === 200) {
          dispatch(updateAllOffers(res.data));
        } else {
          dispatch(updateModalInfo(res.data.message, false));
        }
      } catch (error) {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    };
    if (offers.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {offers.map((offer) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
