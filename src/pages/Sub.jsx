import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tab from '../components/tab';
const Sub = (commonInstance) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.TEST.Tab();
  }, []);
  return (
    <div className="wrap wrap-sub">
      <h1>Sub</h1>
      <div className="tab-box">
        <Tab />
        <Tab />
        <Tab />
      </div>
      <Link className="btn" to={navigate('/')}>Main</Link>
    </div>
  )
}

export default Sub;