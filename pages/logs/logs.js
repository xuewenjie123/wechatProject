//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPullDownRefresh(){
      console.log("喂我下拉刷新呢");
      this.timer = setTimeout(()=>{
        console.log("我要停止咯")
        wx.stopPullDownRefresh()
      },1000)
    
  },
  onShareAppMessage() {
    return {
      title: '用户转发自定义转发标题',
      path: '/page/index?id=123'
    }
  },
  onPageScroll(){
    console.log("我是页面滚动")
  },
  onReachBottom(){
    console.log("我是上拉加载")
  }

})
