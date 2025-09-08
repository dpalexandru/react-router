import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import axios from 'axios';


const ProductPage = () => {
  const { id } = useParams();

  // U S E S T A T E 
  const [product, setProduct] = useState({})

  // U S E E F F E C T 
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        console.log(product)
      })
  }, [id])


  return (
    <div>
      <div className="container py-4 section-light">
        <Card className="shadow-sm" style={{ maxWidth: 420 }}>
          <Card.Img
            variant="top"
            src="dddd"
            alt="Placeholder"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">Action</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ProductPage
