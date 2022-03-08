import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { clearCurrentOffer } from "../../store/actions/currentReq.actions";
import { showModalLogin } from "../../store/actions/modalLogin.actions";
import { clearClientData } from "../../store/actions/clientData.actions";
import { clearMyPurchases } from "../../store/actions/myPurchases.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

export function Navbar() {
  const clientData = useSelector((state) => state.clientData);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("BBJwtInfo");
    dispatch(clearClientData());
    dispatch(clearMyPurchases());
    dispatch(updateModalInfo("Você saiu da sua conta!!", true));
  };

  return (
    <nav className="row p-0 m-0 bg-transparent">
      <div id="nav" className="col-9 navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid justify-content-start px-0">
          <button
            className="navbar-toggler my-2 my-lg-0 bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to={"/"} className="navbar-brand mx-2 mx-lg-4">
            BlueBird{" "}
            <span style={{ fontSize: "0.7em" }} className="d-none d-sm-inline">
              Viagens
            </span>
          </Link>
          <div className="collapse navbar-collapse" id="navToggler">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/Contato"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Contato
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/Destinos"}
                  onClick={() => {
                    dispatch(clearCurrentOffer());
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Destinos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/Promocoes"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Promoções
                </NavLink>
              </li>
              {clientData.email !== null && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to={"/Minhas_Viagens"}
                      id="navMyTrips"
                      className={({ isActive }) =>
                        isActive
                          ? "activeNav nav-link py-3 bg-transparent"
                          : "nav-link py-3 bg-transparent"
                      }
                    >
                      Minhas Viagens
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={"/Minha_Conta"}
                      className={({ isActive }) =>
                        isActive
                          ? "activeNav nav-link py-3 bg-transparent"
                          : "nav-link py-3 bg-transparent"
                      }
                    >
                      Minha Conta
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-3 d-flex justify-content-center align-items-center">
        {clientData.email === null ? (
          <a
            onClick={() => {
              dispatch(showModalLogin(true));
            }}
            className="nav-link btn"
          >
            Acessar
          </a>
        ) : (
          <NavLink
            to={"/"}
            onClick={logout}
            className="nav-link"
          >
            Sair
          </NavLink>
        )}
      </div>
    </nav>
  );
}
