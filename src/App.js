import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Cv } from './pages/Cv';
import { Form } from './pages/Form' 
import { Nav } from './components/Nav';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path='/cv' element={<Cv/>}/>
    </Routes>
    </>
  )

  
}

export default App;
