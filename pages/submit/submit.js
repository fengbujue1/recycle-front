// pages/submit/submit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
              id: 0,
              value: "废纸",
              isActive: true
            },
            {
              id: 1,
              value: "塑料",
              isActive: false
            },
            {
              id: 2,
              value: "金属",
              isActive: false
            },
            {
              id: 3,
              value: "服饰",
              isActive: false
            },
            {
                id: 4,
                value: "家电",
                isActive: false
              }
          ],
    },
     // 顶部tab标签，点击出现切换
     handleTabsItemChange(e) {
        // 1 获取被点击的标题索引
        const index  = e.detail.index;
        // 2 修改源数组
        let  tabs  = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        // 3 赋值到data中
        this.setData({
          tabs:tabs
        })
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