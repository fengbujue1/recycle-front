// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
 onError(error){
    console.log(error)
 },
  globalData: {
    userInfo: null,
    order_item_name:[
      "统纸（纯黄纸，纯花纸混合一块）",
      "纯黄纸（如空调箱，快递箱等）",
      "纯花纸（如饮料箱等）",
      "杂纸",
      "塑料瓶",
      "旧电池，旧电瓶",
      "废铁"
    ],
    order_item_weight:[
      "0~25公斤",
      "25~50公斤",
      "50~250公斤",
      "250公斤以上"
    ],
    token:"",
    img:"",
    nickname:"",
    picRootPath:"https://localhost:8081/recycle/static",
    apiRootPath:"https://localhost:8081/recycle"
  }
})
