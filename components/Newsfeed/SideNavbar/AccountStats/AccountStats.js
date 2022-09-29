import React from 'react';

const AccountStats = () => {
  return (
    <>
      <div class='account-stats'>
        <h3>My Stats</h3>
        <p>Got New Connections!</p>
        <div class='accounts-stats-info'>
          <img src='./img/user-6.png' alt='' />
          <div class='account-stats-count'>
            <ul>
              <li>New Members this Week</li>
              <li>Looking to rendezvous</li>
              <li>New Photos this Week</li>
              <li>New Members this Week</li>
              <li>Looking to rendezvous</li>
            </ul>
            <ul>
              <li>12546</li>
              <li>548</li>
              <li>268</li>
              <li>12546</li>
              <li>548</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountStats;
