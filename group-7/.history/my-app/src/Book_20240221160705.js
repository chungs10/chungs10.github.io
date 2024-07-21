import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <HTMLFlipBook width={515} height={590} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="demoPage">
                <img src={bookLeft} alt="Page 1" />
            </div>
            <div className="demoPage">
                <img src={bookRight} alt="Page 2" />
            </div>
            <div className="demoPage">
                <img src={bookLeft} alt="Page 3" />
            </div>
            <div className="demoPage">
                <img src={bookRight} alt="Page 4" />
            </div>
        </HTMLFlipBook>
    );
}

export default MyBook;
