import './App.css';
import MyBook from './Book';
import Footer from './footer';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%', position: 'absolute'}}>
      <div style={{ width: '100%', height: '40px',  backgroundColor: '#FDF3DE'}}></div>
      
      <MyBook />
      <Footer />
    </div>
  );
}

export default App;
