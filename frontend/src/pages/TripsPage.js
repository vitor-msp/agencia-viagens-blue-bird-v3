import { TripsList } from "../components/TripsList";

export function TripsPage() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5"><strong>Viagens</strong></h1>
      <TripsList />
    </div>
  );
}
