import React, { useState } from 'react';
import './style.css'
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';


export function Urlpage() {
  const [url, setUrl] = useState('');
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  return (
    <div>
        <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                    <h3>Your URL/Text:</h3>   
                    <div>
                        <input type="text" style={{width:'80%'}} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL/Text"/>
                    </div>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
            <div  style={{flex: '3'}}>
              <QRpane  url ={url} fore={fore}  back={back}  size={size}/> 
            </div>
        </div>
		</div> 
  )}

