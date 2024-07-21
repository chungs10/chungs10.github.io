import HTMLFlipBook from 'react-pageflip';
import bookLeft from './images/bookLeft.png';
import bookRight from './images/bookRight.png';

function MyBook(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', borderRadius: '100px', border: '2px solid #FF0000', background: '#E2D6C0', marginRight: '30px'}}>
            <HTMLFlipBook width={515} height={590}>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 1" />
                    <p>This is page 1</p>
                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 2" />
                    <p>This is page 2</p>
                </div>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 3" />
                    <p>This is page 3</p>
                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 4" />
                    <p>This is page 4</p>
                </div>
            </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
