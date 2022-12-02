import "./App.scss";
import OfferCardList from "./components/OfferCardList/OfferCardList";
import YourOffer from "./components/YourOffers/YourOffers.js";
// import NewYourOffer from "./components/NewYourOffers/NewYourOffers.js";
import OfferDetailsPage from "./pages/OfferDetailsPage/OfferDetailsPage";
import Header from "./components/Header/Header.js";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<YourOffer/>} />
        <Route path="/swapOffers" element={<OfferCardList/>} />
        {/* <Route path="/selected" element={<NewYourOffer/>}/> */}
        {/* <Route path="/selectedRemove" element={<NewYourOfferWithRemoved/>}/> */}
        <Route path="/offerDetails" element={<OfferDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
