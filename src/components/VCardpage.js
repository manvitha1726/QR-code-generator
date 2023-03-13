import React, { useState } from 'react';
import {Leftbottompanel}  from './Leftbottompanel';
import QRpane from './QRpane';
export const VCardpage= () => {
  const [website, setWebsite] = useState();
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(200);
  const [email,setEmail]=useState('gmail.com')
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState();
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const vCardString = `BEGIN:VCARD
VERSION:3.0
N:${lname};${fname};;;
FN:${fname} ${lname}
TEL;TYPE=CELL:${number}
EMAIL:${email}
URL:${website}
ADR;TYPE=WORK:;;${street};${city};${state};${pincode};${country} 
END:VCARD`;

  return (
		<div>
      <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
            <div style={{flex: 7}}>
                 <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                     <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                        <h4>Your Name:</h4> 
                        <input type="text"  style={{ width:'30%'}} onChange={(e) => setFname(e.target.value)} placeholder="First name"/>
                        <input type="text" style={{ width:'30%'}} onChange={(e) => setLname(e.target.value)} placeholder="Last name"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'40px'}}>
                        <h4>Contact:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setNumber(e.target.value)} placeholder="Mobile no"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'55px'}}>
                        <h4>Email:</h4> 
                        <input type="email" autoComplete="email" style={{ width:'65%'}} onChange={(e) => setEmail(e.target.value)} placeholder="your @gmail.com"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'52px'}}>
                        <h4>Street:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setStreet(e.target.value)}/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>
                        <h4 style={{marginRight:'60px'}}>City:</h4> 
                        <input type="text" style={{ width:'30%'}} onChange={(e) => setCity(e.target.value)}/>
                        <input type="number" style={{ width:'30%'}} onChange={(e) => setPincode(e.target.value)} placeholder="Pin"/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'60px'}}>
                        <h4>State:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setState(e.target.value)}/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'35px'}}>
                        <h4>Country:</h4> 
                        <input type="text" style={{ width:'65%'}} onChange={(e) => setCountry(e.target.value)}/>
                     </div>
                     <div style={{display:'flex', flexDirection:'row',gap:'35px'}}>
                        <h4>Website:</h4> 
                        <input type="url" style={{ width:'65%'}} onChange={(e) => setWebsite(e.target.value)} placeholder="www.your-website.com"/>
                     </div>
                    <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                </div>
           </div>
           <div  style={{flex: '3'}}>
		          <QRpane url ={vCardString} fore={fore}  back={back}  size={size}/>   
           </div>
    </div>
	</div>
  );
};
