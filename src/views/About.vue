<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>阿克尚解放啦</el-button>
  </div>
</template>

<script>
export default {
  created () {
    this.getStatus()
  },
  methods: {
    getStatus () {
      this.$http.get('/api/simple/susers/checkuser/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
