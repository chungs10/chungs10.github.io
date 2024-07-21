import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={595} style={{ backgroundColor: '#FDF3DE' }}>
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
