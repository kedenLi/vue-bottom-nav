<template>
   <div id="app">
      <m-header ></m-header>
      <router-view class="view"></router-view>
   </div>
</template>
<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import {setRem} from 'common/js/rem'
export default {
  data () {
    return {
    }
  },
  components: {
    MHeader
  },
  mounted: function () {
    setRem(window, {
      designWidth: 750,
      designFontSize: 100
    })
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': function () {
      this.routeChange()
    }
  },
  methods: {
    // 如果路由有变化，判断是否首页；如果是首页，则隐藏返回按钮，并且设置头部显示的文字
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/navPage/index') {
        this.$store.state.showBack = false
        this.$store.state.title = '首页'
      } else if (path === '/navPage/project') {
        this.$store.state.showBack = false
        this.$store.state.title = '项目'
      } else if (path === '/navPage/release') {
        this.$store.state.showBack = false
        this.$store.state.title = '发布'
      } else if (path === '/navPage/turn') {
        this.$store.state.showBack = false
        this.$store.state.title = '转让'
      } else if (path === '/navPage/my') {
        this.$store.state.showBack = false
        this.$store.state.title = '我的'
      } else {
        this.$store.state.showBack = true
      }
    }
  },
  created () {
    this.routeChange()
  }
}
</script>

<style scoped lang="stylus"  rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "common/stylus/mixin"
#app
     height: 100%
     display: flex
     flex-direction: column
     flex: 1
.tab
    display: flex
    font-size: $font-size-medium
    .tab-item
        flex 1
        text-align center
        padding 30px 0 2px 0
        .tab-link
            color: $color-text-l
            vertical-align top
            display block
            font-size $font-size-small
        &.router-link-active
            .tab-link
                color: #fff
    .tab-item:nth-child(1)
        background url("common/image/icon_home_n@2x.png") no-repeat center -2px
        background-size 3rem 2rem
    .tab-item:nth-child(2)
        background url("common/image/icon_Project_n@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .tab-item:nth-child(3)
        position relative
    .tab-item:nth-child(4)
        background url("common/image/icon_assign_n@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .tab-item:nth-child(5)
        background url("common/image/icon_me_n@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .router-link-active:nth-child(1)
        background url("common/image/icon_home_k@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .router-link-active:nth-child(2)
        background url("common/image/icon_Project_k@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .router-link-active:nth-child(4)
        background url("common/image/icon_assign_k@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .router-link-active:nth-child(5)
        background url("common/image/icon_me_k@2x.png") no-repeat 50% -2px
        background-size 3rem 2rem
    .center
        width 44px
        height 44px
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -90%)
</style>
