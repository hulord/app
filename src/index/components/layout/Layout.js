import {Layout, Menu, Icon,Col,Row } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './layout.less';


const {  Sider, Content } = Layout;


class SiderDemo extends Component {
    state = {
      collapsed: false,
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
          <Layout className="bg">
            <Row  style={{ width:'100%',margin:'0px'}} gutter={256}>
              <Col span={24} >
                    <Col span={18} style={{height:"17vw" }}>FLASH</Col>
                    <Col span={6}>weather</Col>
              </Col>
                <Col span={24}div style={{height:"100v"}}>
                  <Col span ={4}>
                        <Sider
                          breakpoint="xl"
                          collapsedWidth="100"
                          onBreakpoint={(broken) => { console.log(broken); }}
                          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        >
                          <div className="logo" />
                          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                              <Icon type="user" />
                              <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                              <Icon type="video-camera" />
                              <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Icon type="upload" />
                              <span>nav 3</span>
                            </Menu.Item>
                          </Menu>
                        </Sider>
                    </Col>
                    <Col span={20}>
                        <Content style={{ margin: '0 16px' }}>
                          <div key={1}  style={{ background: '#fff', minHeight: 360,height:'100%' }}>
                           dfafsfsdfsfs
                          </div>
                        </Content>
                    </Col>
                </Col>
            </Row>
          </Layout>
        );
    }
}

export default SiderDemo;
