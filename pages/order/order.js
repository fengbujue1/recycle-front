// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
              id: 0,
              value: "未接单",
              isActive: true
            },
            {
              id: 1,
              value: "已接单",
              isActive: false
            },
            {
              id: 2,
              value: "已完成",
              isActive: false
            },
            {
              id: 3,
              value: "已取消",
              isActive: false
            }
          ],
          ordersByType:[],
          currentStatusIndex:"1",
    },

    // 顶部tab标签，点击出现切换
    handleTabsItemChange(e) {
      console.log(e)
        // 1 获取被点击的标题索引
        const index  = e.detail.index;
        this.getOrdersByStatus(index+1)
        // 2 修改源数组
        let  tabs  = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        // 3 赋值到data中
        this.setData({
          tabs:tabs,
          currentStatusIndex:index
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
        this.getOrdersByStatus(1)
        
    },
 // 指定状态的订单数据
 getOrdersByStatus:function(statusPam){
   var userId=1
   var status=statusPam
    var ordersByTyp= [];
    wx.request({
        method:"GET",
        dataType:"json",
        url: 'http://localhost:8080/recycle/recycle/query?userId='+userId+'&status='+status,
        success: (res) => {
          //接收订单数据
          const orders=res.data;
          for (var i=0;i<orders.length;i++){ 
            ordersByTyp[i]=orders[i];
          };
          this.setData({
            ordersByType:ordersByTyp
          });
          console.log(this.data.ordersByType)
        },
        fail (res) {
          console.log(res.data)
        }
      })   
  },

  // 取消订单
 calcOrder:function(e){
   var orderId = e.currentTarget.dataset.orderid
   var userId=1
   var ordersByTyp= []; 
   wx.request({
       method:"DELETE",
       dataType:"json",
       url: 'http://localhost:8080/recycle/recycle//delete?orederId='+orderId+"&currentStatusIndex="+this.data.currentStatusIndex+'&userId='+userId,
       success: (res) => {
         //接收订单数据
         const orders=res.data;
         for (var i=0;i<orders.length;i++){ 
           ordersByTyp[i]=orders[i];
         };
         this.setData({
           ordersByType:ordersByTyp
         });
         console.log(this.data.ordersByType)
       },
       fail (res) {
         console.log(res.data)
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