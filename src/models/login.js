import {Map} from 'immutable';
import {message} from 'antd';
import {login} from '../services/app'
import {routerRedux} from 'dva/router';

const initState = Map({
  token:null,
  locationPathname:null,
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
          const data = yield call(login, payload)
          const { locationQuery } = yield select(_ => _.app)
          // console.log(locationQuery);
          if (data.success) {
            const { from } = locationQuery
            yield put({ type: 'app/query' })
            if (from && from !== '/login') {
              yield put(routerRedux.push(from))
            } else {
              yield put(routerRedux.push('/layout'))
            }
          } else {
            throw data
          }
        },
      },
    reducers: {

    },

};
