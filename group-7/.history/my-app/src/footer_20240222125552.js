import React from 'react';
import ''

const Footer = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{width: '100%', position: 'absolute', bottom: 0}}>
                <div style={{width: 375, height: 93, left: 0, top: 4, position: 'relative'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#E4622E', fontSize: 25, fontFamily: 'Della Respira', fontWeight: '500', wordWrap: 'break-word'}}>MUSEO</div>
                    <div style={{width: 375, height: 47, left: 0, top: 46, position: 'absolute'}}>
                        {/* ... */}
                    </div>
                </div>
                <div style={{width: 162.34, height: 112, right: 0, top: 0, position: 'relative'}}>
                    <div style={{right: 0, top: 78, position: 'absolute', textAlign: 'right', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>© Copyright 2024 Museo<br/>All Rights Reserved</div>
                    <div style={{width: 77.78, height: 68.14, right: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 73.65, height: 4.13, right: 0, top: 64.01, position: 'absolute', background: '#E4622E'}} />
                        <img style={{width: 77.78, height: 62.64, right: 0, top: 0, position: 'absolute'}} src="./images/Nav_Logo.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
