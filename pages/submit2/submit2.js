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
        var data = JSON.parse(options.data)
        console.log(data)
        this.setData({
            order_details:data
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
        // 使用这个方法取值，行不通
        // let details= new Array();
        // wx.getStorageInfo({
        //     success (res) {
        //     const keys=res.keys;
        //     for(var idx=0;idx<keys.length;idx++){
        //         let key1=keys[idx];
        //         if ("FLOWER_PAPE"===key1) {
        //             // 同步取值
        //             wx.getStorage({
        //                 key: key1,
        //                 success (res) {
        //                     details.push({name:key1,weight:res.data})
        //                     console.log(details)
        //                 }
        //                 })     
        //         }
        //         if ("OTHER_PAPE"===key1) {
        //            // 同步取值
        //            wx.getStorage({
        //             key: key1,
        //             success (res) {
        //                 details.push({name:key1,weight:res.data})
        //                 console.log(details)
        //             }
        //             }) 
        //         }
        //         if ("MIXTURE_PAPE"===key1) {
        //             // 同步取值
        //             wx.getStorage({
        //                 key: key1,
        //                 success (res) {
        //                     details.push({name:key1,weight:res.data})
        //                     console.log(details)
        //                 }
        //                 }) 
        //         }
        //         if ("YELLOW_PAPE"===key1) {
        //             // 同步取值
        //             wx.getStorage({
        //                 key: key1,
        //                 success (res) {
        //                     details.push({name:key1,weight:res.data})
        //                 console.log(details)
        //                 }
        //                 }) 
        //         }
        //         console.log(details)
        //     }
        //     }
        //   })
          
        //   console.log(details)
        //   console.log(this.data.order_details)
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