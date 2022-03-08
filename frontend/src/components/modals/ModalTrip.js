import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SpinnerBtn } from "../forms/SpinnerBtn";
import {
  insertPurchase,
  removePurchase,
} from "../../store/actions/myPurchases.actions";
import { clearModalTripContent } from "../../store/actions/modalTripContent.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { deletePurchase, postPurchase } from "../../api/api";
import { formatCurrency } from "../../helpers/formatCurrency";
import { formatDateTime } from "../../helpers/formatDateTime";

export function ModalTrip({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const { trip, destination, offer, isGetPurchase, purchaseId } = content;
  const { defaultValue, departure, arrival } = trip;
  const { city, uf, landingPlace } = destination;
  const { discount, expiration } =
    offer === undefined || offer === null
      ? {
          discount: 0,
          expiration: "-",
        }
      : offer;
  const clientData = useSelector((state) => state.clientData);
  const myPurchases = useSelector((state) => state.myPurchases);

  const purchaseToPost = {
    tripId: trip.id,
    offerId: offer === undefined || offer === null ? null : offer.id,
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (clientData.email === null) {
      dispatch(
        updateModalInfo(
          "Para adquirir uma viagem, você precisa acessar sua conta!",
          false
        )
      );
    } else {
      isGetPurchase ? handleGetPurchase() : handleDeletePurchase();
    }
  };

  const handleGetPurchase = () => {
    setSpinner(true);
    setTimeout(async () => {
      try {
        const res = await postPurchase(purchaseToPost);
        if (res.status === 200) {
          handleClose();
          dispatch(updateModalInfo("Viagem adquirida com sucesso!!", true));
          if (myPurchases.length !== 0) {
            dispatch(insertPurchase(res.data));
          }
          document.getElementById("navMyTrips").click();
        } else {
          dispatch(updateModalInfo("Erro ao adquirir a viagem!", false));
          setSpinner(false);
        }
      } catch {
        setSpinner(false);
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    }, 1000);
  };

  const handleDeletePurchase = () => {
    setSpinner(true);
    setTimeout(async () => {
      try {
        const res = await deletePurchase(purchaseId);
        if (res.status === 200) {
          dispatch(removePurchase(purchaseId));
          handleClose();
          dispatch(updateModalInfo("Viagem cancelada com sucesso!!", true));
        } else {
          dispatch(updateModalInfo("Erro ao cancelar a viagem!", false));
          setSpinner(false);
        }
      } catch {
        setSpinner(false);
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    }, 1000);
  };

  const handleClose = () => {
    setModalOpen(false);
    dispatch(clearModalTripContent());
  };

  return (
    <>
      <Modal show={modalOpen} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-primary">
              {isGetPurchase ? "Adquirir Viagem" : "Detalhes da Viagem"}
            </span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <p>
              <span style={{ fontWeight: "600" }}>Destino: </span>
              {city} - {uf}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Desembarque: </span>
              {landingPlace}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Partida: </span>
              {formatDateTime(departure)}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Chegada: </span>
              {formatDateTime(arrival)}
            </p>
          </div>

          <hr />

          <div className="text-end">
            {discount !== 0 && (
              <>
                <p>
                  <span style={{ fontWeight: "600" }}>Valor padrão: </span>
                  {formatCurrency(defaultValue)}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Desconto: </span>
                  {discount * 100}%
                </p>
              </>
            )}
            <p style={{ fontWeight: "600" }}>
              Valor final: {""}
              <span style={{ fontSize: "1.5em" }}>
                {formatCurrency(defaultValue * (1 - discount))}
              </span>
            </p>
            {discount !== 0 && (
              <p>
                <span style={{ fontWeight: "600" }}>Promoção expira em: </span>
                {formatDateTime(expiration)}
              </p>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer>
          {isGetPurchase ? (
            <Form noValidate onSubmit={handleSubmit}>
              <SpinnerBtn
                value="Adquirir"
                loading={spinner}
                className="btn btn-primary"
                style={{ marginLeft: "5px" }}
              />
            </Form>
          ) : (
            <>
              <Form noValidate onSubmit={handleSubmit} className="me-auto">
                <SpinnerBtn
                  value="Cancelar Viagem"
                  loading={spinner}
                  className="btn btn-danger"
                />
              </Form>

              <button
                type="button"
                onClick={handleClose}
                className="btn btn-primary"
              >
                Fechar
              </button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
