import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";

const ProductPage = () => {
  return (
    <div>
      <div className="container py-4">
        <Card className="shadow-sm" style={{ maxWidth: 420 }}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/640/360"
            alt="Placeholder"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
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
