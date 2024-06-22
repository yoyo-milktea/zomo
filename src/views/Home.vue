<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="3">
          <a href="http://www.zzswork.top/" style="text-decoration: none;color: #007bff !important">zomo</a>
        </el-col>
        <el-col :span="21">
          <el-button style="float: right;" type="text" v-if="!userInfo.show_btn">登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="14">
          <h2>抖音无水印下载</h2>
          <p style="margin-top: 8px;">最新免费抖音在线去水印下载解析工具</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="analysis">
        <el-col :span="14">
          <el-input placeholder="直接粘贴分享的内容，多个请用;隔开" v-model="copyContent">
            <el-button slot="append" icon="el-icon-download" class="analysis-btn" @click="analysisDownload" :loading="loading">解析</el-button>
          </el-input>
          <el-button class="btn-paste" icon="el-icon-copy-document" @click="getClipboardContent">粘贴</el-button>
          <hr>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
// import { saveAs } from 'file-saver'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      copyContent: '',
      loading: false,
      listLength: 0
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    // 获取下载链接
    analysisDownload () {
      if (this.copyContent === '') {
        this.$message.error('请输入抖音分享内容！')
      } else {
        const params = {
          video_url: this.copyContent
        }
        this.loading = true
        this.$http.post('/api/simple/sdomo/removewatermark/', params).then(res => {
          this.listLength = res.data.length
          const arr = []
          res.data.map(content => {
            arr.push(content.mp4_url)
          })
          this.getBlobByUrl(arr)
        }).catch(err => {
          this.$message.error(err)
          this.loading = false
        })
      }
    },
    // 通过链接下载视频
    getBlobByUrl (urls) {
      console.log(urls)
      urls.map((item, index) => {
        window.open(item)
        if (index === this.listLength - 1) {
          this.loading = false
        }
      })
      // this.$http.get('/api/stealer/video/download?' + url, { responseType: 'blob' }).then(res => {
      //   const downLoadUrl = window.URL.createObjectURL(new Blob([res], {
      //     type: 'video/mp4'
      //   }))
      //   // 视频的type是video/mp4，图片是image/jpeg
      //   // 01.创建a标签
      //   const a = document.createElement('a')
      //   // 02.给a标签的属性download设定名称
      //   a.download = desc
      //   // 03.设置下载的文件名
      //   a.href = downLoadUrl
      //   // 04.对a标签做一个隐藏处理
      //   a.style.display = 'none'
      //   // 05.向文档中添加a标签
      //   document.body.appendChild(a)
      //   // 06.启动点击事件
      //   a.click()
      //   // 07.下载完毕删除此标签
      //   a.remove()
      //   if (index === this.listLength - 1) {
      //     this.loading = false
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    getClipboardContent () {
      navigator.clipboard.readText().then(text => {
        this.copyContent += text
      }).catch(err => {
        console.error('读取剪切板内容时发生错误：', err)
      })
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 1200px){}
.el-container {
  width: 100%;
  height: 100%;
  text-align: center;
  .el-header {
    width: 100%;
    background-color: #fff;
    .el-row {
      max-width: 1140px!important;
      padding: 0 15px!important;
      margin: auto;
      // height: 73px;
      line-height: 60px;
    }
  }
  .el-main {
    padding-top: 50px;
    h2 {
      color: #007bff!important;
      font-weight: 700;
      font-size: 2.1875rem;
      margin: 0;
    }
    .el-row {
      .el-input {
        border-radius: 2px;
        width: 70%;
        .el-input__inner {
          border-color: #efefef!important;
          height: 50px!important;
        }
      }
    }
    .analysis-btn {
      color: #fff;
      background-color: #1880ed;
      height: 48px!important;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      &:hover {
        background-color: #035ded;
      }
    }
    .analysis {
      hr {
        margin-top: 2rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0,0,0,.1);
      }
      .el-col {
        position: relative;
        .btn-paste {
          display: flex;
          justify-content: center;
          background: #e9eef7;
          position: absolute;
          padding: 8px 10px 8px 12px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          line-height: 20px;
          right: 260px;
          top: 7px;
          color: #007bff;
          .el-icon-copy-document {
            margin-top: 3px;
          }
          &:hover {
            color: #212529;
            text-decoration: none;
          }
        }
        .el-input__inner {
          padding-right: 80px;
        }
      }
    }
  }
}
</style>
