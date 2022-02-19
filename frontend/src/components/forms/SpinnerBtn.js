import { Spinner } from "react-bootstrap";

export function SpinnerBtn({ value, loading, className = "", style = {} }) {
  return (
    <button
      type="submit"
      className={className}
      style={style}
      disabled={loading}
    >
      {loading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{ marginRight: "10px" }}
        />
      )}
      {value}
    </button>
  );
}
