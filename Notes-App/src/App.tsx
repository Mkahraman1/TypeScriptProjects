import Users from './components/Users'
import UserDetail from './components/UserDetail'

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UserDetail/>}></Route>
      </Routes>
    </div>
  )
}
export default App
