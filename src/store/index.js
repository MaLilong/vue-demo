// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

// 先写个假数据
const state = {
  totalTime: 12,
  list: [{
    name : '美女',
    avatar : 'http://img0.imgtn.bdimg.com/it/u=3422534290,1332057324&fm=26&gp=0.jpg',
    date : '2016-12-25',
    totalTime : '12',
    comment : '12月25日晚上，陪女朋友一起过圣诞节需要4个小时'
  }]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
