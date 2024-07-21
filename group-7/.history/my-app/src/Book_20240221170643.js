import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <HTMLFlipBook width={515} height={590}>
                <div className="demoPage">
                    <div style={{ position: 'relative' }}>
                        <img src={bookLeft} alt="Page 1" />
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>This is page 1</p>
                    </div>
                </div>
                <div className="demoPage">
                    <div style={{ position: 'relative' }}>
                        <img src={bookRight} alt="Page 2" />
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>This is page 2</p>
                    </div>
                </div>
                <div className="demoPage">
                    <div style={{ position: 'relative' }}>
                        <img src={bookLeft} alt="Page 3" />
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>This is page 3</p>
                    </div>
                </div>
                <div className="demoPage">
                    <div style={{ position: 'relative' }}>
                        <img src={bookRight} alt="Page 4" />
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>This is page 4</p>
                    </div>
                </div>
                </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
