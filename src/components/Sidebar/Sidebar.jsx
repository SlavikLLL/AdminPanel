import React,{useState} from 'react'
import "./Sidebar.css"
import Logo from '../../img/logo.png'
import {SidebarData} from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import {UilBars} from "@iconscout/react-unicons"
import {motion} from "framer-motion"

const Sidebar = () => {
  const [selected,setSelected] = useState(0);
  const [opened,setOpened] = useState(true)
  const sidebarVariants ={
  true:{
    left :"0"
  },
  false:{
    left:"-60%"

  }
  }


  return (
    <>
    <div 
    style={opened?{left:"60%"}:{left:"5%"}}
    onClick={()=>setOpened(!opened)}
    className='bars'>
        <UilBars />
      </div>
    <motion.div 
    variants={sidebarVariants}
   animate={window.innerWidth<=768?`${opened}`:""}

    className="Sidebar">
      
     
        {/*logo*/}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/*menu*/}
        <div className="menu">
          {SidebarData.map((item,index)=>{
            return(
              <div className={selected === index?"menuItem active":"menuItem"}
              key = {index}
              onClick={()=>setSelected(index)}

              
              >
                <item.icon />
                <span>
                  {item.heading}
                </span>

              </div>
              
            )
          })}
          <div className="menuItem">
            <UilSignOutAlt/>
          </div>
          
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar