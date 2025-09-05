import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chisiamo" element={<ChiSiamo />} />
    </Routes>
  )
}

export default App
