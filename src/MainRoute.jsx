import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Layout from './components/Layout/Layout'

function MainRoute() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainRoute
