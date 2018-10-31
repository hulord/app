import React from 'react'
import ReactDOM from 'react-dom'
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
  constructor(props){
    super( props )
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
      ArrayData:[],
      hover:false,

    }
  }
  //组件渲染后调用
  componentDidMount() {
    this.updateSize();
    this.getimgdate();
    window.addEventListener('resize', () => this.updateSize());
  }
  //组件渲染前
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateSize());
  }

  updateSize() {
    try {
      const parentDom = ReactDOM.findDOMNode(this).parentNode;
      let { width, height } = this.props;
      //如果props没有指定height和width就自适应
      if (!width) {
        width = parentDom.offsetWidth;
      }
      if (!height) {
        height = width *0.38;
      }
      this.setState({ width, height });
    } catch (ignore) {
    }
  }
  //鼠标悬停事件
  onMouseOver = (id) =>{
    //let obj = ReactDOM.findDOMNode(this[`btn-${id}`]);
   

  }
  //鼠标移出事件
   onMouseOut = (id) =>{

;
  }
  //鼠标点击事件
  onClick = () =>{

  }
  getimgdate = ()=>{
    //获取之前14天的记录
    //初始时间到目标时间的时间数组
    let ArrayData = [];
    for(var i=1;i<15;i++){
      let CurrentDay = moment().subtract('days',i).date();
      ArrayData.push(CurrentDay);
    }
    ArrayData.sort(function(a,b){return a-b;})
    this.setState({ArrayData});
  }

  render() {
    let  ArrayData = this.state.ArrayData;
    const  {imgData} = this.props;
    console.log(imgData);
    return(
    <Row className="well_box">
    <div>{imgData}</div>
    {
      <Col span={24} className="wells">
      <Col span={6}>back</Col>
      {
        ArrayData.map(item => (  
          <Col className="Position_R" 
              ref={(div)=>{this[`btn-${item}`] = div}}
              onMouseOver={()=>this.onMouseOver(item)}
              onMouseOut = {()=>this.onMouseOut(item)}
              style={{height:this.state.height,backgroundImage:`url(${img})`,backgroundSize:"100% 100%"}} span={6} key={item}>
            <div className="ShadeWell">{item}</div>
            <span></span>
          </Col>
        ))
      }
      <Col span={6}>next</Col>
    </Col>
    }
    </Row>
    );
  }
}

export default ImgCalendar;

