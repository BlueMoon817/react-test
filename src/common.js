
function TabFunc(){
  window.TEST= window.TEST || {};
  window.TEST.Tab=function(){
    let arr=[];
    
    let tabList = document.querySelectorAll('.js-tab-list');
    tabList.forEach((listItem, index)=>{
      arr.push({ "id": index, "tab": listItem.parentNode, "list":[], "panel":[]});
      arr[index].tab.querySelectorAll('.js-tab-panel').forEach(item =>{
        arr[index].panel.push(item);
      });
      listItem.querySelectorAll('.js-tab-item').forEach(li=>{
        arr[index].list.push(li);
      })
    });
    arr.forEach((ob,index)=>{
      ob.tab.addEventListener('click',function(ev){
        ob.list.forEach((li,idx)=>{
          ev.target.length==li ? li.classList.add('is-selected') : li.classList.remove('is-selected')
        })
      })
    });
  }
}
export default TabFunc;
