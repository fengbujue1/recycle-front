//获取应用实例
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */ 
  data: {
    userInfo: {},
    hasUserInfo: false,
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    // canIUse: wx.canIUse('button.open-type.getUserProfile')
    canIUse: false,
    menuitems: [
      // { text: '地址管理', url: '/pages/address/address', icon: '../../images/icon-index.png', tips: '' },
      // { text: '关于我们', url: 'pages/introduction/introduction', icon: '../../images/icon-index.png', tips: '' }
      { text: '地址管理', url: '/pages/address/address', tips: '' },
      { text: '关于我们', url: '/pages/introduction/introduction', tips: '' }
    ],
    token:"",
    img:"",
    nickname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  },

  // 获取用户头像昵称，传递给后端完成注册，返回token
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // this.setData({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true
        // })
        var usrInfo=res.userInfo
        wx.login({
          success (res) {
            if (res.code) {
              console.log(res.code)
              //发起网络请求
              wx.request({
                method:"POST",
                url: 'http://localhost:8080/recycle/login/register',
                data: {
                  code: res.code,
                  nickname:usrInfo.nickName,
                  img:usrInfo.avatarUrl
                },
                
                success (res1) {
                  var userInfoVo= res1.data
                  if(userInfoVo.token){
                    console.log("userInfoVo:"+userInfoVo.token)
                    app.globalData.token=userInfoVo.token
                    app.globalData.img=userInfoVo.img
                    app.globalData.nickname=userInfoVo.nickname
                  }
                  console.log(res1.data)
                  // 重新加载界面
                  wx.reLaunch({
                    url: '/pages/my/my' ,
                  })
                 
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  },

  // setUserInfo: function (userInfo) {
  //   if (userInfo != null) {
  //     app.globalData.userInfo = userInfo
  //     this.setData({
  //       userInfo: userInfo,
  //       hasUserInfo: true 
  //     })
  //   }
  // },
  /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      if(app.globalData.token){
          this.setData({
            token:app.globalData.token,
            img:app.globalData.img,
            nickname:app.globalData.nickname
          })
      }
      
  },
})