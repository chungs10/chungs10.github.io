import HTMLFlipBook from 'react-pageflip';
import leftBook from './leftBook.png';
import rightBook from './rightBook.png';

function MyBook(props) {
    return (
        <HTMLFlipBook width={300} height={500} style={{ backgroundColor: '#FDF3DE' }}>
            <div className="demoPage">
                <img src={leftBook} alt="Page 1" />
            </div>
            <div className="demoPage">
                <img src={rightBook} alt="Page 2" />
            </div>
            <div className="demoPage">
                <img src={leftBook} alt="Page 3" />
            </div>
            <div className="demoPage">
                <img src={bookPage4} alt="Page 4" />
            </div>
        </HTMLFlipBook>
    );
}

export default MyBook;
