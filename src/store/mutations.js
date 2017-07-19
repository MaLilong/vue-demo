import * as types from './mutation-types'

export default {
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime) + parseInt(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime) - parseInt(time)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'http://img0.imgtn.bdimg.com/it/u=3422534290,1332057324&fm=26&gp=0.jpg';

    state.list.push(
      Object.assign({ name: '美女', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
