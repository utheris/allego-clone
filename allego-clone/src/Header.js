import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue()
    return (
        <nav className="header"> 
            <div className="header__wrapper">
                <Link className='header__logo' to="/"><span >allego</span></Link> 
                <div className="header__search">
                    <input type="text" placeholder="czego szukasz?" className="header__searchInput"></input>
                    <button className="header__searchBtn">Szukaj</button>
                </div>
                <div className="header__nav">
                <Link className="header__navLink"  to="/login"><ForumOutlinedIcon className="header__navLink--icon"/></Link>
                <Link className="header__navLink" to="/cart"><ShoppingBagOutlinedIcon className="header__navLink--icon"/><span>{basket?.length}</span></Link>
                <Link className="header__navLink"  to="/login">Moje Konto</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Header
