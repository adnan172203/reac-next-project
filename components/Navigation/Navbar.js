import React from 'react';

const Navbar = () => {
  return (
    <>
      <section class='navbar-area'>
        <div class='crunch-nav'>
          <div class='container-fluid'>
            <nav class='navbar'>
              <div class='navbar-left-side'>
                <a class='navbar-brand' href='index.html'>
                  LOGO
                </a>
              </div>

              <div class='navbar-middle'>
                <ul>
                  <li>
                    <img src='./icons/heart-svgrepo-com.svg' />
                  </li>
                  <li>
                    <img src='./icons/users-bold-svgrepo-com.svg' />
                  </li>
                  <li>
                    <img src='./icons/video-svgrepo-com.svg' />
                  </li>
                  <li>
                    <img src='./icons/fire-svgrepo-com.svg' />
                  </li>
                  <li>
                    <img src='./icons/bag-svgrepo-com.svg' />
                  </li>
                </ul>
              </div>
              <div class='navbar-right-side'>
                <div class='crunch-navbar-option'>
                  <ul>
                    <li>
                      <img src='./icons/video-svgrepo-com.svg' />
                    </li>
                    <li>
                      <img src='./icons/fire-svgrepo-com.svg' />
                    </li>
                    <li>
                      <img src='./icons/bag-svgrepo-com.svg' />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
