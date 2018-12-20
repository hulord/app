import {Map} from 'immutable';
import {message} from 'antd';
import {login} from '../services/app'
import {routerRedux} from 'dva/router';

const initState = Map({
})

export default {

    namespace: 'login',

    state: initState,

    subscriptions: {
      
    },

    effects: {
        * login ({
          payload,
        }, { put, call, select }) {
          const {username,token,success} = yield call(login, payload)
          const { permissions } = username
          const { locationQuery } = yield select(_ => _.app)
          if (success) {
            // const { from } = locationQuery
            // yield put({ type: 'app/query' })
            // if (from && from !== '/login') {
            //   yield put(routerRedux.push(from))
            // } else {
              yield put(routerRedux.push('/layout'))
              yield put({
                type: 'app/updateState',
                payload: {
                  permissions,
                    token
                },
             })
            // }
          } else {
            throw payload
          }
        },
      },
    reducers: {
      
    },

};
