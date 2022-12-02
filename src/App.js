import "./App.scss";
import OfferCardList from "./components/OfferCardList/OfferCardList";
import YourOffer from "./components/YourOffers/YourOffers.js";
import NewYourOffer from "./components/NewYourOffer/NewYourOffer.js";


import Footer from "./components/Footer/Footer.js";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YourOffer/>} />
        <Route path="/swapOffers" element={<OfferCardList/>} />
        <Route path="/selected" element={<NewYourOffer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
