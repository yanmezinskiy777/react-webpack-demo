import { FC } from 'react'
import ReactPng from '../assets/react-logo.png'

const App: FC = () => {
  return (
    <>
      <h1>Typescript react</h1>
      <img src={ReactPng} alt="react" width={200} />
    </>
  )
}

export default App
