// pages/index/set.js
Page({

  /**
   * Page initial data
   */
  data: {
    value:""
  },
  input(e){
    this.setData({
      "value":e.detail.value
    })
  },
  ok(){
    wx.setStorage({
      data: this.data.value,
      key: 'url',
    }).then(()=>{
      wx.redirectTo({
        url: '/pages/index/index',
      })
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})