import { useState } from "react";


const prefArray = [
  {
      local : '北海道',
      value : 1,
      local_name : 'hokkaido',
      pref  : [
          {
            pref_name : '北海道',
            param : 'hokkaido'
          }
      ]
  },{
      local : '東北',
      value : 2,
      local_name : 'tohoku',
      pref : [
          {
            pref_name : '青森',
            param : 'aomori'
          },
          {
            pref_name : '秋田',
            param : 'akita'
          },
          {
            pref_name : '岩手',
            param : 'iwate'
          },
          {
            pref_name : '宮城',
            param : 'miyagi'
          },
          {
            pref_name : '山形',
            param : 'yamagata'
          },
          {
            pref_name : '福島',
            param : 'hukusima'
          }
      ]
  },{
      local : '関東',
      value : 3,
      local_name : 'kanto',
      pref : [
          {
            pref_name : '東京',
            param : 'tokyo'
          },
          {
            pref_name : '千葉',
            param : 'chiba'
          },
          {
            pref_name : '埼玉',
            param : 'saitama'
          },
          {
            pref_name : '神奈川',
            param : 'kanagawa'
          },
          {
            pref_name : '群馬',
            param : 'gunma'
          },
          {
            pref_name : '栃木',
            param : 'tochigi'
          },
          {
            pref_name : '茨城',
            param : 'ibaraki'
            }
      ]
  },{
      local : '中部',
      value : 4,
      local_name : 'chubu',
      pref : [
          {
            pref_name : '新潟',
            param : 'nigata'
          },
          {
            pref_name : '静岡',
            param : 'shizuoka'
          },
          {
            pref_name : '長野',
            param : 'nagano'
          },
          {
            pref_name : '岐阜',
            param : 'gihu'
          },
          {
            pref_name : '富山',
            param : 'toyama'
          },
          {
            pref_name : '石川',
            param : 'ishikawa'
          },
          {
            pref_name : '福井',
            param : 'hukui'
          },
          {
            pref_name : '山梨',
            param : 'yamanashi'
          },
          {
            pref_name : '愛知',
            param : 'aichi'
            }
      ]
  },{
      local : '近畿',
      value : 5,
      local_name : 'kinki',
      pref : [
          {
            pref_name : '京都',
            param : 'kyoto'
          },
          {
            pref_name : '大阪',
            param : 'osaka'
          },
          {
            pref_name : '三重',
            param : 'mie'
          },
          {
            pref_name : '滋賀',
            param : 'shiga'
          },
          {
            pref_name : '兵庫',
            param : 'hyogo'
          },
          {
            pref_name : '奈良',
            param : 'nara'
          },
          {
            pref_name : '和歌山',
            param : 'wakayama'
            }
      ]
  },{
      local : '中国',
      value : 6,
      local_name : 'chugoku',
      pref : [
          {
            pref_name : '鳥取',
            param : 'tottori'
          },
          {
            pref_name : '島根',
            param : 'shimane'
          },
          {
            pref_name : '岡山',
            param : 'okayama'
          },
          {
            pref_name : '広島',
            param : 'hiroshima'
          },
          {
            pref_name : '山口',
            param : 'yamaguchi'
          },
      ]
  },{
      local : '四国',
      value : 7,
      local_name : 'shikoku',
      pref : [
          {
            pref_name : '愛媛',
            param : 'ehime'
          },
          {
            pref_name : '香川',
            param : 'kagawa'
          },
          {
            pref_name : '徳島',
            param : 'tokushima'
          },
          {
            pref_name : '高知',
            param : 'kouchi'
          },
      ]
  },{
      local : '九州',
      value : 8,
      local_name : 'kyusyu',

      pref : [
          {
            pref_name : '福岡',
            param : 'hukuoka'
          },
          {
            pref_name : '佐賀',
            param : 'shiga'
          },
          {
            pref_name : '長崎',
            param : 'nagasaki'
          },
          {
            pref_name : '大分',
            param : 'oita'
          },
          {
            pref_name : '熊本',
            param : 'kumamoto'
          },
          {
            pref_name : '宮崎',
            param : 'miyazaki'
          },
          {
            pref_name : '鹿児島',
            param : 'kagoshima'
          },
      ]
  },{
      local : '沖縄',
      value : 9,
      local_name : 'okinawa',

      pref : [
          {
            pref_name : '沖縄',
            param : 'okinawa'
          }
      ]
  }
];


