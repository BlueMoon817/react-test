import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tab from '../components/tab';
const Main = (commonInstance) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.TEST.Tab();
  }, []);
  return (
    <div className="wrap wrap-main">
      <h1>Main</h1>
      <div className="tab-box">
        <Tab />
        <Tab />
      </div>
      <Link className="btn" to={navigate('/sub')}>Sub Page</Link>
    </div>
  )
}

export default Main;