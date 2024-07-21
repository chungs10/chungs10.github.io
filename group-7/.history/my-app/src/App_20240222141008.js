import './App.css';
import MyBook from './Book';
import Footer from './footer';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0' }}>
      <div style={{ width: '100%', height: '50px',  backgroundColor: '#FDF3DE'}}></div>
      <MyBook />
      <Footer />
    </div>
  );
}

export default App;
