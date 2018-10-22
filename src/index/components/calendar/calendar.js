import React from 'react'
import { Calendar, Badge } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "./calendar.less";
moment.locale('zh-cn');

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
      ]; break;
    default:
  }
  return listData || [];
}



function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))
      }
    </ul>
  );
}


function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}


class ImgCalendar extends React.Component {    
    state = {
        defaultValue:'',
    };  

    render() {
        return(
            <Calendar 
                className="event" 
                dateCellRender={dateCellRender} 
                monthCellRender={monthCellRender} 
                mode="day"
                validRange={[moment("2018-10-01", "YYYY-MM-DD"),moment("2018-10-11", "YYYY-MM-DD")]}/>
        )}
}
export default ImgCalendar;