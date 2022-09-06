import { useEffect } from "react";

const Pie = ()=>{
  
    let body = document.getElementsByTagName('body')[0];

    let css = document.createElement('style');
        css.media = 'screen';
        css.type = 'text/css';

    let data1 = 55;
    let data2 = 5;
    let data3 = 30;
    let data4 = 10;

    let max = 100;

    let percent1 = Math.round(data1 / max * 100);
    let percent2 = Math.round(data2 / max * 100);
    let percent3 = Math.round(data3 / max * 100);
    let percent4 = Math.round(data4 / max * 100);

    let ownStroke = 100 - percent1;
    let otherStroke = 100 - (percent1 + percent2);
    let elseStroke = 100 - (percent1 + percent2 + percent3);

    
    let graphStroke = [
      `@keyframes own-store{
          to {
              stroke-dashoffset:${ownStroke};
          }
      }`,
      `@keyframes another-store{
          to {
              stroke-dashoffset:${otherStroke};
          }
      }`
      ,
      `@keyframes else-company{
          to {
              stroke-dashoffset:${elseStroke};
          }
      }`,
      `@keyframes hoge{
          to {
              stroke-dashoffset:0;
          }
      }`
  ];

  let rules = document.createTextNode(graphStroke.join(`\n`));
        css.appendChild(rules);
    let head = document.getElementsByTagName('head')[0];
        head.appendChild(css);


        function SelectedGraph(e){
          let ownPie = document.getElementById('own-store');
          let anotherPie = document.getElementById('another-store');
          let elsePie = document.getElementById('else-company');
          let hoge = document.getElementById('hoge');
          let pieChart = document.querySelector('.pie-graph');
          let selectPie = document.createElement('div');
              selectPie.classList.add('select-pie');
          let clientRect = e.target.getBoundingClientRect();
          let left = clientRect.left;
          let top = clientRect.top;
          let width = clientRect.width;
          let height = clientRect.height;
          let selectPieContent = `<div class="pie-color"></div><p class="pie-text"></p>`;
  
          selectPie.innerHTML = selectPieContent;
          let centerLeft = left + (width/2);
          let centerTop = top + (height/2);
          pieChart.appendChild(selectPie);
          let pieColor = document.querySelector('.pie-color');
          let pieText = document.querySelector('.pie-text');
  
  
          if(e.target.classList.contains('own-store')){
                  anotherPie.style.filter = 'brightness(70%)';
                  elsePie.style.filter = 'brightness(70%)';
                  hoge.style.filter = 'brightness(70%)';
                  pieColor.style.backgroundColor = '#e3ce0e';
                  pieText.textContent = `${percent1}%`
  
              }else if (e.target.classList.contains('another-store')){
                  ownPie.style.filter = 'brightness(70%)';
                  elsePie.style.filter = 'brightness(70%)';
                  hoge.style.filter = 'brightness(70%)';
                  pieColor.style.backgroundColor = '#0cb3d4';
                  pieText.textContent = `${percent2}%`
  
              }else if(e.target.classList.contains('else-company')) {
                  ownPie.style.filter = 'brightness(70%)';
                  anotherPie.style.filter = 'brightness(70%)';
                  hoge.style.filter = 'brightness(70%)';
                  pieColor.style.backgroundColor = '#1264d6';
                  pieText.textContent = `${percent3}%`
              }else {
                  ownPie.style.filter = 'brightness(70%)';
                  anotherPie.style.filter = 'brightness(70%)';
                  elsePie.style.filter = 'brightness(70%)';
                  pieColor.style.backgroundColor = '#d6710d';
                  pieText.textContent = `${percent4}%`
              }
          // $(selectPie).offset({top:centerTop,left:centerLeft});
      }

      function selectOut(){
        let remove = document.querySelector('.select-pie');
            remove.remove();
        let pie = document.querySelectorAll('.graph-item');
        
        for(let i of pie){
            i.style.filter = 'unset';
        }
    }

  
  


  return(
    <div className="graph-wrapper">
    <div className="graph-wrapper-inner">
      <h4 className="wrapper-title">使用言語</h4>
      <div className="graph-item-container">
        <div className="graph-item-flex">
          <div className="graph-item-box own" />
          <p className="graph-item-text">JavaScript</p>
        </div>
        <div className="graph-item-flex">
          <div className="graph-item-box another" />
          <p className="graph-item-text">jQuery</p>
        </div>
        <div className="graph-item-flex">
          <div className="graph-item-box else" />
          <p className="graph-item-text">CSS</p>
        </div>
        <div className="graph-item-flex">
          <div className="graph-item-box hoge" />
          <p className="graph-item-text">HTML</p>
        </div>
      </div>
      <div className="pie-inner">
        <div className="pie-graph">
          <svg id="svg" viewBox=" 0 0 64 64">
            <circle
              id="hoge"
              className="graph-item hoge"
              cx="50%"
              cy="50%"
              r="15.9154"
              onMouseEnter={(e)=>{SelectedGraph(e)}}
              onMouseLeave={(e)=>{selectOut(e)}}
            />
            <circle
              id="else-company"
              className="graph-item else-company"
              cx="50%"
              cy="50%"
              r="15.9154"
              onMouseEnter={(e)=>{SelectedGraph(e)}}
              onMouseLeave={(e)=>{selectOut(e)}}
            />
            <circle
              id="another-store"
              className="graph-item another-store"
              cx="50%"
              cy="50%"
              r="15.9154"
              onMouseEnter={(e)=>{SelectedGraph(e)}}
              onMouseLeave={(e)=>{selectOut(e)}}
            />
            <circle
              id="own-store"
              className="graph-item own-store"
              cx="50%"
              cy="50%"
              r="15.9154"
              onMouseEnter={(e)=>{SelectedGraph(e)}}
              onMouseLeave={(e)=>{selectOut(e)}}
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Pie;