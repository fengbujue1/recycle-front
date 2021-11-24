// pages/submit/submit.js
import WxValidate from '../../utils/WxValidate.js'
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
            ,
            {
              // 塑料瓶
              id: 4,
              value: "PLASTIC_BOTTLE",
              isPlusActive: true,
              isMinusActive: false
            }
            ,
            {
              // 旧电池，旧电瓶
              id: 5,
              value: "OLD_BATTERIES",
              isPlusActive: true,
              isMinusActive: false
            },
            {
              // 废铁
              id: 6,
              value: "SCRAP_IRON",
              isPlusActive: true,
              isMinusActive: false
            }
          ],
          // 预约时间
          dateMinute: '选择时间',
          address:"请选择地址 ",
          addressId:""
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
      }else{
        array[index].isPlusActive=true;
        array[index].isMinusActive=false;
        this.setData({
          icon_jia_jian:array
        })
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
        this.changeTabs(index)
      },

      // 订单提交
      submit_order:function(e){
        // 缓存的获取只能异步，适用于此场景，改用页面参数传值
        // for(let key  in e.detail.value){
        //    // 通过缓存技术来进行页面间的数据传输
        //   wx.setStorageSync(key, e.detail.value[key])
        // }
        let arr=new Array();
        let tag=false;
        console.log(e.detail.value)
        for(let key  in e.detail.value){
          // 表单验证
          if(key==="appointedTime"){
            if(e.detail.value[key]===""){
              wx.showToast({
                title: '请选择预约时间',
                icon: 'error',
                duration: 2000//持续的时间
              })
              return
            }
          }else if(key==="appointedTime"){
            // if(e.detail.value[key]==="addressStr"){
            //   wx.showToast({
            //     title: '请选择地址',
            //     icon: 'error',
            //     duration: 2000//持续的时间
            //   })
            //   return
            // }
          }else if(key==="note"){
            
          }else if(key==="address"){
            if(e.detail.value[key]==="请选择地址  >"){
              wx.showToast({
                title: '请选择地址',
                icon: 'error',
                duration: 2000//持续的时间
              })
              return
            }
          }else{
            if(e.detail.value[key]===""){
              wx.showToast({
                title: '请选择重量',
                icon: 'error',
                duration: 2000//持续的时间
              })
              return
            }
            tag=true
          }    
          arr.push({name:key,value:e.detail.value[key]}) 
        }
        console.log(tag)
        if(!tag){
          wx.showToast({
            title: '请选择重量',
            icon: 'error',
            duration: 2000//持续的时间
            
          })
          return
        }

        // 参数带入
        // 因为到下个页面要根据key做数据拆分，分别赋值到不同元素，所以这里才把key 和 value 都进行了赋值
        var data = JSON.stringify(arr)
        wx.navigateTo({
          url: '/pages/submit2/submit2?data=' + data ,
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
    changeTabs(index){
      // 2 修改源数组
      let  tabs  = this.data.tabs;
            
      tabs.forEach((v, i) =>{
        i === index ? v.isActive = true : v.isActive = false;

      })
      // 3 赋值到data中
      this.setData({
        tabs:tabs
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var index = JSON.parse(options.index)
      this.changeTabs(index)
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