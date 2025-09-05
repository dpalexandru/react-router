import React from 'react'

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Benvenuto!</h1>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-3 mb-md-0">
          <img
            src="https://t4.ftcdn.net/jpg/01/15/04/39/360_F_115043913_g00I2WhOKYresf7JId9GTTnNy50FBDRi.jpg"
            alt="saldi"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">Oggi saldi su Fake Store!</h4>
          <p className="lead">
            Non perdere l'occasione! Dai un’occhiata ai nostri prodotti in super sconto e approfitta delle offerte di oggi.
          </p>
          <button className="btn btn-primary btn-lg">Vedi Prodotti</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
