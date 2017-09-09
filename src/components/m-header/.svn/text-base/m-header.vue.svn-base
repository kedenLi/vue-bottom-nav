<template>
  <div class="m-header" >
    <div class="icon"  v-if="$store.state.showBack" @click="goBack">
      <img  src="../../common/image/icon_turnback@2x.png" alt="">
    </div>
    <h1 class="text">{{ $store.state.title }}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .m-header
    position: relative
    height: 44px
    text-align: center
    font-size: 0
    background: $color-background
    .icon
      position absolute
      width 40px
      top 0
      left 0
      height 44px
      img
        width 100%
        height 100%
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      width 80%
      color #fff
      font-size: 18px
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px

</style>