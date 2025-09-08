import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductPage = () => {
  const { id } = useParams();

  // U S E S T A T E 
  const [product, setProduct] = useState({})

  // U S E E F F E C T 
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
  }, [id])


  return (
    <div className="container py-4 section-light d-flex justify-content-center">
      <Card className="shadow-sm">
        <div className="row">
          <div className="col-md-4">
            <Card.Img
              className="img-fluid h-100"
              src={product.image}
              alt={product.title}
              style={{ objectFit: "contain", padding: "1rem" }}
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="text-muted">
                {product.category}
              </Card.Text>
              <Card.Text>
                <strong>Description: </strong>{product.description}
              </Card.Text>
              <Card.Text className="fw-bold text-danger">Price:  € {product.price}</Card.Text>
              <Button as={Link} to="/prodotti" variant="primary">
                Vai ai Prodotti
              </Button>
              <Button disabled variant="danger m-3">Buy</Button>

            </Card.Body>
          </div>
        </div>
      </Card>
    </div>


  )
}

export default ProductPage
