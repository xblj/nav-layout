function changeTopNav (state, path) {
  // 这里必须传入state，不能使用解构
  state.activeTop = path
}

export default{changeTopNav}
