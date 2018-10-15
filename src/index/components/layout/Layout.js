import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';

import './layout.less'
const { Header, Content, Footer } = Layout;

class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
          <Layout className="MyLayout">
          <Header  style={{ height:'70px',background:"white",position: 'fixed', zIndex: 1, width: '100%' }}>
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
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        );
    }
}

export default SiderDemo;
