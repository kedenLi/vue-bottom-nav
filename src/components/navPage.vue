<template>
  <div id="navPage">
    <router-view class="showPages"></router-view>
    <div class="tab">
        <router-link tag="div" class="tab-item"  to="/navPage/index">
            <span class="tab-link" >首页</span>
        </router-link>
        <router-link tag="div" class="tab-item"  to="/navPage/project">
            <span class="tab-link">项目</span>
        </router-link>
        <router-link tag="div" class="tab-item"  to="/navPage/release">
            <img class="center" src="../common/image/icon_publish@2x.png" width="44" height="44">
            <span class="tab-link" >发布</span>
        </router-link>
        <router-link tag="div" class="tab-item"  to="/navPage/turn">
            <span class="tab-link">转让</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/navPage/my">
            <span class="tab-link">我的</span>
        </router-link>
    </div>
  </div>
</template>
<script>
export default{
}
</script>
<style scoped lang="stylus"  rel="stylesheet/stylus">
@import "../~common/stylus/variable"
@import "../common/stylus/mixin"
#navPage
     height: 100%
     display: flex
     flex-direction: column
.showPages
    overflow-y auto
.tab
    font-size: $font-size-medium
    .tab-item
        width 20%
        float left
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
        background url("../common/image/icon_home_n@2x.png") no-repeat center -2px
        background-size 42px 33px
    .tab-item:nth-child(2)
        background url("../common/image/icon_Project_n@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .tab-item:nth-child(3)
        position relative
    .tab-item:nth-child(4)
        background url("../common/image/icon_assign_n@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .tab-item:nth-child(5)
        background url("../common/image/icon_me_n@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .router-link-active:nth-child(1)
        background url("../common/image/icon_home_k@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .router-link-active:nth-child(2)
        background url("../common/image/icon_Project_k@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .router-link-active:nth-child(4)
        background url("../common/image/icon_assign_k@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .router-link-active:nth-child(5)
        background url("../common/image/icon_me_k@2x.png") no-repeat 50% -2px
        background-size 42px 33px
    .center
        width 44px
        height 44px
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -90%)
</style>
