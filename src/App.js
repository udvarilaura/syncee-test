import SignIn from './routes/sign-in/sign-in-page.component';
import SignUp from './routes/sign-up/sign-up-page.component';
import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import CurrencyList from './routes/API-task/api-task.component';

function App() {

  return (
    <Routes>
      <Route index element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/currencies' element={<CurrencyList />} />
    </Routes>
  )
}

export default App;
