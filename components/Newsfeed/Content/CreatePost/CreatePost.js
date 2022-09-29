import React from 'react';

const CreatePost = () => {
  return (
    <>
      <div class='create-post-area'>
        <div class='create-post'>
          <div class='current-user-image'>
            <img src='./img/user.jpg' alt='' />
          </div>
          <div class='create-post-content'>
            <input type='text' placeholder='Write Something Here...' />
          </div>
        </div>
        <div class='create-post-option'>
          <div class='add-image'>
            <input type='file' id='add-image-post' />
            <h5>
              <img src='./icons/video-camera.png' alt='' />
              <span> Live Video</span>
            </h5>
          </div>

          <div class='add-videos'>
            <input type='file' id='add-video-post' />
            <h5>
              <img src='./icons/gallery.png' alt='' />
              Photo/Video
            </h5>
          </div>

          <div class='add-checkin'>
            <h5>
              <img src='./icons/calendar.png' alt='' />
              Events
            </h5>
          </div>

          <div class='add-tag-friends'>
            <h5>
              <img src='./icons/heart.png' alt='' />
              Activity
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
