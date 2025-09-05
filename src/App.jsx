import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chisiamo" element={<ChiSiamo />} />
      <Route path="/prodotti" element={<Prodotti />} />
    </Routes>
  )
}

export default App
