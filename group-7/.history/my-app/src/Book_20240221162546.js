import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <HTMLFlipBook width={515} height={590}>
                <div className="demoPage" style={{ backgroundImage: `url(${bookLeft})` }}>
                    <img src={bookLeft} alt="Page 1" />
                </div>
                <div className="demoPage" style={{ backgroundImage: `url(${bookRight})` }}>
                    
                </div>
                <div className="demoPage" style={{ backgroundImage: `url(${bookLeft})` }}>
                    <img src={bookLeft} alt="Page 3" />
                </div>
                <div className="demoPage" style={{ backgroundImage: `url(${bookRight})` }}>
                    <img src={bookRight} alt="Page 4" />
                </div>
            </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
