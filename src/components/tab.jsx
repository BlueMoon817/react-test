import React, {useEffect} from "react";
import TabFunc from '../common.js'
import '../css/scss/components/tab.scss'
const commonInstance = new TabFunc();

const Tab = () => {
  useEffect(() => {
    window.TEST.Tab();
  }, []);  
  return (
    <div className="tab js-tab">
      <ul className="tab-list js-tab-list" role="tablist">
        <li className="tab-item js-tab-item is-selected">
          <button type="button" className="tab-btn js-tab-btn" role="tab" aria-selected="true" aria-controls="tab01">Tab 01</button>
        </li>
        <li className="tab-item js-tab-item">
          <button type="button" className="tab-btn js-tab-btn" role="tab" aria-selected="true" aria-controls="tab02">Tab 02</button>
        </li>
        <li className="tab-item js-tab-item">
          <button type="button" className="tab-btn js-tab-btn" role="tab" aria-selected="true" aria-controls="tab03">Tab 03</button>
        </li>
      </ul>
      <div className="js-tab-panel tab-panel" role="tabpanel" id="tab01">
        Tab contents 01
      </div>
      <div className="js-tab-panel tab-panel" role="tabpanel" id="tab02" style={{display:'none'}}>
        Tab contents 02
      </div>
      <div className="js-tab-panel tab-panel" role="tabpanel" id="tab03" style={{display:'none'}}>
        Tab contents 03
      </div>
    </div>
  )
}

export default Tab;