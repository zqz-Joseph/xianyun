// 声明数据
export const state = () => ({
  userInfo: {
    token: '',
    user: ''
  }
})

// 改变数据的状态
export const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  }
}

// 异步处理
export const actions = {
  // login 请求
  login ({ commit }, data) {
    return this.$axios({
      method: 'post',
      url: '/accounts/login',
      data
    })
      .then((res) => {
        const data = res.data
        commit('setUserInfo', data)
        return data
      })
  }
}
