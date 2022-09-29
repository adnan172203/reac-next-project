import React from 'react';

const UserStory = () => {
  return (
    <>
      <div class='user-stories'>
        <div class='add-stories'>
          <div class='add-story-user'>
            <input type='file' id='stories-btn' hidden />

            <label for='stories-btn'>+</label>
            <img src='./img/story/add-story.png' alt='' />
            <p>Create Shots</p>
          </div>
        </div>

        <div class='active-stories pt-30'>
          <div class='story-user'>
            <img src='./img/user-6.png' alt='' />
          </div>
          <div class='story-user'>
            <img src='./img/user-6.png' alt='' />
          </div>
          <div class='story-user'>
            <img src='./img/user-6.png' alt='' />
          </div>
          <div class='story-user'>
            <img src='./img/user-6.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStory;
