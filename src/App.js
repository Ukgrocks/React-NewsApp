import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navigation from './components/Navigation.js';
import News from './components/News.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = (props)=>{
return (
      <>
      <div>
        <Router>
<Navigation/>

<Routes>
<Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general"/>}/>
<Route exact path="/politics" element={<News key="politics" pageSize={5} country="in" category="politics"/>}/>
{/* <Route exact path="/travel" element={<News key="health" pageSize={5} country="in" category="health"/>}/> */}
<Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}/>
<Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}/>
<Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}/>
<Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
      
</Routes>
</Router>
      </div>
      </>
    )
  
}
export default App
