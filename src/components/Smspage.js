import React, { useState } from 'react';
import './style.css'
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';


export function Smspage() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  return (
    <div>
        <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                    <h3>SMS QR Code:</h3>   
                    <div style={{display:'flex', flexDirection:'row',gap:'40px'}}>
                        <h4>Number:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setNumber(e.target.value)} placeholder="Mobile no"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'40px'}}>
                        <h4>Message:</h4> 
                        <textarea  rows={10} cols={40} style={{ width:'65%'}} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message here"/>
                     </div>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
            <div  style={{flex: '3'}}>
              <QRpane  url ={`smsto:${number}:${message}`} fore={fore}  back={back}  size={size}/> 
            </div>
        </div>
		</div>
  )}

