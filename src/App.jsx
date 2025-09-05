import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import Layout from "./layouts/Layout"


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Route>
    </Routes>
  )
}

export default App
