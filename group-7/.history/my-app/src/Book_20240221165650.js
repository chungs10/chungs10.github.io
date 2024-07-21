import HTMLFlipBook from 'react-pageflip';
import bookLeft from './bookLeft.png';
import bookRight from './bookRight.png';

function MyBook(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <HTMLFlipBook width={515} height={590}>
                <div class="page-image" style={{ backgroundImage: `url(${bookLeft})` }}></div>
                <div class="page-image" style={{ backgroundImage: `url(${bookLeft})` }}></div>
                <div class="page-image" style={{ backgroundImage: `url(${bookLeft})` }}></div>
                <div class="page-image" style={{ backgroundImage: `url(${bookLeft})` }}></div>
            </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
