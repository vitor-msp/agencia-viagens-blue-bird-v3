import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export function SpinnerMap({ showMap }) {
  useEffect(() => {
    setTimeout(() => {
      showMap(true);
    }, 1000);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        size="lg"
        variant="primary"
        className="me-2"
      />
      <span className="ms-2 display-6" style={{ fontSize: "1.4em" }}>
        <strong>Aguarde...</strong>
      </span>
    </div>
  );
}
