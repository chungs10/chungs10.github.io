import React from 'react';
import Logo from './images/Logo.png';

const Footer = () => {
    return (
        <div style={{width: '100%', position: 'absolute', bottom: 0, background: '#FDF3DE'}}>
            <div style={{width: 1125.34, height: 112, margin: '0 auto', position: 'relative'}}>
                <div style={{width: 375, height: 93, padding: '4px 0', position: 'absolute'}}>
                    <div style={{margin: '0 auto', textAlign: 'center', color: '#E4622E', fontSize: 25, fontFamily: 'Della Respira', fontWeight: '500', wordWrap: 'break-word'}}>MUSEO</div>
                    <div style={{width: 375, height: 47, marginTop: '42px', position: 'relative'}}>
                        <div style={{width: 89, height: 12.89, display: 'inline-block', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Your Account</div>
                        <div style={{width: 76, height: 12.89, display: 'inline-block', marginLeft: '135px', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Stampbook</div>
                        <div style={{width: 105, height: 12.89, display: 'inline-block', marginLeft: '270px', marginTop: '34.11px', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Terms & Privacy</div>
                        <div style={{width: 48, height: 12.89, display: 'inline-block', marginLeft: '135px', marginTop: '34.11px', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Credits</div>
                        <div style={{width: 88, height: 12.89, display: 'inline-block', marginLeft: '270px', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>About Museo</div>
                        <div style={{width: 53, height: 12.89, display: 'inline-block', textAlign: 'center', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
                    </div>
                </div>
                <div style={{width: 162.34, height: 112, marginLeft: '960px', position: 'absolute'}}>
                    <div style={{marginRight: '0', textAlign: 'right', color: '#4B4338', fontSize: 14, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>© Copyright 2024 Museo<br/>All Rights Reserved</div>
                    <div style={{width: 77.78, height: 68.14, marginLeft: '84.56px', marginTop: '0', position: 'relative'}}>
                        <img style={{width: 77.78, height: 62.64, marginLeft: '-15px', marginTop: '0', position: 'absolute'}} src={Logo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
