import React from 'react';

const AccountSettings = () => {
  return (
    <>
      <div class='account-settings'>
        <ul>
          <li>
            <div class='settings-icon-body'>
              <div class='settings-icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='settings-icon-body'>
                <p>Settings</p>
              </div>
            </div>
          </li>
          <li>
            <div class='settings-icon-body'>
              <div class='settings-icon'>
                <img src='./icons/heart-svgrepo-com.svg' alt='' />
              </div>
              <div class='settings-icon-body'>
                <p>English</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountSettings;
