import { Routes, Route } from 'react-router-dom'
import { Urlpage } from './components/Urlpage'
import { VCardpage } from './components/VCardpage'
import { Phonepage } from './components/Phonepage'
import { Smspage } from './components/Smspage'
import { Mailpage } from './components/Mailpage'
import { Wifipage } from './components/Wifipage'
import { Pdfpage } from './components/Pdfpage'
import { Imagepage } from './components/Imagepage'
import { Navbar } from './components/Navbar'
function App() {
  return (  
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    
      <div id="bar"><h2> &nbsp;&nbsp;QR Code</h2></div>
      <div><h1 id="heading">QR Code Generator</h1></div>
  
    <div className="parent-container">
        <div className="container">   
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Urlpage />} ></Route>  
                  <Route path="/vcard" element={<VCardpage />} ></Route>
                  <Route path="/phone" element={<Phonepage />} ></Route>
                  <Route path="/sms" element={<Smspage />} ></Route>
                  <Route path="/mail" element={<Mailpage />}></Route>
                  <Route path="/wifi" element={<Wifipage/>}></Route>
                  <Route path="/pdf" element={<Pdfpage />}></Route>
                  <Route path="/image" element={<Imagepage />}></Route>
            </Routes>
          </div>
    </div>
    </div>
    </>

  );
}

export default App;
