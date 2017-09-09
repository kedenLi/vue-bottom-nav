
/*
    # 按照宽高比例设定html字体, width=device-width initial-scale=1版
    # @pargam win 窗口window对象
    # @pargam option{
      designWidth: 设计稿宽度，必须
      designHeight: 设计稿高度，不传的话则比例按照宽度来计算，可选
      designFontSize: 设计稿宽高下用于计算的字体大小，默认20，可选
      callback: 字体计算之后的回调函数，可选
    }
    # return Boolean;
    # xiaoweili@tencent.com
    # ps:请尽量第一时间运行此js计算字体
    # 计算方式：以iPhone6设计稿的尺寸为标准 除以100
*/
 function setRem (win, option) {
   var count = 0
   var designWidth = option.designWidth
   var designHeight = option.designHeight || 0
   var designFontSize = option.designFontSize || 20
   var callback = option.callback || null
   var root = document.documentElement
   var rootWidth
   var newSize
   var t
   show()
	// 返回root元素字体计算结果
   function _getNewFontSize () {
     var winWidth = win.innerWidth > 800 ? 800 : win.innerWidth
     var scale = designHeight !== 0 ? Math.min(winWidth / designWidth, win.innerHeight / designHeight) : winWidth / designWidth
      // console.log(winWidth);
      // 750px
      // return scale * designFontSize;
      // 375px
     return scale * designFontSize * 2     // 字体的倍速，对应的是designFontSize: 100,
   }
   function show () {
     var winWidth = win.innerWidth > 800 ? 800 : win.innerWidth

     rootWidth = root.getBoundingClientRect().width

     // 如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试20次，否则使用win.innerWidth计算
     if (rootWidth !== winWidth && count < 20) {
       win.setTimeout(function () {
         count++
         show()
       }, 0)
     } else {
       newSize = Math.floor(_getNewFontSize())
			// 如果css已经兼容当前分辨率就不管了
       if (newSize + 'px' !== getComputedStyle(root)['font-size']) {
         root.style.fontSize = newSize + 'px'
         return callback && callback(newSize)
       }
     }
   }
	// 横竖屏切换的时候改变fontSize，根据需要选择使用
   win.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
     clearTimeout(t)
     t = setTimeout(function () {
       show()
     }, 200)
   }, false)
 }
 export {
   setRem
 }
