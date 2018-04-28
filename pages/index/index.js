//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    msg:"我暂时还没有被点击",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    propsMsg: { text: 'sadfadsfadsfadsfads', isShow: false }
  },
  onClick(name){
    this.setData({msg:"我被电击了"})
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  upfile(){

  },
  test(){
    wx.request({
      url: 'http://example.tunnel.qydev.com', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        "Access-Control-Allow-Origin":"*",
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
