import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
    <div className='header'>
        <img
           className="header__icon"
           src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
           alt=""
        />   

        <div className='header__center'>
          <input type="text" />
          <SearchIcon />  
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <AccountCircleIcon />

        </div>

    </div>
    )
}

export default Header
