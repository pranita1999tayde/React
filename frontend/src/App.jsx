import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'
import {Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register'
import UseState from './Components/27-10/UseState'
import UseEffect from './Components/31-10/UseEffect';
import UseEffectTwo from './Components/31-10/UseEffectTwo';
import UseEffectThree from './Components/31-10/UseEffectThree';
import UseEffectFour from './Components/31-10/UseEffecFour';
// import PropDrilling from './Components/02-11/Propdrilling';
import FormRegister from './Components/6-11/FormRegister.jsx';
import Login1 from './Components/8-11/Login1.jsx';



function App() {
  console.log("Hii form app file.")
  return (
    <div className="App">
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/Register' element = {<Register/>}/>
      <Route path='/use-state' element = {<UseState/>}/>
      <Route path='/use-effect' element = {<UseEffect/>}/>
      <Route path='/use-effect-2' element = {<UseEffectTwo/>}/>
      <Route path='/use-effect-3' element = {<UseEffectThree/>}/>
      <Route path='/use-effect-4' element = {<UseEffectFour/>}/>
      {/* <Route path='/propDrilling' element = {<PropDrilling myName ={Pranita} myState= "Maharashtra"/>}/> */}
      <Route path='/formRegister' element = {<FormRegister/>}/>
      <Route path='/login1' element = {<Login1/>}/>
     </Routes>
    </div>
  )
}

export default App;
