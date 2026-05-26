import React, { useState } from 'react';
import './Header.scss';
import './script/Header.js';

const Header = ( ) => { // вызов функции
 return (
 <header className="header">
         <div className="header__container">
               <div className="header__navigation">
                 <div className="header__logo">
                       <h1>hello world!</h1>
                 </div>
                 </div>
         </div>

  </header>

);
 };

export default Header;
