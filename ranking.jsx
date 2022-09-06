import { useState } from "react";

const areaData = [
  {
      number : '1',
      name : '〇〇店'
  },
  {
      number : '2',
      name : '〇〇店'
  },
  {
      number : '3',
      name : '〇〇店'
  },
  {
      number : '4',
      name : '〇〇店'
  },
  {
      number : '5',
      name : '〇〇店'
  }

];

const prefData = [
  {
      number : '1',
      name : '△△店'
  },
  {
      number : '2',
      name : '△△店'            
  },
  {
      number : '3',
      name : '△△店'            
  },
  {
      number : '4',
      name : '△△店'            
  },
  {
      number : '5',
      name : '△△店'            
  }

];

let worldData = [
  {
      number : '1',
      name : '××店'
  },
  {
      number : '2',
      name : '××店'
  },
  {
      number : '3',
      name : '××店'
  },
  {
      number : '4',
      name : '××店'
  },
  {
      number : '5',
      name : '××店'
  }

];

const Ranking = ()=>{

  function DisplayRanking(data){
    return(
      <div className="ranking-flex-item area-container">
        {data.map((val,index)=>{
          return(
            <div
              key={index}
              className="ranking-item-container">
              <div className="ranking-number-bg">
                <p className="ranking-number">{val.number}</p>
              </div>
              <div className="ranking-text">{val.name}</div>
            </div>
          )
          
        })}
      </div>
    );
    
  }

  function slideRanking(num,e){
    const slideWrap = document.querySelector('.ranking-overview');
    const slideBar = document.querySelector('.select-underline');
    const rankingTitle = document.querySelectorAll('.ranking-title');
      
    if( num == 1 ){
      slideWrap.classList.add('view-area');
      slideWrap.classList.remove('view-sales');
      slideWrap.classList.remove('view-nation-wide');

      slideBar.classList.add('left-under-line');
      slideBar.classList.remove('center-under-line');
      slideBar.classList.remove('right-under-line');

    }else if(num == 2){
      slideWrap.classList.add('view-sales');      
      slideWrap.classList.remove('view-area');
      slideWrap.classList.remove('view-nation-wide');

      slideBar.classList.add('center-under-line');
      slideBar.classList.remove('left-under-line');
      slideBar.classList.remove('right-under-line');

    }else{
      slideWrap.classList.add('view-nation-wide');
      slideWrap.classList.remove('view-sales');      
      slideWrap.classList.remove('view-area');

      slideBar.classList.add('right-under-line');
      slideBar.classList.remove('left-under-line');
      slideBar.classList.remove('center-under-line');
     
    }

    for(let i of rankingTitle){
      i.classList.remove('select-ranking-color');
    }

    e.target.classList.add('select-ranking-color');
  }
  

  return(
    <div className="ranking-wrapper">
      <div className="ranking-inner">
        <h4 className="wrapper-title">実績</h4>
        <div className="ranking-display">
          <div className="ranking-title-container">
            <p className="ranking-title ranking-area select-ranking-color"
              onClick={(e)=>{slideRanking(1,e)}}
            >
              地域
            </p>
            <p className="ranking-title ranking-sales"
              onClick={(e)=>{slideRanking(2,e)}}
            >県別</p>
            <p className="ranking-title ranking-nation-wide"
              onClick={(e)=>{slideRanking(3,e)}}
            >全国</p>
            <div className="select-underline left-under-line" />
          </div>
          <div className="ranking-content">
            <div className="ranking-content-inner">
              <div className="ranking-flex">
                <div className="ranking-overview">
                    {DisplayRanking(areaData)}
                    {DisplayRanking(prefData)}
                    {DisplayRanking(worldData)}
                    
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

  );

}
export default Ranking;
