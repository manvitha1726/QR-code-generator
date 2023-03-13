import React, { useState } from 'react';
import './style.css'
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';


export function Mailpage() {
  const [email, setEmail] = useState('');
  const[subject,setSubject]=useState('');
  const[body,setBody]=useState('');
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div>
        <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                    <h3>Email QR code:</h3>
                    <p><i>For multiple mails separate by a comma(,)</i></p>  
                    <div style={{display:'flex', flexDirection:'row',gap:'40px'}}>
                        <h4>Email:</h4> 
                        <input autoComplete="email" type="email" style={{ width:'65%'}} onChange={(e) => setEmail(e.target.value)} placeholder="To email Address"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'27px'}}>
                        <h4>Subject:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setSubject(e.target.value)} placeholder="Enter email subject"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'47px'}}>
                        <h4>Body:</h4> 
                        <textarea  rows={10} cols={40} style={{ width:'65%'}} onChange={(e) => setBody(e.target.value)} placeholder="Enter your message here"/>
                     </div>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
            <div  style={{flex: '3'}}>
              <QRpane  url ={mailtoLink} fore={fore}  back={back}  size={size}/> 
            </div>
        </div>
		</div>
  )}


