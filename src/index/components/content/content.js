import React from 'react'

import moment from 'moment';
import {Row,Input,Card,Icon, Avatar,Col,Skeleton,Pagination} from 'antd';
import 'moment/locale/zh-cn';
import "./content.less";
import "../../index.less";

moment.locale('zh-cn');


const Search = Input.Search;
const { Meta } = Card;
/**
 * 自定义内容主键
 */
class Content extends React.Component {
    state = {
      data:[
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/10 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/11 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/12 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/13 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/14 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/15 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/16 22:15"},
        {title:"这是测试标题",description:"这hi是测试内容",author:"作者",img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",datetime:"2018/12/17 22:15"}
      ]
    }

    onShowSizeChange = (current,pageSize)=>{
      console.log(current, pageSize);
    }
  render() {
    return(
      <Row className="content_box">
          <Search
            className="content-search"
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <Row className="content-list" gutter={10}>
            {this.state.data.map(item=>{
              return   <Col className="content-item" span={6} key={item.datetime}>
                          <Card 
                            cover={<img alt="example" src={item.img} />}
                          >
                            <Skeleton loading={false} avatar active>
                              <Meta
                                avatar={<Avatar src="" />}
                                title={item.title}
                                description={item.description}
                              />
                            </Skeleton>
                        </Card>
                      </Col>
            })}
            <Col className="page-box" span={24} >
              <Pagination showSizeChanger onShowSizeChange={()=>this.onShowSizeChange} defaultCurrent={3} total={500} />
            </Col>
          </Row>
      </Row>
    );
  }
}

export default Content;

