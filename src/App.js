import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Landingpage from "./components/Home/Landingpage";
import CreateProduct from "./components/Home/CreateProduct";
import Navbar from "./components/Navbar/Navbar";
import TableDetails from "./components/Data/TableDetails";
import TablesDetails from "./components/Data/TablesDetails";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import LoginPage from "./components/Login/LoginPage";
import CreateProducts from "./components/Home/CreateProducts";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            exact
            path="/createproduct"
            element={
              <PrivateRoutes>
                <CreateProduct />
              </PrivateRoutes>
            }
          ></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-details/:id" element={<TablesDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
