import React from 'react';
import Footer from './footer';
import SideBar from './sideBar';
function ProfilePage() {
  return (
      <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%', height: '100%'}}>
      <div style={{ width: '100%', height:'30px',  backgroundColor: '#FDF3DE'}}></div>
      <div style={{ backgroundColor: '#FDF3DE' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '82vh', borderRadius: '50px', background: '#E2D6C0', marginRight: '40px', marginLeft: '170px', paddingTop:'20px', overflow:'hidden'}}></div>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
export default ProfilePage;