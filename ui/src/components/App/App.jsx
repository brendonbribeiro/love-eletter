import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

import styles from './App.module.scss'
import LoginButton from '../LoginButton'
import JoinRoom from '../JoinRoom'
import Game from '../Game'

const App = () => {
  const [profile, setProfile] = useState({})
  const [socket, setSocket] = useState({})
  const [room, setRoom] = useState(null)
  const [game, setGame] = useState(null)

  useEffect(() => {
    setSocket(
      io('http://localhost:8000')
        .on('joinedRoom', ({ roomId, game }) => {
          console.log(`Joined, room ${roomId}`)
          setGame(game)
          console.log('Profile:', profile)
          setRoom(roomId)
          console.log('Game:', game)
        })
    )
  }, [profile])

  const onAuthenticatedSuccessfully = profile => {
    console.log(profile)
    setProfile(profile)
  }

  const createRoom = () => {
    socket.emit('createRoom', {
      name: profile.name,
      imageUrl: profile.imageUrl,
      email: profile.email
    })
  }

  const joinRoom = roomId => {
    socket.emit('joinRoom', {
      name: profile.name,
      imageUrl: profile.imageUrl,
      email: profile.email,
      roomId
    })
  }

  return (
    room
      ? (
        <Game game={game} email={profile.email} />
        )
      : (
        <div className={styles.app}>
          {
            profile.name
              ? (
                <JoinRoom
                    profile={profile}
                    joinRoom={joinRoom}
                    createRoom={createRoom}
                />
                )
              : (
                <>
                  <h1>Love eLetter</h1>
                  <h2>A digital version of Love Letter cardgame</h2>
                  <LoginButton onAuthenticatedSuccessfully={onAuthenticatedSuccessfully}/>
                </>
                )
              }
        </div>
        )

  )
}

export default App