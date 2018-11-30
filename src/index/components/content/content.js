import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment';
import {Row} from 'antd';
import 'moment/locale/zh-cn';
import "./content.less";
import "../../index.less";

moment.locale('zh-cn');
/**
 * 自定义内容主键
 */
class content extends React.Component {
  constructor(props){
    super( props )
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
      ArrayData:[],
      hover:false,
      onMouseOverId:'',
      content:{
        top:{
          title:"",
          content:"",
          imgurl:""
        },
        today:[
          {title:"",content:""},
          {title:"",content:""}
        ]
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
    //let obj = ReactDOM.findDOMNode(this[`btn-${id}`]);
    // console.log(this.refs[`btn-`+id+`-content`]);
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
    return(
      <Row className="content_box">

      </Row>
    );
  }
}

export default content;

