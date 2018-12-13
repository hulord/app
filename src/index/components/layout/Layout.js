import {Layout,Menu,Icon,Col,Row,Avatar,Button,Carousel} from 'antd';
import React, { Component } from 'react';
import {connect} from 'dva'
import 'antd/dist/antd.css';
import './layout.less';
import '../../index.less';
import Content from '../content/content'; 

const { Sider } = Layout;
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00'];

class SiderDemo extends Component {
    state = {
      collapsed: false,
      user: UserList[0],
      color: colorList[0],
    };  
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    onPanelChange=(value, mode) =>{
      console.log(value, mode);
    }
    
    changeUser = () => {
      const index = UserList.indexOf(this.state.user);
      this.setState({
        user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
        color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
      });
    }
    render() {
        const {app} = this.props;
        console.log(app);
        return (
          <Layout className="bg">
            <Row  style={{ width:'100%',margin:'0px',paddingLeft:"15%",paddingRight:"15%"}} >
              <Col className="index-header-left" span={24} >
                    <Col span={18} style={{height:"17vw" }}>
                        <Carousel vertical>
                          <div><h3>1</h3></div>
                          <div><h3>2</h3></div>
                          <div><h3>3</h3></div>
                          <div><h3>4</h3></div>
                        </Carousel>
                    </Col>
                    <Col span={6} >weather</Col>
              </Col>
                <Col className="index-content">
                  <Col span ={4}>
                    <Sider
                        className="index-sider"
                        breakpoint="sm"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                      >
                        <div className="index-avatar" >
                          <Row className="avatar-img" type="flex" justify="center" align="middle" >
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  size="large"/>
                            <Col className="avatar-title">胡**</Col>
                            <Row className="avatar-todo" type="flex" justify="center" align="middle" gutter={8}>
                                <Icon type="save"/>
                                <Icon type="copy" />
                                <Icon type="mail" />
                            </Row>
                          </Row>
                          <Row type="flex" justify="center">
                            <Button type="dashed" size="small"  ghost>login out</Button>
                          </Row>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                        <Content></Content>
                    </Col>
                </Col>
            </Row>
          </Layout>
        );
    }
}

export default connect(
    ({app})=>({app}))(SiderDemo);


