import { useSelector } from "react-redux";
import { Offer } from "./Offer";

export function OffersList() {
  const offers = useSelector((state) => state.offers);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {offers.map((offer) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
