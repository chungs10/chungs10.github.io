import HTMLFlipBook from 'react-pageflip';

function MyBook(props) {
    return (
        <HTMLFlipBook width={300} height={500} style={{ backgroundColor: '#FDF3DE' }}>
            <div className="demoPage">
                <img src="./bookPage.png" alt="Page 1" />
            </div>
            <div className="demoPage">
                <img src="./bookPage.png" alt="Page 2" />
            </div>
            <div className="demoPage">
                <img src="page3.jpg" alt="Page 3" />
            </div>
            <div className="demoPage">
                <img src="page4.jpg" alt="Page 4" />
            </div>
        </HTMLFlipBook>
    );
}

export default MyBook;
