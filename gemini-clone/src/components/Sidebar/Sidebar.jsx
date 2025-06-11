import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {Context} from '../../context/Context.jsx';
import './Sidebar.css';
import {assets} from '../../assets/assets'

const Sidebar = () => {

     const [extended, setExtended] = useState(false);
     const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

     const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
     }
  return (
    <div className='sidebar'>

      <div className="butterflies">
  {[...Array(5)].map((_, i) => (
    <img
      key={i}
      src="/images/butterfly1.png"  // 🔁 change this to match your image path!
      className="butterfly"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${30 + Math.random() * 30}px`,
      }}
      alt="butterfly"
    />
  ))}
  </div>

      <div className="top">
      <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
       <div onClick={()=>newChat()} className="new-chat">
        <img src={assets.plus_icon} alt="" />
       {extended ? <p>New Chat</p> : null} 
       </div>
       
      {extended ? <div className="recent">
         <p className="recent-title">Recent</p>
         {prevPrompts.map((item,index)=>{
            return(
                 <div onClick={()=>loadPrompt(item)} className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,18)} ...</p>
         </div>
            )
         })}

         
      <div className="butterflies">
  {[...Array(5)].map((_, i) => (
    <img
      key={i}
      src="/images/butterfly1.png"  // 🔁 change this to match your image path!
      className="butterfly"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${30 + Math.random() * 30}px`,
      }}
      alt="butterfly"
    />
  ))}
  </div>
  
        
       </div> : 
       null 
       }
      </div>

      <div className="button">
        <div className="button-item recent-entry">
            <img src={assets.question_icon} alt="" />
           {extended ? <p>Help  
      <div className="butterflies">
  {[...Array(2)].map((_, i) => (
    <img
      key={i}
      src="/images/butterfly3.png"  // 🔁 change this to match your image path!
      className="butterfly"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${30 + Math.random() * 30}px`,
      }}
      alt="butterfly"
    />
  ))}
  </div>
   </p>  : null }
        </div>
        <div className="button-item recent-entry">
            <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity  
      <div className="butterflies">
  {[...Array(3)].map((_, i) => (
    <img
      key={i}
      src="/images/butterfly3.png"  // 🔁 change this to match your image path!
      className="butterfly"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${30 + Math.random() * 30}px`,
      }}
      alt="butterfly"
    />
  ))}
  </div>
   </p> : null }
        </div>
        <div className="button-item recent-entry">
            <img src={assets.setting_icon} alt="" />
          { extended ? <p>Settings 

      <div className="butterflies">
  {[...Array(3)].map((_, i) => (
    <img
      key={i}
      src="/images/butterfly2.png"  // 🔁 change this to match your image path!
      className="butterfly"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${30 + Math.random() * 30}px`,
      }}
      alt="butterfly"
    />
  ))}
  </div>

   </p> : null }
        </div>
      </div>

    </div>
  )
}

export default Sidebar
