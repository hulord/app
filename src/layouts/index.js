import React from 'react'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import {withRouter} from 'dva/router' //引入withRouter
import App from './app'

export default withRouter((props) => {
  return (
    <LocaleProvider locale={enUS}>
      <App> 
        { props.children }
      </App>
    </LocaleProvider>
  )
})
