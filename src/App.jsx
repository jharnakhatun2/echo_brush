import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

function App() {

  return (
    <>
      <Routes>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
