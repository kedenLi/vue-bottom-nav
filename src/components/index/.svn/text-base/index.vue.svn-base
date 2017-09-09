<template>
    <div class="content">
        <slider
                :pagination-visible="true"
                :slides="slides"
                :repeating="true"
                :auto="5000">
            <div v-for="(slide,index) in slides" :key="index">
                <a class="bannerLink" :href="slide.value">
                    <img width="100%" class="bannerImg" :src="slide.image" />
                </a>
            </div>
        </slider>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import slider from '../base/vue-slider'
    export default {
      components: {
        slider
      },
      data(){
        return {
          slides: [{
            "title": "鬼畜频道精选",
            "value": "http://www.bilibili.com/topic/v2/phone1513.html",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504858497706&di=7ac035e11d646c763ec1afdce493cb24&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201510%2F2015100507.jpg",
            "type": 2,
            "weight": 1,
            "remark": "",
            "hash": "148861b9b07d47a5e9e8f8fa961f6596"
          },
            {
              "title": "逗趣问答一战成神",
              "value": "http://acg.tv/u1ue",
              "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504858550930&di=66cbf9281364790353a1b49c788597a2&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201411%2F2014110406.jpg",
              "type": 2,
              "weight": 2,
              "remark": "",
              "hash": "3e054fa6f2fb4632eb8c7a6203e5201c"
            },
            {
              "title": "阴阳师",
              "value": "#",
              "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504858601774&di=2b8c158aaeb7ad9fa2193f0aca88694f&imgtype=0&src=http%3A%2F%2Fpic.5442.com%3A82%2F2015%2F0105%2F02%2F06.jpg%2521960.jpg",
              "type": 1,
              "weight": 3,
              "remark": "",
              "hash": "204cc23aa90fbeff5cc98932f4249ab4"
            },
            {
              "title": "阴阳师",
              "value": "#",
              "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504858646394&di=ce59673d42ea79195e4c8b4141de1c35&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201410%2F2014102406.jpg",
              "type": 1,
              "weight": 3,
              "remark": "",
              "hash": "204cc23aa90fbeff5cc98932f4249ab4"
            },
            {
              "title": "阴阳师",
              "value": "#",
              "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504858714768&di=a24857b51c2ee6317e9751a35e114331&imgtype=0&src=http%3A%2F%2Fwww.bz55.com%2Fuploads%2Fallimg%2F150316%2F140-150316140952.jpg",
              "type": 1,
              "weight": 3,
              "remark": "",
              "hash": "204cc23aa90fbeff5cc98932f4249ab4"
            }]
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .content
        height 100%
        background #666
    .bannerLink
        display block
        height 100%
    .bannerImg
        max-height 1.5rem !important;
    .swiper-pagination-bullet.active
        background: #4d1c85 !important;

    .swiper-pagination-bullet
        background: #fff !important;
        opacity: 1 !important;
        margin: 0 2px !important;
        z-index: 9;

    .horizontal .swiper-pagination
        text-align: center !important;

</style>
