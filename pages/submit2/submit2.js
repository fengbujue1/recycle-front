// pages/submit2/submit2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        order_details:[]
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
        wx.getStorageInfo({
            success (res) {
            const keys=res.keys;
            for(var idx=0;idx<keys.length;idx++){
                let key=keys[idx];
                if ("FLOWER_PAPE"===key) {
                    console.log (key)
                }
                if ("OTHER_PAPE"===key) {
                    console.log (key)
                }
                if ("MIXTURE_PAPE"===key) {
                    console.log (key)
                }
                if ("YELLOW_PAPE"===key) {
                    console.log (key)
                }
            }
              console.log(res.keys)
 
            }
          })
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
        console.log("onUnload")
        // 清除缓存数据
        wx.getStorageInfo({
            success (res) {
            const keys=res.keys;
            for(var idx=0;idx<keys.length;idx++){
                let key=keys[idx];
                if ("FLOWER_PAPE"===key) {
                    wx.removeStorage({
                      key: 'FLOWER_PAPE',
                    })
                }
                if ("OTHER_PAPE"===key) {
                    wx.removeStorage({
                        key: 'OTHER_PAPE',
                      })
                }
                if ("MIXTURE_PAPE"===key) {
                    wx.removeStorage({
                        key: 'MIXTURE_PAPE',
                      })
                }
                if ("YELLOW_PAPE"===key) {
                    wx.removeStorage({
                        key: 'YELLOW_PAPE',
                      })
                }
            }
              console.log(res.keys)
 
            }
          })
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