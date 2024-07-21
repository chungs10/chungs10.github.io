import React from 'react';
import Logo from '.././images/Logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div style={{width: '100%', bottom: 0, background: '#FDF3DE', paddingTop:'20px', paddingBottom: '5px'}}>
            <div style={{width: 1125.34, height: 112, margin: '0 auto', position: 'relative'}}>
                <div style={{width: 375, height: 93, left: 0, top: 4, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#E4622E', fontSize: 25, fontFamily: 'Della Respira', fontWeight: '500', wordWrap: 'break-word'}}>MUSEO</div>
                    <div style={{width: 375, height: 47, left: 0, top: 46, position: 'absolute'}}>
                        <Link to="/signIn">
                            <div style={{width: 89, height: 12.89, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Your Account</div>
                        </Link>
                        <Link to="/book">
                            <div style={{width: 76, height: 12.89, left: 135, top: 0, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Stampbook</div>
                        </Link>
                        <Link to="/terms">
                            <div style={{width: 105, height: 12.89, left: 270, top: 34.11, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Terms & Privacy</div>
                        </Link>
                        <Link to="/credits">
                            <div style={{width: 48, height: 12.89, left: 135, top: 34.11, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Credits</div>
                        </Link>
                        <Link to="/home">
                            <div style={{width: 88, height: 12.89, left: 270, top: 0, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>About Museo</div>
                        </Link>
                        <Link to="/contact">
                            <div style={{width: 53, height: 12.89, left: 0, top: 34.11, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
                        </Link>
                    </div>
                </div>
                <div style={{width: 162.34, height: 112, left: 960, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 78, position: 'absolute', textAlign: 'right', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>© Copyright 2024 Museo<br/>All Rights Reserved</div>
                    <div style={{width: 77.78, height: 68.14, left: 84.56, top: 0, position: 'absolute'}}>
                        <img style={{width: 77.78, height: 62.64, left: 0, top: 0, position: 'absolute'}} src={Logo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
