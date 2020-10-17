import React from "react";
import "./App.css";
import ListaProdCopy from "./components/ListaProdCopy";
// import ListaProducts from './components/ListaProducts'
import GlobalContextFunction from "./context/GlobalContext";
// import { GlobalContext } from './context/GlobalContext'

export default function App() {
  return (
    <div className="App-main">
      <GlobalContextFunction>
        <ListaProdCopy />
      </GlobalContextFunction>
    </div>
  );
}
