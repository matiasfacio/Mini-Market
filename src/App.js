import React from 'react';
import './App.css';
import ListaProd from './components/ListaProd';
// import ListaProducts from './components/ListaProducts'
import GlobalContextFunction from './context/GlobalContext'
// import { GlobalContext } from './context/GlobalContext'

export default function App() {
  return (
    <div className="App-main">

      <GlobalContextFunction>
        <ListaProd />
      </GlobalContextFunction>

    </div>
 
  )
}
