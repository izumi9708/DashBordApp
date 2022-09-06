import PrefModal from "./PrefModal";

const Day = ()=>{

  let dt = new Date();
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let date = dt.getDate();
  let dayArray = ["日","月","火","水","木","金","土"];
  let day = dayArray[dt.getDay()];

  function dayColor(){
    let style;
    switch(day){
      case '日':
          style = '#f02525';
      break;
      
      case '土':
        style = '#0517d9';
      break;
  
      default:
        style = '#bcbcbc';
    }

    return style;
  }


  return(
    <div className="container-item">
      <div className="container-inner date-wrapper">
        <p className="number-text year">{year}</p>
        <div className="number-flex flex-date">
          <div className="flex-svg date">{month}/{date}</div>
          <p className="flex-text day"
              style={{color:dayColor()}}
          >{day}曜日</p>
        </div>
      </div>
    </div>
  );
  
}
export default Day;