import React from 'react';

const AccountFeature = () => {
  return (
    <>
      <div class='account-feature'>
        <ul>
          <li>
            <div class='side-icon'>
              <div class='icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='icon-body'>
                <p>Home</p>
              </div>
            </div>
          </li>
          <li>
            <div class='side-icon'>
              <div class='icon'>
                <img src='./icons/users-bold-svgrepo-com.svg' alt='' />
              </div>
              <div class='icon-body'>
                <p>Groups</p>
              </div>
            </div>
          </li>
          <li>
            <div class='side-icon'>
              <div class='icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='icon-body'>
                <p>Favourites</p>
              </div>
            </div>
          </li>
          <li>
            <div class='side-icon'>
              <div class='icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='icon-body'>
                <p>Events Around Me</p>
              </div>
            </div>
          </li>
          <li>
            <div class='side-icon'>
              <div class='icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='icon-body'>
                <p>Subscription</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountFeature;
