import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useSearchParams} from "react-router-dom";
import { Card, Button} from "react-bootstrap"

const ProductAll = () => {
    const [productList,setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();
    const getProducts=async()=>{
        let searchQuery=query.get('q') ||"";
        console.log("쿼리값은?",searchQuery);
        let url=`https://my-json-server.typicode.com/KimTaeGyu/Project-h-m123/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts()
    },[query])

  return (
    <div>
        <Container>
            <Row>
                {productList.map(menu=>
                <Col lg={3}><ProductCard item={menu}/>
                </Col>)}
            </Row>
        </Container>
        <ProductCard/>
    </div>
  )
}

export default ProductAll