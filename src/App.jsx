import Home from './Home'
import Bitcoin from './Bitcoin'
import Ethereum from './Ethereum'
import Bnb from './Bnb'
import Xrp from './Xrp'
import Cardano from './Cardano'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bitcoin' element={<Bitcoin/>}/>
      <Route path='/ethereum' element={<Ethereum/>}/>
      <Route path='/bnb' element={<Bnb/>}/>
      <Route path='/xrp' element={<Xrp/>}/>
      <Route path='/cardano' element={<Cardano/>}/>
    </Routes>
  )
}

export default App
