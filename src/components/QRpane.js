import {React,useRef} from 'react'
import QRCode from 'react-qr-code';
import './style.css'
import { toPng } from 'html-to-image';

const QRpane = (props) => {
  const qrCodeRef = useRef(null);
  const handleDownload = () => {
    toPng(qrCodeRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'40px',textAlign:'center'}}>
        <div style={{marginTop:'20px'}} className='qrcontainer'>
            { (
		            <QRCode 
                      ref={qrCodeRef}
                      value={props.url}
		                	bgColor={props.back}
		                	fgColor={props.fore}
		                	size={props.size === '' ? 0 : props.size}
                      
		                />
            )}
            
        </div>   
        <div>
            <button style={{width:'100px'}}onClick={handleDownload}>Download</button> 
        </div>
    </div>
  )
}

export default QRpane  
