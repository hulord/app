/* global window */
/* global document */
import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp'
import { connect } from 'dva'
import { Loader} from '../components'
import { BackTop, Layout } from 'antd'
import {  config } from '../utils/apis'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import Error from '../pages/404'
import '../themes/index.less'
import './app.less'


let lastHref

const App = ({
  children, dispatch, app, loading, location,
}) => {
    return (<div>
      11
      {children}
    </div>)

}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
