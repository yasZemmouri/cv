import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Cv } from './pages/Cv';
import { Form } from './pages/Form' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path='/cv' element={<Cv/>}/>
    </Routes>
  )

  
}

export default App;
