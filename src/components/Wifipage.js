import React, { useState } from 'react';
import './style.css'
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';


export function Wifipage() {
  const [ssid, setSSID] = useState('');
  const [password, setPassword] = useState('');
  const [securityType, setSecurityType] = useState("WPA");
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  const url=`WIFI:T:${securityType};S:${ssid};${securityType!== 'nopass' ? `P:${password};` : ''}H:false;`
  return (
    <div>
        <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                    <h3>WiFi QR Code:</h3>   
                    <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                        <h4>Network Name:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setSSID(e.target.value)} placeholder="SSID"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'55px'}}>
                        <h4>Password:</h4> 
                        <input type="password" style={{ width:'65%'}} onChange={(e) => setPassword(e.target.value)} />
                     </div>
                     <div>
            
                        <h4>Encryption:</h4> 
                        <input type="radio" value="WPA" checked={securityType === "WPA"} onChange={(e) => setSecurityType(e.target.value)}/>
                        <label htmlFor="wpa-wpa2">WPA/WPA2</label>

                        <input style={{marginLeft:'20px'}} type="radio" value="WEP" checked={securityType === "WEP"} onChange={(e) => setSecurityType(e.target.value)}/>
                        <label htmlFor="wep">WEP</label>
                     </div>
                     <br/>
                     <br/>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
            <div  style={{flex: '3'}}>
              <QRpane  url ={url} fore={fore}  back={back}  size={size}/> 
            </div>
        </div>
		</div>
  )}

