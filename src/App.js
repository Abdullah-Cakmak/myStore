import "./App.css";
import AppBar from "./components/Appbar";
import Footer from "./components/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_PATH_ITEM_LIST, ROUTE_PATH_BASKET } from "./constants";
import ItemListPage from "./pages/ItemListPage";

import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import BasketPage from "./pages/BasketPage";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  containerStyle: {
    fontSize: "12px",
    font: "normal normal medium 18px/22px Rubik",
    letterSpacing: "0px",
    color: "#61666A",
    opacity: "1",
  },
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <ReduxProvider store={store}>
        <Router>
          <div className="App">
            <AppBar />
            <main className="Main">
              <Routes>
                <Route path={ROUTE_PATH_ITEM_LIST} element={<ItemListPage />} />
                <Route path={ROUTE_PATH_BASKET} element={<BasketPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ReduxProvider>
    </AlertProvider>
  );
}

export default App;
