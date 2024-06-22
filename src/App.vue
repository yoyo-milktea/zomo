<template>
  <div id="app">
    <!-- <div id="nav"></div> -->
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  created () {
    this.getStatus()
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    // 获取登录状态
    getStatus () {
      this.$http.get('/api/simple/susers/checkuser/').then(res => {
        this.setUserInfo(res)
      }).catch(err => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
