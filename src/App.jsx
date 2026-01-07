import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}

      {/* <LikeButton/> */}

      {/* <LudoBoard/> */}

      {/* <TodoList/> */}

      <Lottery/>
    </>
  )
}

export default App
