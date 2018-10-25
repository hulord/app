import React from 'react'
import moment from 'moment';
import {Col,Row} from 'antd';
import 'moment/locale/zh-cn';
import "./imgcalendar.less";
import "../../index.less";
import img from "../../../asset/img/imgwell.png";
moment.locale('zh-cn');
/**
 * 自定义日历组建
 * 显示2周的图片信息
 * 组建包含事件：1.初始化
 *              2.鼠标悬停
 *              3.鼠标点击
 *              4.翻到前一周
 */
class ImgCalendar extends React.Component {
  state={
    ArrayData:[]
  }
  constructor(props){
    super( props )
    this.state={};
  }
  getimgdate = ()=>{
    //获取之前14天的记录
    //初始时间到目标时间的时间数组
    let ArrayData = [];
    for(var i=1;i<15;i++){
      ArrayData.push(moment().subtract('days',i).date());
    }
    ArrayData.sort(function(a,b){return a-b;})
    return (
      <Col span={24} className="wells">
        <Col span={6}>back</Col>
        {
          ArrayData.map(item => (  
            <Col className="Position_R" style={{height:"300px",backgroundImage:`url(${img})`,backgroundSize:"100% 100%"}} span={6} key={item}>
              <div className="ShadeWell">{item}</div>
            </Col>
          ))
        }
        <Col span={6}>next</Col>
      </Col>
    );
  }

  render() {
    return(
    <Row>
    {
      this.getimgdate()
    }</Row>
    );
  }
}

export default ImgCalendar;

