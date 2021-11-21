// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // 新增收货地址
    addAddress:function(e){
        wx.navigateTo({
            // url: '/pages/addAddress/addAddress?data=' + data ,
            url: '/pages/addAddress/addAddress' ,
          })
    },

    // 查询个人地址信息
    getOrdersByStatus:function(peson_id){
        var ordersByTyp= [];
        wx.request({
            method:"GET",
            dataType:"json",
            url: 'http://localhost:8080/recycle/address/query',
            data:{"userId":peson_id},
            success: (res) => {
            console.log(res.data)
            },
            fail (res) {
            console.log(res.data)
            }
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