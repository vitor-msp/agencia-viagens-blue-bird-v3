import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalTrip } from "../components/modals/ModalTrip";
import { ModalInfo } from "../components/modals/ModalInfo";
import { ModalLogin } from "../components/modals/ModalLogin";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { OffersPage } from "../pages/OffersPage";
import { TripsPage } from "../pages/TripsPage";
import { MyTripsPage } from "../pages/MyTripsPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { getDestinations, getOffers } from "../api/api";
import { updateAllDestinations } from "../store/actions/destinations.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import { updateAllOffers } from "../store/actions/offers.actions";
import { isLogged } from "../helpers/isLogged";
import { insertClientEmail } from "../store/actions/clientData.actions";

function App() {
  const modalTripContent = useSelector((state) => state.modalTripContent);
  const modalInfo = useSelector((state) => state.modalInfo);
  const modalLogin = useSelector((state) => state.modalLogin);
  const destinations = useSelector((state) => state.destinations);
  const offers = useSelector((state) => state.offers);
  const dispatch = useDispatch();
  let errorMsg = false;

  useEffect(() => {
    const reqDestinations = async () => {
      try {
        const res = await getDestinations();
        if (res.status === 200) {
          dispatch(updateAllDestinations(res.data));
        } else {
          dispatch(updateModalInfo("Erro ao obter os destinos!", false));
        }
      } catch (error) {
        errorMsg = true;
      }
    };

    const reqOffers = async () => {
      try {
        const res = await getOffers();
        if (res.status === 200) {
          dispatch(updateAllOffers(res.data));
        } else {
          dispatch(updateModalInfo("Erro ao obter as promoções!", false));
        }
      } catch (error) {
        errorMsg = true;
      }
    };

    const reqData = async () => {
      const clientEmail = isLogged();
      if (clientEmail !== null) {
        dispatch(insertClientEmail(clientEmail));
      }
      errorMsg = false;
      if (destinations.length === 0) {
        await reqDestinations();
      }
      if (offers.length === 0) {
        await reqOffers();
      }
      if (errorMsg) {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    };
    reqData();
  }, []);

  return (
    <BrowserRouter>
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <div style={{ minHeight: "100vh" }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Home" element={<HomePage />}></Route>
              <Route path="/Contato" element={<ContactPage />}></Route>
              <Route path="/Destinos" element={<DestinationsPage />}></Route>
              <Route path="/Promocoes" element={<OffersPage />}></Route>
              <Route path="/Viagens" element={<TripsPage />}></Route>
              <Route path="/Minhas_Viagens" element={<MyTripsPage />}></Route>
              <Route path="/Minha_Conta" element={<MyAccountPage />}></Route>
            </Routes>
          </div>
          {modalTripContent !== null && (
            <ModalTrip content={modalTripContent} />
          )}
          {modalInfo !== null && <ModalInfo content={modalInfo} />}
          {modalLogin && <ModalLogin />}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
