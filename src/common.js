
function TabFunc(){
  window.TEST= window.TEST || {};
  window.TEST.Tab=function(){
    let list = document.querySelectorAll('.js-tab-item');
    let btn = document.querySelectorAll('.js-tab-btn');
    let panel = document.querySelectorAll('.js-tab-panel');
    btn.forEach((item, idx) => {
      item.addEventListener('click', function () {
        let val = item.getAttribute('aria-control');
        panel.forEach(panel => {
          panel.classList.remove('is-active');
          if (val == panel.getAttribute('id')) {
            panel.classList.add('is-active');
          }
        });
        list.forEach((li, index) => {
          li.classList.remove('is-selected');
          if (idx === index) {
            li.classList.add('is-selected');
          }
        })
      });
    })
  }
}
export default TabFunc;
