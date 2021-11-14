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
          icon_jia_jian:[
            {
              // 统纸
              id: 0,
              value: "MIXTURE_PAPE",
              isPlusActive: true,
              isMinusActive: false
            },
            {
              // 纯黄纸
              id: 1,
              value: "YELLOW_PAPE",
              isPlusActive: true,
              isMinusActive: false
            },
            {
              // 纯花纸
              id: 2,
              value: "FLOWER_PAPE",
              isPlusActive: true,
              isMinusActive: false
            },
            {
              // 杂纸
              id: 3,
              value: "OTHER_PAPE",
              isPlusActive: true,
              isMinusActive: false
            }
          ],
          // 预约时间
          dateMinute: '选择时间'
    },
     /**
     * 展开收起重量选择
     */
    on_show_weight: function (e) {
      var array= this.data.icon_jia_jian
      var index=e.currentTarget.dataset.index;
      var isPlusActive= this.data.icon_jia_jian[index].isPlusActive
      if(isPlusActive){
       
        array[index].isPlusActive=false
        array[index].isMinusActive=true
        this.setData({
          icon_jia_jian:array
        })
        console.log( this.data.icon_jia_jian[index].isPlusActive)
      }else{
        array[index].isPlusActive=true;
        array[index].isMinusActive=false;
        this.setData({
          icon_jia_jian:array
        })
        console.log( this.data.icon_jia_jian[index].isPlusActive)
      }
     

    },

     /**
   * 年月日时分选择类型的回调函数，可以在该函数得到选择的时间
   */
  selectDateMinuteChange(ev) {
    this.setData({
      dateMinute: ev.detail.value
    })
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
      submit_order:function(e){
        console.log(e)

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
     * 已下单浏览
     */
    over_view_order : function (e) {
      console.log(456);
      wx.showActionSheet({
        itemList: [1,2,3,4,5],
        success(res){
          console.log(123);
          console.log(res);
          // if (res.tapIndex === 0){
          //   wx.chooseVideo({
          //     sourceType: ['camera'],
          //     success(res){
          //       console.log(res.tempFilePath);
          //     }
          //   })
          // }else if (res.tapIndex === 1){
          //   wx.chooseImage({
          //     count: 3, // 设置最多三张
          //     sizeType: ['original', 'compressed'], 
          //     sourceType: ['album', 'camera'], 
          //     success (res) {
          //       var tempFilePaths = res.tempFilePaths;
          //       // 图片预览
          //       wx.previewImage({
          //         current: res.tempFilePaths[0],
          //         urls: res.tempFilePaths
          //       })
          //     }
          //   })
          // }
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