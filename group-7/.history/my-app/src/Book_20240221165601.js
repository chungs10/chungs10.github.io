import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <HTMLFlipBook width={515} height={590}>
                <div class="page-image" style={{ backgroundImage: `url(${bookLeft})` }}>
                    <div class="page-image" style="background-image: url(images/html/1.jpg)"></div>
                </div>
                <div className="demoPage" style={{ backgroundImage: `url(${bookRight})` }}>
                    <img src={bookRight} alt="Page 2" />
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
