//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  switch2Change(e){
    console.log(e.detail)
    let val = 0
    if(e.detail.value){
      val = 1
    }
    wx.request({
      url: `${this.data.url}/${val}`,
    })
  },
  set(){
    wx.redirectTo({
      url: '/pages/index/set',
    })
  },
  onShow() {
    wx.getStorage({
      key: 'url',
    }).then(res=>{
      this.setData({
        "url":res.data
      })
    }).catch(error=>{
      wx.redirectTo({
        url: '/pages/index/set',
      })
    })
  }
})
