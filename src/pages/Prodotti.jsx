import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

// link recupero dati
const url = "https://fakestoreapi.com/products"

const Prodotti = () => {

  //recupero i dati dei prodotti tramite chiama axios
  useEffect(() => {
    axios.get(url)
      .then(resp => {
        console.log(resp.data)
      })
  }, []
  )


  return (
    <div className="container">
      <div className="row">
        <h1>Qui i prodotti:</h1>
      </div>
    </div>
  )
}

export default Prodotti
