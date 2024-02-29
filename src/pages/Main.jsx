import React,{useEffect} from "react";
import Tab from '../components/tab';
import TabFunc from '../common.js'
import '../css/scss/components/tab.scss'
const commonInstance = new TabFunc();
const Main = () => {
  useEffect(() => {
    window.TEST.Tab();
  }, []);
  return (
    <div className="wrap wrap-main">
      <h1>Main</h1>
      <Tab />
      <Tab />
      <Tab />
    </div>
  )
}

export default Main;