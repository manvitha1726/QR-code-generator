import { useState } from "react";
import { storage } from "./firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Leftbottompanel}  from './Leftbottompanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import QRpane from './QRpane';

export function Pdfpage() {
    const [url, setUrl] = useState("");
    const [file, setFile] = useState("");
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(200);
    const [percent, setPercent] = useState(0);

    function handleChange(event) {
    setFile(event.target.files[0]);
      }
    const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
       
        setPercent(percent);
    },
    (err) => console.log(err),
    () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
           setUrl(url)
           console.log(url)
        });
    }
      );
  };
  return (
    <div>
          <div style={{ display: 'flex', height: '100%',marginLeft:'20px' }}>
             <div style={{flex: 7}}>
                 <div style={{ display: 'flex', flexDirection: 'column',marginTop:'10px' }}>
                 <h3>Select Doc files(.pdf/.docx):</h3>  
               <input type="file" id="file" onChange={handleChange} accept=".pdf,.docx" />
               <label for="file" class="f" style={{width:'80px'}}>Select file</label>
               <br/>
                <button style={{width:'40px'}} onClick={handleUpload}><FontAwesomeIcon icon={faUpload} /></button>
                      <br/>
                      <progress value={percent} max={100} /> 
                      <br/>
                      <Leftbottompanel  fore={fore} setFore={setFore} back={back} setBack={setBack} size={size} setSize={setSize}/>
                  </div>
               </div>
               <div style={{flex: '3'}}>
                    {/* {url} */}
                    <QRpane  url ={url} fore={fore}  back={back}  size={size}/> 
              </div>
           </div>
        </div>
)}


