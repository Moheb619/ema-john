import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import NotFound from "./component/NotFound/NotFound";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import ProductDetail from "./component/ProductDetail/ProductDetail";
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop></Shop>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/review" element={<Review></Review>} />
          <Route path="/manage" element={<Inventory></Inventory>} />
          <Route
            path="product/:productKey"
            element={<ProductDetail></ProductDetail>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
