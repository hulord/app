import {Map} from 'immutable';
import { routerRedux } from 'dva/router'
import config from '../utils/apis'
import {query} from '../services/app'
import queryString from 'query-string'


const initState = Map({
    locationQuery: {},
    locationPathname:'',
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
    
    //监听路由
    subscriptions: {
        setupHistory ({ dispatch, history }) {
            history.listen((location) => {
              dispatch({
                type: 'updateState',
                payload: {
                  locationPathname: location.pathname,
                  locationQuery: location.query,
                },
              })
            })
        },
    
    },
    effects: {
    * query ({
        payload,
    }, { call, put, select }) {
        const { success, username } = yield call(query, payload)
        const { locationPathname } = yield select(_ => _.app)
        if (success && username) {
            const { permissions } = username
            yield put({
                type: 'updateState',
                payload: {
                    username,
                    permissions
                },
            })
            // if (location.pathname === '/login') {
            //     yield put(routerRedux.push({
            //         pathname: '/layout',
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
        updateState (state, { payload }) {
            return {
              ...state,
              ...payload,
            }
          },
    }
  };
