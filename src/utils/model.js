//引入immutable不可变量关系的数据类型
import {Map} from 'immutable';

 
const initState = Map({
    i18n: 'zh_CN',
    token:null,
    locationPathname:null
})
 
export default {
 
    namespace: 'model',
  
    state:initState,
  
    subscriptions: {
      
    },
  
    effects: {
 
      * changeLang ({
        payload: {value},
        }, { put }) {
            yield put({ type: 'updateLang', payload: {value}});
        },
        
    },
  
    reducers: {
        updateLang (state,{payload:{value}}) {
            return state.set('i18n',value);
        },
    },
  
  };
