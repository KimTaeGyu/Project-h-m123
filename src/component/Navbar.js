import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom"

const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList=[
        '여성',
        'Divide',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
        ];
    const navigate = useNavigate()
    const goToLogin=()=>{
        navigate('/login')
    }
    const gotoHome=()=>{
        navigate('/')
    }
    const search=(event)=>{
        if(event.key === "Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <div className="nav-header">
                {authenticate ? (
                <div onClick={() => setAuthenticate(false)}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그아웃</span>
                </div>
                ) : (
                <div onClick={() => navigate("/login")}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </div>
                )}
            </div>
            </div>
        </div>
        <div className='nav-img' onClick={gotoHome}>
            <img width={100} src='data:image/png;base64,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'/>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event)=>search(event)} placeholder='제품 검색'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar