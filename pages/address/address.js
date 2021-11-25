// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addresses:[]
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
        wx.request({
            method:"GET",
            dataType:"json",
            url: 'http://localhost:8080/recycle/address/query',
            data:{"userId":peson_id},
            success: (res) => {
                this.setData({
                    addresses:res.data
                })
                console.log(res.data)

            },
            fail (res) {
                console.log(res.data)
            }
        })   
    },

    
    // 删除地址
    deleteAddress(e){
        
        var addressId=e.currentTarget.dataset.addressid
        var userId=1
        wx.request({
            method:"POST",
            header:"content-type",
            dataType:"application/json",
            url: 'http://localhost:8080/recycle/address/delete/'+addressId+'?userId='+userId,
            success: (res) => {
                console.log(res.data)
                this.onShow()
            },
            fail (res) {
                console.log(res.data)
            }
        })
  
      },
    //   地址选择
      chooseAddress(e){
          console.log(e)
        var addressId2=e.currentTarget.dataset.addressid
        var addressname=e.currentTarget.dataset.addressname
        var userId=1
        wx.request({
            method:"POST",
            dataType:"application/json",
            url: 'http://localhost:8080/recycle/address/update',
            data:{"id":addressId2,"isDefault":true,"userId":userId},
            success: (res) => {
                console.log(res.data)
            },
            fail (res) {
                console.log(res.data)
            }
        })

        // 获取上一级页面，给上一级页面的地址数据复制
        
        let currentPages=getCurrentPages()
        let lastPage=currentPages[currentPages.length-2]
        lastPage.setData({
            address:addressname,
            addressId:addressId2
        })
        // 跳转回上一级页面
        wx.navigateBack()
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
        this.getOrdersByStatus(1)
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