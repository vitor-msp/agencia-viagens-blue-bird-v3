import { MyTripsList } from "../components/MyTripsList";

export function MyTripsPage() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5"><strong>Minhas Viagens</strong></h1>
      <MyTripsList />
    </div>
  );
}
