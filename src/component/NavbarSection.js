import React, { useState } from 'react';

const NavbarSection = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuBar, setMenuBar] = useState({
    Bar1: '',
    Bar2: '',
    Bar3: '',
  });

  const setMenu = () => {
    setOpenMenu(!openMenu);

    if (openMenu) {
      setMenuBar({
        Bar1: 'revAnimateBar1',
        Bar2: 'revAnimateBar2',
        Bar3: 'revAnimateBar3',
      });
    } else {
      setMenuBar({
        Bar1: 'animateBar1',
        Bar2: 'animateBar2',
        Bar3: 'animateBar3',
      });
    }
  };

  return (
    <div id='NavbarSection'>
      <div className='container '>
        <div className='justify_between'>
          <div className='navlogo'>
            <a href='#HeroSection'>Mayur Desai.</a>
          </div>
          <ul className='navlist '>
            <li>
              <a href='#HeroSection'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#project'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className='Nav_min' onClick={() => setMenu()}>
            <div className={`${menuBar.Bar1} bar1`}></div>
            <div className={`${menuBar.Bar2} bar2`}></div>
            <div className={`${menuBar.Bar3} bar3`}></div>
          </div>

          <div className={`${openMenu ? 'navDrawerOpen' : ''} navDrawer`}>
            <ul className='drawerNavlist'>
              <li>
                <a href='#HeroSection' onClick={() => setMenu()}>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' onClick={() => setMenu()}>
                  About
                </a>
              </li>
              <li>
                <a href='#skills' onClick={() => setMenu()}>
                  Skills
                </a>
              </li>
              <li>
                <a href='#project' onClick={() => setMenu()}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setMenu()}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
