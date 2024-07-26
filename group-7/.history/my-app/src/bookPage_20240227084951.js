import MyBook from './Book';
import Footer from './footer';
import SideBar from './sideBar';

function BookPage() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%', height: '100%'}}>
      <div style={{ width: '100%', height:'30px',  backgroundColor: '#FDF3DE'}}></div>
      <div style={{ backgroundColor: '#FDF3DE' }}>
        <MyBook />
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;