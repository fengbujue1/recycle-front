// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    home:"",
    userInfo: {}, 
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onClick1:function(){
    this.setData({
      motto:'hello 2'
    })
  },
  skip:function(e){
    wx.navigateTo({
      url: '/pages/submit/submit?index=' + e.currentTarget.dataset.index ,
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() { 
    console.log("12") 
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 用户自动注册，在小程序首页加载的时候自动调入
    //  * 自动调入：1不存在 nickname 或img  不返回token
    //  * 2.存在 nickname 或img  返回token
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res.code)
          //发起网络请求
          wx.request({
            method:"POST",
            url: 'http://localhost:8080/recycle/login/login?code='+res.code,
            data: {
              code: res.code
            },
            success (res1) {
              var userInfoVo= res1.data
              if(userInfoVo.token){
                console.log("userInfoVo:")
                app.globalData.token=userInfoVo.token
                app.globalData.nickname=userInfoVo.nickname
                app.globalData.img=userInfoVo.img
              }
              console.log(res1.data)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    // var that = this;
    // console.log(app.globalData.userInfo)
    // if (app.globalData.userInfo) {
    //   console.log("123")
    //   that.setUserInfo(app.globalData.userInfo);
    // } else if (that.data.canIUse) {
    //   console.log("456")
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     that.setUserInfo(res.userInfo);
    //   }
    // } else {
    //   console.log("789")
    //   // wx.getUserProfile({
    //   //   success: res => {
    //   //     console.log(res)
    //   //     that.setUserInfo(res.userInfo);
    //   //   }
    //   // })
    //   wx.getUserProfile({
    //     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //     success: (res) => {
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true,

    //       }),
    //       app.globalData.userInfo = res.userInfo
    //     }
    //   })

    // }
  }
})
