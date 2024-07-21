import './App.css';
import MyBook from './Book';
import Footer from './footer';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%'}}>
      <div style={{ width: '100%', height: '40px',  backgroundColor: '#FDF3DE'}}></div>
      <div style={{ backgroundColor: '#FDF3DE' }}>
        <MyBook />
      </div>
      <sideBar />
      <Footer />
    </div>
  );
}

export default App;
