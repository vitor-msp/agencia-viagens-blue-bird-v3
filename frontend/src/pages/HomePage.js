import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <div
        className={
          "bg-img row p-0 m-0 d-flex flex-column justify-content-center"
        }
      >
        <div className="w-auto px-4 py-2 mx-auto d-flex flex-column bg-opac">
          <strong className="text-blue-bird">Blue Bird</strong>
          <span className="text-ag-viag">Agência de Viagens</span>
        </div>
      </div>

      <div className={"row p-1 p-sm-5 m-0"}>
        <h1 className="text-center text-light pt-4">
          Conheça nossos destinos!!
        </h1>

        <div className="col-12 col-sm-6 p-3">
          <div
            className="bg-opac p-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundImage: `url('${require(`../images/São Paulo.jpg`)}')`,
              minHeight: "23rem",
            }}
          >
            <span
              className="align-self-start rounded p-2 text-primary"
              style={{
                fontSize: "5vmin",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              São Paulo
            </span>
          </div>
        </div>

        <div className="col-12 col-sm-6 p-3">
          <div
            className="bg-opac p-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundImage: `url('${require(`../images/Rio de Janeiro.jpg`)}')`,
              minHeight: "23rem",
            }}
          >
            <span
              className="align-self-start rounded p-2 text-primary"
              style={{
                fontSize: "5vmin",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              Rio de Janeiro
            </span>
          </div>
        </div>

        <div className="col-12 col-sm-6 p-3">
          <div
            className="bg-opac p-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundImage: `url('${require(`../images/Belo Horizonte.jpg`)}')`,
              minHeight: "23rem",
            }}
          >
            <span
              className="align-self-start rounded p-2 text-primary"
              style={{
                fontSize: "5vmin",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              Belo Horizonte
            </span>
          </div>
        </div>

        <div className="col-12 col-sm-6 p-3">
          <div
            className="bg-opac p-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundImage: `url('${require(`../images/Salvador.jpg`)}')`,
              minHeight: "23rem",
            }}
          >
            <span
              className="align-self-start rounded p-2 text-primary"
              style={{
                fontSize: "5vmin",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              Salvador
            </span>
          </div>
        </div>

        <div className="col-12 p-3">
          <Link to={"Destinos"} className="btn btn-lg btn-outline-light w-100">
            Escolha já
          </Link>
        </div>
      </div>
    </>
  );
}
