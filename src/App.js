import './App.css';
import './styles/Auth.css'
import './styles/Chat.css'
import React, { useState, useRef } from 'react'
import { Auth } from './components/Auth.js'
import { Chat } from './components/Chat.js'
import Cookies from 'universal-cookie'
import { signOut } from "firebase/auth"
import { auth } from "./firebase-config"

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState("")

  const roomInputRef = useRef(null)

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }
 
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      {room ? (
        <div><Chat room={room}/></div>
      ) : (
        <div className='room'>
          <label>Enter Room Name:</label>
          <input ref={roomInputRef}/>
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}

      <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  )
  
}

export default App;
