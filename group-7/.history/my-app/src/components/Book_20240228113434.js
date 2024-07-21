import HTMLFlipBook from 'react-pageflip';
import bookLeft from '.././images/bookLeft.png';
import bookRight from '.././images/bookRight.png';
import Pencil from '.././images/Pencil.png';
import Inkpad from '.././images/InkPad.png';
import Circle from '.././images/Circle.png';
import MuseumForm from './MuseumForm.js';
import Circle_orange from '.././images/Circle_orange.png';
import { useState } from 'react';
import Draggable from 'react-draggable';
import stamp1 from '.././images/stamp1.png';
import stamp2 from '.././images/stamp2.png';
import stamp3 from '.././images/stamp3.png';
import stamp4 from '.././images/stamp4.png';
import stamp5 from '.././images/stamp5.png';
import stamp6 from '.././images/stamp6.png';
import stamp7 from '.././images/stamp7.png';
function MyBook(props) {
    const [showForm, setShowForm] = useState(false);

    const handleCircleClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '82vh', borderRadius: '50px', background: '#E2D6C0', marginRight: '40px', marginLeft: '170px', paddingTop:'20px', overflow:'hidden'}}>
            <div style={{width: '20vw', height: '20vw', position: 'absolute', left: '67vw', top: '35vh'}}>
                <img src={Pencil} alt="Pencil" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: '12vw', height: '12vw', position: 'absolute', left: '13vw', top: '60vh'}}>
                <img src={showForm ? Circle_orange : Circle} alt="Circle" style={{width: '100%', height: '100%'}} onClick={handleCircleClick} />
            </div>
            <div style={{width: '12vw', height: '12vw', position: 'absolute', left: '24vw', top: '64vh'}}>
                {Inkpad && <img src={Inkpad} alt="Inkpad" style={{width: '100%', height: '100%'}} />}
            </div>
            
            <HTMLFlipBook width={515} height={590}>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 1" />
                    <Draggable bounds="parent">
                        <img src={stamp4} alt="stamp" style={{ width: '13vw', height: '13vw', position: 'absolute', left: '6vw', top: '24vh' }} />
                    </Draggable>
                    <Draggable bounds="parent">
                        <img src={stamp2} alt="stamp" style={{ width: '13vw', height: '13vw', position: 'absolute', left: '3vw', top: '4vh' }} />
                    </Draggable>
                    <Draggable bounds="parent">
                        <img src={stamp5} alt="stamp" style={{ width: '13vw', height: '13vw', position: 'absolute', left: '13vw', top: '42vh' }} />
                    </Draggable>
                    <Draggable bounds="parent">
                        <img src={stamp3} alt="stamp" style={{ width: '12vw', height: '12vw', position: 'absolute', left: '18vw', top: '2vh' }} />
                    </Draggable>
                    <Draggable bounds="parent">
                        <img src={stamp7} alt="stamp" style={{ width: '12vw', height: '12vw', position: 'absolute', left: '18vw', top: '28vh' }} />
                    </Draggable>
                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 2" />
                    <Draggable bounds="parent">
                        <img src={stamp1} alt="stamp" style={{ width: '12vw', height: '12vw', position: 'absolute', left: '2vw', top: '3vh' }} />
                    </Draggable>
                    <Draggable bounds="parent">
                        <img src={stamp6} alt="stamp" style={{ width: '12vw', height: '12vw', position: 'absolute', left: '10vw', top: '20vh' }} />
                    </Draggable>
                </div>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 3" />

                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 4" />
                    <p></p>
                </div>
            </HTMLFlipBook>
            {showForm && <MuseumForm/>}
        </div>
    );
}

export default MyBook;
