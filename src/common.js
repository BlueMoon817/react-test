
function TabFunc(){
  window.TEST= window.TEST || {};
  window.TEST.Tab=function(){
    let tabArr = document.querySelectorAll('.tab');
    let tabListArr = [], tabPanelArr=[];

    tabArr.forEach((tab)=>{
      let panelEl = tab.querySelectorAll('.js-tab-panel');
      let ulEl = tab.querySelectorAll('.js-tab-item');
      tabPanelArr.push(panelEl);
      tabListArr.push(ulEl);
    });
    tabArr.forEach((tab, index) => {
      tab.addEventListener('click', function(ev){
        let liEl = ev.target.closest('LI') ? ev.target.closest('LI'):false;
        if (liEl){
          tabListArr[index].forEach((li,idx)=>{
            if(liEl===li){
              tabPanelArr[index][idx].classList.add('is-active');
              li.classList.add('is-selected');
            }else{
              li.classList.remove('is-selected');
              tabPanelArr[index][idx].classList.remove('is-active');
            }
          });
        }
      });
    });
  }
}
export default TabFunc;
