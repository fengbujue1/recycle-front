// pages/page2/page2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hello:"hello"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    request1:function(){
        wx.request({
          method:"PUT",
          dataType:"json",
          url: 'http://localhost:8080/recycle/recycle/submit',
          data:{"addressId":3,"items":[{"heightRange":1,"heightRangeEnum":"RANGE1","recycleKind":1}],"recycleType":1,"remark":"asdasdasdad","status":1,"time":1634369408505,"userId":1},
          success (res) {
            console.log(res.data)
          },
          fail (res) {
            console.log(res.data)
          }
        })
        
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