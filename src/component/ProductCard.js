import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useNavigate} from "react-router-dom"

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='Product-img' onClick={showDetail}>
        <img width={300}src={item?.img}/>
        <div>{item?.new== true?<h6><Badge bg="secondary">New</Badge></h6>:""}</div>
        <div className='img-font'>{item?.choice == true?"Consious Choice":""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        
    </div>
  )
}

export default ProductCard
