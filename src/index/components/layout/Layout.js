import {connect} from 'dva';
import React from 'react';
import pathToRegexp from 'path-to-regexp'
import Helmet from 'react-helmet';
import classnames from 'classnames';
import styles from './layout.less';
 
const Layout=({ children,dispatch,menu,locationPathname })=>{
  /**这里是对应的ui部分 */
  const menuList=menu.getIn(['byId']).toList();
  let menuName='';
  menuList.map(item=>{
    if(pathToRegexp(item.get('path')).exec(locationPathname)){
      menuName = item.get('name');
    }
  });
 
  //判断是否是登录页，登录页面和内页是不同的布局
  const loginUrl=menu.getIn(['byId','login','path']);
  const isLoginPage=pathToRegexp(loginUrl).exec(locationPathname)?true:false;
 
  return (
    <React.Fragment>
      <Helmet>
        <title>
          {menuName}
        </title>
      </Helmet>
      {isLoginPage?
        children
      :
        <div className={classnames(styles.LBodyOuter)}>
          <div className={classnames(styles.LHeader)}>
            logo
          </div>
          <div className={classnames(styles.LBody)}>
            <div className={classnames(styles.LTree)}>
              <p>哈哈哈哈</p>
            </div>
            <div className={classnames(styles.LContent)}>
              {children}
            </div>
          </div>
        </div>
      }
      
    </React.Fragment>
  );
}
 
export default connect(({
  app
})=>({
  menu:app.get('menu'),
  locationPathname:app.get('locationPathname'),
}))(Layout)
