import * as React from "react";
import "./App.css";
import SearchPage from "./views/searchPage/searchPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchPage>
          <Routes>
            <Route path={"/"} component={SearchPage} />
          </Routes>
        </SearchPage>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
