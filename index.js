import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './dash_bord_common.css';
import './dash_bord_top.css';
import PrefModal from './PrefModal';
import Weather from './weather';
import Day from './Day';
import Ranking from './ranking';
import Pie from './circle';

const Main = ()=>{
  const [lat,changeLat] = useState('35.616900');
  const [lon,changeLon] = useState('139.740739');
  const [prefName,changePref] = useState('東京');
  const [modalState,changeState] = useState(false);


  const openModal = (()=>{
    changeState(true);
  });

  const closeModal = (()=>{
    changeState(false);
  })



  
  return(
  <>
  <div className="header">
    <i className="fa-solid fa-bars humberger" />
    <div className="header-logo">ダッシュボード</div>
  </div>
  <div className="flex">
    {/* menu */}
    <div className="menu">
      <ul className="menu-list">
        <a href="">
          <li className="menu-item menu-top active">
            <div className="menu-icon">
              <svg
                id="home_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50.5 50.5"
              >
                <path
                  id="パス_8"
                  data-name="パス 8"
                  d="M18.833,38.771V26.146H27.25V38.771H37.771V21.938h6.312L23.042,3,2,21.938H8.313V38.771Z"
                  transform="translate(2.208 3.313)"
                  fill="#fff"
                />
              </svg>
            </div>
            <p className="menu-text">トップ</p>
          </li>
        </a>
      </ul>
    </div>
    {/* content */}
    <div className="content">
      <div className="content-head">
        <p className="head-text">ようこそ〇〇さま</p>
        <div className="head-btn-wrapper">
          <button
            type="button"
            className="contact-btn"
            onClick={()=>{window.location.href = "https://www.wantedly.com/id/sizumi"}}
          >
            お問合わせ
          </button>
          {/* <button type="button" class="logout-btn">ログアウト</button> */}
        </div>
      </div>
      {/* main-content */}
      <div className="main-content">
        <div className="breadcrumb">トップ</div>
        {/* ここまで */}
        <div className="main-inner">
          {/* number_content  */}
          <div className="number-wrapper">
            <div className="number-container">
            <Weather
              lat={lat}
              lon={lon}
              name={prefName}
              state={openModal}
            />
              {/* <div className="container-item">
                <div className="container-inner">
                  <p className="number-text">現在の天気</p>
                  <p className="setting-place">東京</p>
                  <div className="number-flex">
                    <div className="flex-svg" />
                    <p className="flex-text">
                      <span className="flex-num item1" />℃
                    </p>
                  </div>
                  <p className="link-text weather">地域の変更</p>
                </div>
              </div> */}
              {/* <div className="container-item">
                <div className="container-inner date-wrapper">
                  <p className="number-text year" />
                  <div className="number-flex flex-date">
                    <div className="flex-svg date" />
                    <p className="flex-text day" />
                  </div>
                </div>
              </div> */}
              <Day/>
              <div className="container-item">
                <div className="container-inner schedule-inner">
                  <p className="number-text">本日の予定</p>
                  <div className="number-flex schedule-flex">
                    <p className="flex-text">
                      <span className="flex-num item3">10</span>
                    </p>
                  </div>
                  <p className="link-text schedule">他３個のタスク</p>
                </div>
              </div>
            </div>
          </div>
          {/* ------- */}
          {/* else content  */}
          <div className="wrapper">
            <div className="wrapper-container">
              {/* <div className="graph-wrapper">
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
                          className="graph-item"
                          cx="50%"
                          cy="50%"
                          r="15.9154"
                        />
                        <circle
                          id="else-company"
                          className="graph-item"
                          cx="50%"
                          cy="50%"
                          r="15.9154"
                        />
                        <circle
                          id="another-store"
                          className="graph-item"
                          cx="50%"
                          cy="50%"
                          r="15.9154"
                        />
                        <circle
                          id="own-store"
                          className="graph-item"
                          cx="50%"
                          cy="50%"
                          r="15.9154"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
              <Pie/>
              <Ranking/>
              {/* <div className="ranking-wrapper">
                <div className="ranking-inner">
                  <h4 className="wrapper-title">売上トップ10</h4>
                  <div className="ranking-display">
                    <div className="ranking-title-container">
                      <p className="ranking-title ranking-area select-ranking-color">
                        エリア
                      </p>
                      <p className="ranking-title ranking-sales">営業部</p>
                      <p className="ranking-title ranking-nation-wide">全国</p>
                      <div className="select-underline left-under-line" />
                    </div>
                    <div className="ranking-content">
                      <div className="ranking-content-inner">
                        <div className="ranking-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div id="ranking" />
            </div>
            <div className="acutual-result-wrapper">
              <div className="result-inner">
                <h4 className="wrapper-title" />
                <div className="result-table-wrapper">現在準備中</div>
              </div>
            </div>
          </div>
          {/* ------------- */}
        </div>
      </div>
    </div>
  </div>

    <PrefModal
      state={modalState}
      changeState={closeModal}
      changeLat={changeLat}
      changeLon={changeLon}
      changePref={changePref}
    />
  
</>

  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);


