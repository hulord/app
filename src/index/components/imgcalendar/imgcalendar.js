import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment';
import {Col,Row,Tag,Icon} from 'antd';
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
      onMouseOverId:'',
      ImgData:{
        '31':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '30':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '29':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '28':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '27':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '26':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '25':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '24':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '23':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '22':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '21':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '20':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '19':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '18':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
        '17':{'title':"这个是测试标题头看啊可能有什么效果",'content':"THIS IS CONTENT",'data':"这个是测试标题头看啊可能有什么效果",'id':'27','tag':["可乐","柠檬","橘子"]},
      }
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
    this.setState({onMouseOverId:id});
  }
  //鼠标移出事件
   onMouseOut = (id) =>{
    this.setState({onMouseOverId:''});
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
    let ImgList = this.state.ImgData;
    return(
    <Row className="well_box">
    <div>{imgData}</div>
    {
      <Col span={24} className="wells">
      <Col span={6}>back</Col>
      {
        ArrayData.map(item => {
          const  tags = ImgList[item]['tag']; 
          return <Col className="Position_R" 
              ref={(div)=>{this[`btn-${item}`] = div}}
              onMouseOver={()=>this.onMouseOver(item)}
              onMouseOut = {()=>this.onMouseOut(item)}
              style={{height:this.state.height,backgroundImage:`url(${img})`,backgroundSize:"100% 100%"}} span={6} key={item}>
            <div className="ShadeWell">{item}</div>
            <div ref={`btn-${item}-content`} className={this.state.onMouseOverId===item?"ImgContent":"none"}>
            { 
                
                // this.state.onMouseOverId===item && (
                    <Col className="main_img_content">
                    <div className="main_img_title">
                      {ImgList[item]['title']}
                    </div>
                    <div className="main_img_tag">
                      <div className="main_img_tag_date">2018/01/01</div>
                      { 
                          tags.length>0 && tags.map((e,i)=>{
                            return  <Tag  className="main_img_tag" key={i}>{e}</Tag>
                          })
                      }
                    </div>
                  </Col>
                  // ) 
              }
            </div> 
          </Col>
        }
        )
      }
      <Col span={6}>next</Col>
    </Col>
    }
    </Row>
    );
  }
}

export default ImgCalendar;

