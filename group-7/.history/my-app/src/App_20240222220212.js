import './App.css';
import MyBook from './Book';
import Footer from './footer';
import sideBar from './sideBar';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%'}}>
      <div style={{ width: '100%', height: '40px',  backgroundColor: '#FDF3DE'}}></div>
      <sideBar />
      <div style={{ backgroundColor: '#FDF3DE' }}>
        <MyBook />
      </div>
      <Footer />
    </div>
  );
}

export default App;
