import { Layout, Menu, Row, Col} from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './layout.less';


import ImgCalendar from "../calendar/calendar.js"
const { Header, Content, Footer } = Layout;


class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        defaultProps:{
          open:false
        }
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
                <Col span={12}  >
                <ImgCalendar />
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
