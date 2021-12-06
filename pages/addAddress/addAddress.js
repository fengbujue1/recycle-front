// pages/addAddress/addAddress.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId:"1",
        provinces:"四川省,成都市,邛崃市",
        districtCode:"510183",
        position:"点击获取",
        towns:[{"code":"510183001","name":"文君街道"},{"code":"510183002","name":"临邛街道"},{"code":"510183101","name":"羊安镇"},{"code":"510183102","name":"牟礼镇"},{"code":"510183103","name":"桑园镇"},{"code":"510183104","name":"平乐镇"},{"code":"510183105","name":"夹关镇"},{"code":"510183106","name":"火井镇"},{"code":"510183107","name":"水口镇"},{"code":"510183108","name":"固驿镇"},{"code":"510183109","name":"冉义镇"},{"code":"510183110","name":"回龙镇"},{"code":"510183111","name":"高埂镇"},{"code":"510183112","name":"前进镇"},{"code":"510183113","name":"高何镇"},{"code":"510183115","name":"临济镇"},{"code":"510183116","name":"卧龙镇"},{"code":"510183118","name":"天台山镇"},{"code":"510183120","name":"宝林镇"},{"code":"510183121","name":"南宝山镇"},{"code":"510183201","name":"茶园乡"},{"code":"510183206","name":"道佐乡"},{"code":"510183212","name":"大同乡"},{"code":"510183214","name":"孔明乡"}],
    },

    // 选择省市区，并且赋值给变量，让前端展示
    selectProvinces(e){
        this.setData({
            provinces: e.detail.value,
            districtCode:e.detail.code[2]
          });
        //   TODO 需要去服务端取乡镇数据，填充页面数据，供乡镇选择器选择
        this.setData({
        provinces: e.detail.value
        })
    },
    // 选择乡镇
    selectTown(e){
        console.log(e)
        this.setData({
            chooseTown: e.detail.value
          });

    },

    // 发往服务器新增地址
    addAddress(e){
        // 新增地址之前要进行表单验证
        if(!this.checkForm(e)){
          return
        }
        wx.request({
            method:"PUT",
            dataType:"json",
            url: 'http://localhost:8080/recycle/address/add',
            data:{
                "name":e.detail.value.name,
                "phoneNo":e.detail.value.phoneNo,
                "isDefault":e.detail.value.isDefault,
                "town":this.data.towns[e.detail.value.town].code,
                "detail":e.detail.value.detail,
                "token":app.globalData.token,
                "districtCode":this.data.districtCode,
              },
            success (res) {
              wx.navigateBack()
              console.log(res.data)
            },
            fail (res) {
              console.log(res.data)
            }
          })
    },

    // 表单验证
    checkForm:function(e){
      console.log(e)
      var msg="";
      if(e.detail.value.name==""){
        msg="请填写姓名";
      }
      if(e.detail.value.phoneNo==""){
        msg="请填写手机号";
      }
      if(e.detail.value.town==""){
        msg="请选择街道";
      }
      if(e.detail.value.detail==""){
        msg="请填写详细地址";
      }
      if(this.data.districtCode==""){
        msg="请选择省市区";
      }

      if(msg!=""){
        wx.showToast({
          title: msg,
          icon: 'error',
          duration: 2000//持续的时间
        })
        return false
      }else{
        return true
      }
      

    },


    // 通过地图获取精确回收地址
    getPostion(e){
        wx.navigateTo({
            url: '/pages/pam/map',
          })
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})