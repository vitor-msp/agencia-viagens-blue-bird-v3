import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import { updateAllDestinations } from "../store/actions/destinations.actions";
import { updateAllOffers } from "../store/actions/offers.actions";
import { getDestinations, getOffers } from "../api/api";

function App() {
  const modalTripContent = useSelector((state) => state.modalTripContent);
  const modalInfo = useSelector((state) => state.modalInfo);
  const modalLogin = useSelector((state) => state.modalLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(updateAllDestinations(await getDestinations()));
      dispatch(updateAllOffers(await getOffers()));
    };
    getData();
  }, []);

  return (
    <BrowserRouter basename="/AgenciaViagens">
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
