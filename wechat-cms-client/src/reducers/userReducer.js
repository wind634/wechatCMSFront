/**
 * Created by wangjiang on 17/5/31.
 */

import { getUserListSuccessActionType, getUserListFailActionType, getUserListErrorActionType, gettingUserListActionType}  from '../constants/types';

//reducer
const initialState = {
    // 获取用户列表相关
    data: [],
    pagination: {},
    loading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserListSuccessActionType:
            console.log("action......")
            console.log(action)
            return Object.assign({}, state, {data: action.payload.data, pagination:action.payload.pagination, loading:false})
        case getUserListFailActionType:
            // 不修改原来的state对象返回一个新的state对象
            return Object.assign({}, state, {loading:false})
        case getUserListErrorActionType:
            return Object.assign({}, state, {loading: false})
        case gettingUserListActionType:
            return Object.assign({}, state, {loading: true})
        default:
            return initialState
    }
}

export default {initialState, userReducer}
