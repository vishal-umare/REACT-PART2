import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import Form from './Form'
import CommentsForm from './commentsForm'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import WeatherApp from './WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}

      {/* <LikeButton/> */}

      {/* <LudoBoard/> */}

      {/* <TodoList/> */}

      {/* <Lottery/> */}

      {/* <Lottery n={4} winSum={15}/>  */}

      {/* <Form/> */}

      {/* <CommentsForm/> */}

      {/* <SearchBox /> */}

      {/* <InfoBox/> */}

      <WeatherApp/>
    </>
  )
}

export default App
