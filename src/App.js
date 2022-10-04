import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from '../src/containers/ProductListing';
import ProductDetail from '../src/containers/ProductDetail'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
      <Route>404 Not Found!</Route>
    </Routes>
    </>
  );
}

export default App;
