import React, { useState } from 'react';
import './style.css'
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';


export function Phonepage() {
  const [number, setNumber] = useState('');
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  return (
    <div>
        <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                    <h3>Number:</h3>   
                    <div>
                        <input type="text" style={{width:'80%'}} onChange={(e) => setNumber(e.target.value)} placeholder="Your Phone no"/>
                    </div>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
            <div  style={{flex: '3'}}>
              <QRpane  url ={`tel:${number}`} fore={fore}  back={back}  size={size}/> 
            </div>
        </div>
		</div>
  )}


