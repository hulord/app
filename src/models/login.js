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
         
          const data = yield call(login, payload);
          const {success,code} = data;
          if(success){
            if(code=="0"){
                const res = yield put("/app/updateState",query);
            }else{
              message.error(data.message);
            }
          }else{
            message.error('网络错误');
          }
        },
      },
    reducers: {
      
    },

};
