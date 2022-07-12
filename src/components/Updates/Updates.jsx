import React from 'react'
import { UpdatesData } from '../../Data/Data'
import "./Updates.css"
const Uptades = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update,id)=>{
        return(
          <div className="update">
            <img src ={update.img}alt =""/>
            <div className="noti">
              <div 
              style={{
                marginBottom:"0.5rem"
              }}
              >
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <div>
                <span>{update.time}</span>
              </div>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default Uptades