import './App.css';
import MyBook from './Book';
import Footer from './footer';
import sideBar from './sideBar';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%'}}>
      <div style={{ width: '100%', height: '40px',  backgroundColor: '#FDF3DE'}}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', borderRadius: '50px', border: '2px solid #FF0000', background: '#E2D6C0', marginRight: '40px'}}>
        <sideBar />
      </div>
      <div style={{ backgroundColor: '#FDF3DE' }}>
        <MyBook />
      </div>
      <Footer />
    </div>
  );
}

export default App;
