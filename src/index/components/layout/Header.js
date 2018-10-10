import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
 
class Header extends Component {
  render() {
    return (
      <div>
        <Link to={'/login'}>
          <Button type={'primary'} icon={'link'}>
            去BBB页面
          </Button>
        </Link>
      </div>
    );
  }
}
 
export default Header;
