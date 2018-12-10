import { Layout, Menu, Row, Col} from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './layout.less';


import ImgCalendar from "../imgcalendar/imgcalendar.js"
const { Header, Content, Footer } = Layout;


class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        defaultProps:{
          open:false
        },
        imgData:{'27':{'title':"THIS IS TITLE",'content':"THIS IS CONTENT",'data':"THIS IS CRUUENTDATE",'id':'27'}}
    };    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    onPanelChange=(value, mode) =>{
      console.log(value, mode);
    }

    render() {
        return (
          <Layout className="MyLayout">
          <Header  style={{ height:'72px',background:"white",position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" >
            </div> 
            <Menu
              theme="white" 
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '70px' }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">图片</Menu.Item>
              <Menu.Item key="3">文章</Menu.Item>
            </Menu>
          </Header>
          <Content style={{marginTop: 64 }}>
                <Row>
                <Col span={10}>
                <ImgCalendar date={this.state.imgData} />
                </Col>
                <Col span={10}></Col>

                <Col span={2}>

                </Col>

              </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        );
    }
}

export default SiderDemo;
