import React from 'react'
import './header.css'
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

function Header() {

    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">        
        <Link to="/">
            <img className='logo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="amazon-logo" />
        </Link>
        <div className="search">
            <input className='bar' type="text" />
            <SearchOutlined className='icon' />
        </div>
        <div className="nav">
            <Link to="/login">
                <div className="option">
                    <span className="optionLineOne">Hello Guest</span>
                    <span className="optionLineTwo">Sign In</span>
                </div>
            </Link>
            
            <div className="option">
                <span className="optionLineOne">Returns</span>
                <span className="optionLineTwo">& Orders</span>
            </div>
            <div className="option">
                <span className="optionLineOne">Your</span>
                <span className="optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
            <div className="shoppingCart">
                <ShoppingBasket className='cartIcon' />
                <span className="optionLineTwo cartCount">{basket?.length}</span>
            </div>     
            </Link>
        </div>
    </div>
  )
}

export default Header
