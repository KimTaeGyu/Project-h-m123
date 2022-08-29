import React,{useEffect, useState} from 'react'
import {useParams}from "react-router-dom"
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {
  let {id}= useParams()
  const [product,setProduct]=useState(null);
  const getProductDetail=async()=>{
    let url=`https://my-json-server.typicode.com/KimTaeGyu/Project-h-m123/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}/>
          </Col>
          <Col>
          <div><h1>{product?.title}</h1></div>
          <div><h3>₩{product?.price}</h3></div>
          <div><h3>{product?.choice == true?"Consious choice":""}</h3></div>
          <div><h2>{product?.new == true?"New item":""}</h2></div>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Size Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>

            <div className="d-grid gap-2 button">
              <Button variant="secondary" size="lg">
                장바구니 담기
              </Button>
             </div>
          </Dropdown>

          </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail