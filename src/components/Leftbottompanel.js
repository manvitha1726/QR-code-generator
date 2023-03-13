import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export const Leftbottompanel = (props) => {
  return (
    <div>
          <div style={{ marginTop: '15px' }}>
              <div className="container">
                  <a href="#" id="extract"> <FontAwesomeIcon icon={faPaintRoller} /> Style</a>  
              </div> 
              <div className="options" style={{display:'flex', flexDirection:'column',gap:'10px'}}>
                  <div style={{ marginTop: '10px'}}>
                      <label style={{paddingRight: '20px'}}>Select Size:</label>
                      <input type="number" min="100" max="500" value={props.size} onChange={(e) => props.setSize(e.target.value)}/>
                  </div>
        
                  <div className="container1">
                      <label >ForeGround:</label>
                      <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div id="color-picker-1" className="container1">
                            <input type="color" className="style1" value={props.fore} onChange={(e) => props.setFore(e.target.value)} />
                            {props.fore}
                        </div>
                      </div>
                  </div>
                  
                  <div className="container1">
                      <label >BackGround:</label>
                      <div id="color-picker-2" className="container1">
                          <input type="color" className="style1" value={props.back} onChange={(e) => props.setBack(e.target.value)} />
                          {props.back}
                      </div>
                  </div>
                </div>
              </div> 
           </div> 
  )
}
