import Navbar from '../components/Navigation/Navbar';
import Userinfo from '../components/Newsfeed/SideNavbar/Userinfo/Userinfo';
import AccountFeature from '../components/Newsfeed/SideNavbar/AccountFeature/AccountFeature';
import AccountSettings from '../components/Newsfeed/SideNavbar/AccountSettings/AccountSettings';
import AccountStats from '../components/Newsfeed/SideNavbar/AccountStats/AccountStats';
import Welcome from '../components/Newsfeed/Content/Welcome/Welcome';
import UserStory from '../components/Newsfeed/Content/UserStory/UserStory';
import CreatePost from '../components/Newsfeed/Content/CreatePost/CreatePost';
import Event from '../components/Newsfeed/Event/Event';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <div className='left-content'>
          <Userinfo />
          <AccountFeature />
          <AccountSettings />
          <AccountStats />
        </div>
        <div className='mid-content'>
          <Welcome />
          <UserStory />
          <CreatePost />
        </div>
        <div className='right-content'>
          <Event />
        </div>
      </div>
    </>
  );
};

export default Index;
