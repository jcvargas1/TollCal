import './App.css';
import {React} from "react";
import NavBar from './components/Header';
import HeroSection from './components/Hero';
import {GridTilesOC, GridTilesRC, GridTilesOCRC} from './components/InfoGrid';
import TrafficCams from './components/TrafficCams';
import ErrorPage from './components/Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from './components/About';


// "home" part of the site. Has the router/controller for all the pages.

const store = require("store2");

export default function App() {


  // sets expiry timestamp for localstorage
 function setExpiry() {

  const timeNow = new Date()
  const item = {
    expiry: timeNow.getTime() + (1000 * 60 * 60 * 24)
  }
  store.set('expiry-time', JSON.stringify(item))
  
 }

 // Checks how old the data is in localstorage by checking time stam[]
function checkDataExpiry() {
  
  const expiryTime = store.get('expiry-time')
  const dateNow = new Date()

  if (!store.has('expiry-time')) {
    // fetch all data
    setExpiry()
    setData()
    console.log("No cache setting flag to true")
    return null

    
  }

  const expiryItem = JSON.parse(expiryTime)

  if (dateNow.getTime() >  expiryItem.expiry) {
    store(false)
    setExpiry()
    setData()
    console.log("????")

  }
  return null
}


// Function that does API call to DB
async function setData () {

  const response_oceb = await fetch("http://localhost:5000/getschedule_oceb");
    const response_ocwb = await fetch("http://localhost:5000/getschedule_ocwb");
    const response_rcwb1 = await fetch("http://localhost:5000/getschedule_rcwb1");
    const response_rcwb2 = await fetch("http://localhost:5000/getschedule_rcwb2");
    const response_rceb1 = await fetch("http://localhost:5000/getschedule_rceb1");
    const response_rceb2 = await fetch("http://localhost:5000/getschedule_rceb2");

    let result_oceb =   await response_oceb.json();
    let result_ocwb =  await response_ocwb.json();
    let result_rcwb1 =  await response_rcwb1.json();
    let result_rcwb2 = await response_rcwb2.json();
    let result_rceb1 =  await response_rceb1.json();
    let result_rceb2 =  await response_rceb2.json();

    store.set('cache-oceb', JSON.stringify(result_oceb))
    store.set('cache-ocwb', JSON.stringify(result_ocwb))
    store.set('cache-rcwb1', JSON.stringify(result_rcwb1))
    store.set('cache-rcwb2', JSON.stringify(result_rcwb2))
    store.set('cache-rceb1', JSON.stringify(result_rceb1))
    store.set('cache-rceb2', JSON.stringify(result_rceb2))

}

checkDataExpiry();



    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<HeroSection />}/>
          <Route path = "/oc" element = {<GridTilesOC />}/>
          <Route path = "/rc" element = {<GridTilesRC />}/>
          <Route path = "/ocrc" element = {<GridTilesOCRC />}/>

          <Route path = "/cams" element = {<TrafficCams />}/>
          <Route path = "/about" element = {<AboutSection />}/>
          <Route path = "*" element = {<ErrorPage />}/>
        </Routes>
      </Router>

    );
}

