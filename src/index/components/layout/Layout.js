import {Layout, Menu, Icon,Col,Row } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './layout.less';
import Content from '../content/content.js'; 


const {  Sider } = Layout;


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
                <Col  className="index-content" span={24} style={{height:"100v"}}>
                    <Col span ={4}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                      >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                          <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                          </Menu.Item>
                          <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                          </Menu.Item>
                        </Menu>
                      </Sider>
                    </Col>
                    <Col span={20}>
                        <Content style={{ margin: '0 16px' }}>
                          <div style={{ background: '#fff', minHeight: 360,height:'100%' }}>

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
