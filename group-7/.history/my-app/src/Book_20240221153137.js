import HTMLFlipBook from 'react-pageflip';
import bookPage1 from './bookPage.png';
import bookPage2 from './bookPage.png';
import bookPage3 from './bookPage.png';
import bookPage4 from './bookPage.png';

function MyBook(props) {
    return (
        <HTMLFlipBook width={300} height={500} style={{ backgroundColor: '#FDF3DE' }}>
            <div className="demoPage">
                <img src={bookPage1} alt="Page 1" />
            </div>
            <div className="demoPage">
                <img src={bookPage2} alt="Page 2" />
            </div>
            <div className="demoPage">
                <img src={bookPage3} alt="Page 3" />
            </div>
            <div className="demoPage">
                <img src={bookPage4} alt="Page 4" />
            </div>
        </HTMLFlipBook>
    );
}

export default MyBook;
