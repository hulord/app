import {Map} from 'immutable';
import { routerRedux } from 'dva/router'
import config from '../utils/apis'
import {query} from '../services/app'
import queryString from 'query-string'


const initState = Map({
    user: {
        userName:"admin",
        password:"33213123",
        create_time:"2018/11/12",
        phone:"13600000"
    }
})
export default {
     
    namespace: 'app',
  
    state:initState,
  
    subscriptions: {
        
    },
    effects: {
    * query ({
        payload,
    }, { call, put, select }) {
        const { success, user } = yield call(query, payload)
        const { locationPathname } = yield select(_ => _.app)
        if (success && user) {
            const { permissions } = user
            yield put({
                type: 'updateState',
                payload: {
                    user,
                    permissions
                },
            })
            // if (location.pathname === '/login') {
            //     yield put(routerRedux.push({
            //         pathname: '/dashboard',
            //     }))
            // }
        } else if (config.openPages && config.openPages.indexOf(locationPathname) < 0) {
            yield put(routerRedux.push({
                pathname: '/login',
                search: queryString.stringify({
                from: locationPathname,
                }),
            }))
        }
    },

    },
  
    reducers: {

    }
  };
