import { DestinationsList } from "../components/DestinationsList";

export function DestinationsPage() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Destinos</strong>
      </h1>
      <DestinationsList />
    </div>
  );
}
