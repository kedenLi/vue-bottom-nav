<template>
	<div class="wrap">
		我的
		<button @click="go">跳到test页面</button>
	</div>
</template>

<script type="text/ecmascript-6">
	import axios from '../../common/js/axios'
	export default {
		data () {
			return {}
		},
		methods: {
			showData() {
				const res = axios.post('jyw_server/dev/test.do', {
					accountName: '我是'
				})
				res.then(function(value) {
					console.log(value)
				}, function(value) {
					console.log(value)
				})
			},
			go() {
				this.$store.state.title = 'test页面'
				this.$router.push('/hello')
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		height 100%
		background #ccc
</style>