const PrefModal = ((props)=>{

  const [id,setId] = useState();

  const modal = document.querySelector('.pref-modal');
  const modalContent = document.querySelector('.modal-content');
  const mapItem = document.querySelectorAll('.map-item');

  const slideItem = document.querySelector('.map-content-inner');
  const backBtn = document.querySelector('.back-btn');
  
  if(props.state == true){
    modal.classList.add('modal-active');
    modalContent.classList.add('content-active');
  }

  function removeClass(){
      modal.classList.remove('modal-active');
      modalContent.classList.remove('content-active');
    
    
  }

// --------------- 日本地図クリック　ーーーーーーーーーーーーーーーーーーー

  // for(let i of mapItem){
  //   i.addEventListener('click',()=>{
  //     const id = i.id;
  //     const resetItem = document.querySelector('.initialize');

  //     if(resetItem != null){
  //       resetItem.remove();
  //     }

  //     if(slideItem.classList.contains('modal-prev')){
  //       slideItem.classList.remove('modal-prev');
  //     }

  //     slideItem.classList.add('modal-next');
  //     displayPref(id);
  //   });
  // }

  const mapClick = (e)=>{
      console.log(e.target);
      setId(e.target.id);
      
      if(slideItem.classList.contains('modal-prev')){
        slideItem.classList.remove('modal-prev');
      }

      slideItem.classList.add('modal-next');
      // displayPref(id);

  }
  

  // --------------------------------------------------------------------


  // ------------------- モーダルバック -----------------------------------

  if(backBtn != null){
    backBtn.addEventListener('click',()=>{
      slideItem.classList.remove('modal-next');
      slideItem.classList.add('modal-prev');
    });
  }



  // ------------------------ 都道府県クリック -----------------------

  const DipslayPref = ()=>{
    for(let i of prefArray){
      const val = i.value;

      if(id == val){
        const pref = i.pref;
        console.log(pref);
        return(
          <div className="initialize">
            {pref.map((mapItem)=>{
              console.log(mapItem);
              return(
                <div 
                  className="pref-item"
                  onClick={(e)=>{
                    getLatLon(e.target);
                  }}
                > 
                  <div className="pref-flex">
                    <p id={mapItem.param} className="pref-name">{mapItem.pref_name}</p>
                    <div className="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 19.84 19.84"><path id="circle-chevron-right-solid" d="M9.92,0a9.92,9.92,0,1,0,9.92,9.92A9.919,9.919,0,0,0,9.92,0ZM13.9,10.8l-4.34,4.34A1.24,1.24,0,0,1,7.8,13.382L11.268,9.92,7.8,6.456A1.24,1.24,0,0,1,9.557,4.7l4.34,4.34a1.236,1.236,0,0,1,.362.878A1.223,1.223,0,0,1,13.9,10.8Z" fill="#746AE8"/></svg></div>
                  </div>
                </div> 
              );
            })}
          </div>

        );
        
      }
    }
  }

  


  // ---------------------------------------------------------------

  async function getGeo(id){
    let area = id;
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${id}&limit=1&appid=83a388baa1e3740aa9f8a5db8040456c`);

    return response.json();
  
  }

  function getLatLon(e){
    const id = e.querySelector('.pref-name').id;
    const prefName = e.querySelector('.pref-name').textContent;
    
    getGeo(id).then(res=>{
      if(res.length > 0){
        removeClass();
        props.changeLat(res[0].lat);
        props.changeLon(res[0].lon);
        props.changePref(prefName);
        props.changeState();

      }else {
        alert('選択された都道府県にはお天気情報がありません。\n他の都道府県を選択してください');
      }
      

    });
  }

  

  return(
    <div className="pref-modal">
    <div className="cancel-layer modal-close"
        onClick={(()=>{
          props.changeState();
          removeClass();
        })}
    />
    <div className="modal-content">
      <div className="modal-title-inner">
        <div className="map-content-inner">
          <div className="map">
            <p className="modal-title">地方を選択してください</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 579.999 470"
              style={{ marginTop: 25 }}
            >
              <g
                id="グループ_617"
                data-name="グループ 617"
                transform="translate(-3818.001 -2358)"
              >
                <path
                  id={1}
                  className="map-item"
                  data-name="パス 180"
                  d="M574.966,81H423.033A5.033,5.033,0,0,1,418,75.966V5.034A5.033,5.033,0,0,1,423.033,0H574.966A5.034,5.034,0,0,1,580,5.034V75.966A5.034,5.034,0,0,1,574.966,81"
                  transform="translate(3818 2358)"
                  fill="#164174"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={2}
                  className="map-item"
                  data-name="パス 181"
                  d="M418.283,88.757l.207,114.884a5,5,0,0,0,5,4.987h32.628a5,5,0,0,1,4.995,5v32.5a5,5,0,0,0,5,5h71.009a5,5,0,0,0,4.995-5V88.748a5,5,0,0,0-4.995-5H423.278a4.994,4.994,0,0,0-5,5.005"
                  transform="translate(3817.717 2360.248)"
                  fill="#1c7d8e"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={3}
                  className="map-item"
                  data-name="パス 182"
                  d="M419.11,259.117v179a5,5,0,0,0,5,5h72a5,5,0,0,0,5-5v-11a5,5,0,0,1,5-5h31a5,5,0,0,0,5-5v-158a5,5,0,0,0-5-5h-113a5,5,0,0,0-5,5"
                  transform="translate(3818 2363)"
                  fill="#5abc89"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={4}
                  className="map-item"
                  data-name="パス 183"
                  d="M310.11,272.119h-33a5,5,0,0,1-5-5V236.115a5,5,0,0,1,5-5h11.008a5,5,0,0,0,5-5V194.115a5,5,0,0,1,5-5h38.008a5,5,0,0,1,5,5v12.008a5,5,0,0,0,5,5H452.114a5,5,0,0,1,5,5v30.067a5,5,0,0,1-4.936,5l-32.128.382a5,5,0,0,0-4.936,5V435.123a5,5,0,0,1-5,5H382.106a5,5,0,0,1-5-5V403.115a5,5,0,0,0-5-5H341.108a5,5,0,0,1-4.995-5l.057-116.071a5,5,0,0,0-5.011-5Z"
                  transform="translate(3818 2363)"
                  fill="#f7bc00"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={5}
                  className="map-item"
                  data-name="パス 184"
                  d="M209.11,299.1v74.022a5,5,0,0,0,5,5h32.008a5,5,0,0,1,5,5v53.008a5,5,0,0,0,5,5h49.008a5,5,0,0,0,5-5V405.115a5,5,0,0,1,5-5h12.008a5,5,0,0,0,5-5V279.115a5,5,0,0,0-5-5H256.079a5,5,0,0,0-5,4.968l-.055,9.959a5,5,0,0,1-4.982,4.968l-31.953.091a5,5,0,0,0-4.982,5"
                  transform="translate(3818 2363)"
                  fill="#fa7c04"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={6}
                  className="map-item"
                  data-name="パス 185"
                  d="M200.995,379H89A5.006,5.006,0,0,1,84,374V299A5.006,5.006,0,0,1,89,294h111.99a5,5,0,0,1,5,5V374a5,5,0,0,1-5,5"
                  transform="translate(3818 2363)"
                  fill="#d22f20"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={7}
                  className="map-item"
                  data-name="パス 186"
                  d="M221,465H107a5,5,0,0,1-5-5V387a5,5,0,0,1,5-5H221a5,5,0,0,1,5,5v73a5,5,0,0,1-5,5"
                  transform="translate(3818 2363)"
                  fill="#b561b3"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={8}
                  className="map-item"
                  data-name="パス 187"
                  d="M75.253,462H5.748A5.747,5.747,0,0,1,0,456.252v-156.5A5.747,5.747,0,0,1,5.748,294h69.5A5.748,5.748,0,0,1,81,299.748v156.5A5.748,5.748,0,0,1,75.253,462"
                  transform="translate(3818 2363)"
                  fill="#6b3e99"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  id={9}
                  className="map-item"
                  data-name="パス 188"
                  d="M164.326,251.107H97.673A2.674,2.674,0,0,1,95,248.433V212.674A2.674,2.674,0,0,1,97.673,210h66.653A2.674,2.674,0,0,1,167,212.674v35.759a2.674,2.674,0,0,1-2.674,2.674"
                  transform="translate(3818 2363)"
                  fill="#593f77"
                  onClick={(e)=>{mapClick(e)}}
                />
                <path
                  data-name="パス 189"
                  d="M97.025,270.815H181.75a5,5,0,0,0,5-5V192.183"
                  transform="translate(3818 2363)"
                  fill="none"
                  stroke="#9d9d9d"
                  strokeWidth={2}
                  onClick={(e)=>{mapClick(e)}}
                />
                <text
                  id="北海道"
                  className="local-name"
                  transform="translate(4293 2404.5)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    北海道
                  </tspan>
                </text>
                <text
                  id="東北"
                  className="local-name"
                  transform="translate(4281.914 2519.5)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    東北
                  </tspan>
                </text>
                <text
                  id="関東"
                  className="local-name"
                  transform="translate(4282.61 2713.5)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    関東
                  </tspan>
                </text>
                <text
                  id="中部"
                  className="local-name"
                  transform="translate(4179.221 2671)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    中部
                  </tspan>
                </text>
                <text
                  id="近畿"
                  className="local-name"
                  transform="translate(4079.221 2718.619)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    近畿
                  </tspan>
                </text>
                <text
                  id="中国"
                  className="local-name"
                  transform="translate(3946.999 2705.5)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    中国
                  </tspan>
                </text>
                <text
                  id="四国"
                  className="local-name"
                  transform="translate(3966 2792.5)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    四国
                  </tspan>
                </text>
                <text
                  id="九州"
                  className="local-name"
                  transform="translate(3842.5 2747)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    九州
                  </tspan>
                </text>
                <text
                  id="沖縄"
                  className="local-name"
                  transform="translate(3930.999 2600.499)"
                  fill="#fff"
                  fontSize={16}
                  fontFamily="KozGoPr6N-Bold, Kozuka Gothic Pr6N"
                  fontWeight={700}
                >
                  <tspan x={0} y={0}>
                    沖縄
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div className="pref-select-wrapper">
            <div className="back-btn-wrapper">
              <button type="button" className="back-btn">
                戻る
              </button>
            </div>
            <div className="pref-select-inner">
              <div className="pref-list">
                <DipslayPref
                  id={id}
                />
                {/* <div class="pref-item"> 
                              <div class="pref-flex">
                                  <p class="pref-name">東京</p>
                                  <div class="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 19.84 19.84"><path id="circle-chevron-right-solid" d="M9.92,0a9.92,9.92,0,1,0,9.92,9.92A9.919,9.919,0,0,0,9.92,0ZM13.9,10.8l-4.34,4.34A1.24,1.24,0,0,1,7.8,13.382L11.268,9.92,7.8,6.456A1.24,1.24,0,0,1,9.557,4.7l4.34,4.34a1.236,1.236,0,0,1,.362.878A1.223,1.223,0,0,1,13.9,10.8Z" fill="#746AE8"/></svg></div>
                              </div>
                          </div>  */}
              </div>
            </div>
          </div>
        </div>
        {/* <p class="modal-title">都道府県を選択してください</p> */}
        <div className="btn-wrapper">
          <button 
              onClick={(()=>{
                props.changeState();
                removeClass();
              })}
              type="button" 
              className="modal-close close-btn point-item">
            閉じる
          </button>
        </div>
      </div>
    </div>
  </div>

  );
});

export default PrefModal;