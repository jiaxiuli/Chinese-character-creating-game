// pages/testx/testx.js
//let SCREEN_WIDTH = 750
//let RATE = wx.getSystemInfoSync().screenHeight /wx.getSystemInfoSync().screenWidth
let count = 0;
let index = 0, // 当前点击图片的index
items = [], // 图片数组信息
itemId = 1, // 图片id，用于识别点击图片
fliter = 'init', // 默认过滤类型（原图）
shape = 'init'; // 默认形状（原图）
const hCw = 1.015; // 图片宽高比
const canvasPre = 1; // 展示的canvas占mask的百分比
const maskCanvas = wx.createCanvasContext('maskCanvas', this); // 创建 canvas 的绘图上下文 CanvasContext 对象
const canvasWrap_draw = wx.createCanvasContext('canvasWrap_draw', this);
const util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    test: 1,
    character :"",
    max_x: 0,
    max_y :0,
    min_x: 9999,
    min_y :9999,
    canvasTemImg_draw:"",
    class1: 'z1', class2: 'z2',class3: 'z1', class4: 'z2', class5: 'z1',  class6: 'z2',class7: 'z1',class8: 'z2',class9: 'z1',class10: 'z2', class11: 'z1', class12: 'z2',class13: 'z1', class14: 'z2', class15: 'z1',  class16: 'z2',class17: 'z1',class18: 'z2',class19: 'z1',class20: 'z2',class21: 'z1',class22 :'z2',class23: 'z1', class24: 'z2',class25: 'z1', class26: 'z2', class27: 'z1',  class28: 'z2',class29: 'z1',class30: 'z2',class31: 'z1',class32: 'z2', class33: 'z1', class34: 'z2',class35: 'z1', class36: 'z2', class37: 'z1',  class38: 'z2',class39: 'z1',class40: 'z2',class41: 'z1',class42: 'z2',class43: 'z1',class44 :'z2',
    lock: false,
    itemList: [],
    showinput:true,
    showstart:true,
    hiddenName:false,
    isClear: false,
    penColor: 'black',
    lineWidth: 20,
  },
  
  onShow: function () {
    //自动跳转到login
    var _this = this;
    setTimeout(function(){
	//页面跳转相当于	
     _this.setData({
       showstart:false
      })
    },5000);
  },


  InputCharacter:function(e){
    this.character = e.detail.value
    
    this.setData({
      character : this.character
    })
  },
  GetCharacter(){
    var that = this;
    console.log(that.character)
    this.setData({
      showinput:false
    })
  },
re_input(){
  this.setData({
    showinput:true
  })
},


  ToShow:function(e){
    this.setData({
        hiddenName:!this.data.hiddenName
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    items = this.data.itemList;

    wx.getSystemInfo({ // 获取系统信息
  
      success: sysData => {
  
        this.sysData = sysData
  
        // 设置画布宽高，this.sysData.windowWidth为屏幕的宽度
  
        this.setData({
  
          canvasWidth: this.sysData.windowWidth * canvasPre, // 如果觉得不清晰的话，可以把所有组件、宽高放大一倍
  
          canvasHeight: this.sysData.windowHeight * canvasPre *0.545,
  
        })
  
      }
  
    })
  },

  bindTouchStart: function(e) {
    this.startTime = e.timeStamp;
},
bindTouchEnd: function(e) {
    this.endTime = e.timeStamp;
},
  rotateFn: function(e) {
    
    if(this.endTime  - this.startTime < 350) {
    let data = this.data;
    var n = e.currentTarget.dataset.id;
    
    switch(n){
      case '1': if (data.class1 == 'z1' && data.class2 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);} 
      else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
      case '3': if (data.class3 == 'z1' && data.class4 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
      case '5':if (data.class5 == 'z1' && data.class6 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       } break;
      case '7': if (data.class7 == 'z1' && data.class8 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '9': if (data.class9 == 'z1' && data.class10 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '11': if (data.class11 == 'z1' && data.class12 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '13': if (data.class13 == 'z1' && data.class14 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '15': if (data.class15 == 'z1' && data.class16 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '17': if (data.class17 == 'z1' && data.class18 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '19': if (data.class19 == 'z1' && data.class20 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '21': if (data.class21 == 'z1' && data.class22 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '23': if (data.class23 == 'z1' && data.class24 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '25': if (data.class25 == 'z1' && data.class26 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '27': if (data.class27 == 'z1' && data.class28 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '29': if (data.class29 == 'z1' && data.class30 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '31': if (data.class31 == 'z1' && data.class32 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '33': if (data.class33 == 'z1' && data.class34 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '35': if (data.class35 == 'z1' && data.class36 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '37': if (data.class37 == 'z1' && data.class38 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '39': if (data.class39 == 'z1' && data.class40 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '41': if (data.class41 == 'z1' && data.class42 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
       case '43': if (data.class43 == 'z1' && data.class44 == 'z2') {
        this.run('front', 'back', 'z2', 'z1',n);
       } else {
        this.run('back', 'front', 'z1', 'z2',n);
       }break;
    }
     
   }},
   run: function(a, b, c, d, n) {
    let that = this;
    
    switch(n){
      case '1':that.setData({class1: a,class2: b, })
         setTimeout(function() {that.setData({class1: c,class2: d, })}, 900); break;
      case '3':that.setData({class3: a,class4: b, })
        setTimeout(function() {that.setData({ class3: c,class4: d, })}, 900); break;
      case '5':that.setData({class5: a,class6: b, })
      setTimeout(function() {that.setData({class5: c,class6: d, })}, 900); break;
      case '7':that.setData({class7: a,class8: b, })
      setTimeout(function() {that.setData({class7: c,class8: d, })}, 900); break;
      case '9':that.setData({class9: a,class10: b, })
      setTimeout(function() {that.setData({class9: c,class10: d, })}, 900); break;
      case '11':that.setData({class11: a,class12: b, })
      setTimeout(function() {that.setData({class11: c,class12: d, })}, 900); break;
      case '13':that.setData({class13: a,class14: b, })
      setTimeout(function() {that.setData({class13: c,class14: d, })}, 900); break;
      case '15':that.setData({class15: a,class16: b, })
      setTimeout(function() {that.setData({class15: c,class16: d, })}, 900); break;
      case '17':that.setData({class17: a,class18: b, })
      setTimeout(function() {that.setData({class17: c,class18: d, })}, 900); break;
      case '19':that.setData({class19: a,class20: b, })
      setTimeout(function() {that.setData({class19: c,class20: d, })}, 900); break;
      case '21':that.setData({class21: a,class22: b, })
      setTimeout(function() {that.setData({class21: c,class22: d, })}, 900); break;
      case '23':that.setData({class23: a,class24: b, })
      setTimeout(function() {that.setData({class23: c,class24: d, })}, 900); break;
      case '25':that.setData({class25: a,class26: b, })
      setTimeout(function() {that.setData({class25: c,class26: d, })}, 900); break;
      case '27':that.setData({class27: a,class28: b, })
      setTimeout(function() {that.setData({class27: c,class28: d, })}, 900); break;
      case '29':that.setData({class29: a,class30: b, })
      setTimeout(function() {that.setData({class29: c,class30: d, })}, 900); break;
      case '31':that.setData({class31: a,class32: b, })
      setTimeout(function() {that.setData({class31: c,class32: d, })}, 900); break;
      case '33':that.setData({class33: a,class34: b, })
      setTimeout(function() {that.setData({class33: c,class34: d, })}, 900); break;
      case '35':that.setData({class35: a,class36: b, })
      setTimeout(function() {that.setData({class35: c,class36: d, })}, 900); break;
      case '37':that.setData({class37: a,class38: b, })
      setTimeout(function() {that.setData({class37: c,class38: d, })}, 900); break;
      case '39':that.setData({class39: a,class40: b, })
      setTimeout(function() {that.setData({class39: c,class40: d, })}, 900); break;
      case '41':that.setData({class41: a,class42: b, })
      setTimeout(function() {that.setData({class41: c,class42: d, })}, 900); break;
      case '43':that.setData({class43: a,class44: b, })
      setTimeout(function() {that.setData({class43: c,class44: d, })}, 900); break;
    }
   },
   
    longClick(e){
    var img_url = e.currentTarget.dataset.id;
    this.setData({lock: true});
      let that = this;
      that.setDropItem({ url: img_url })
      if (this.data.lock) {
         this.setData({ lock: false });
      }
    wx.vibrateLong();
    },
    setDropItem(imgData) {
        let data = {}; // 存储图片信息
          // 获取图片信息，网络图片需先配置download域名才能生效
           wx.getImageInfo({
              src: imgData.url,
              success: res => {
                  // 初始化数据
                let maxWidth = 100, maxHeight = 100; // 设置最大宽高
                if (res.width > maxWidth || res.height > maxHeight) { // 原图宽或高大于最大值就执行
                   if (res.width / res.height > maxWidth / maxHeight) { // 判断比例使用最大值的宽或高作为基数计算
                        data.width = maxWidth;
                        data.height = Math.round(maxWidth * (res.height / res.width));          
                    } else {          
                        data.height = maxHeight;          
                        data.width = Math.round(maxHeight * (res.width / res.height));          
                    }             
                }
          
                data.image = imgData.url; // 显示地址         
                data.initImage = imgData.url; // 原始地址          
                data.id = ++itemId; // id          
                data.top = 80; // top定位         
                data.left = 150; // left定位         
                // 圆心坐标
          
                data.x = data.left + data.width/2 ;          
                data.y = data.top + data.height/2 ;       
                
                data.scale = 1; // scale缩放         
                data.rotate = 0; // 旋转角度
                data.angle = data.rotate + 0.01;        
                data.active = false; // 选中状态       
                items[items.length] = data; // 每增加一张图片数据增加一条信息       
                this.setData({     
                  itemList: items,
                
                })    
              }      
            })    
          },
          


 de_active(){
  for (let i = 0; i < items.length; i++) {
    items[i].active = false;
  }
  this.setData({
    itemList: items
  })
 },         
          // 点击图片
          
       
WraptouchStart: function(e) {
  // 循环图片数组获取点击的图片信息
  for (let i = 0; i < items.length; i++) {
    items[i].active = false;
    if (e.currentTarget.dataset.id == items[i].id) {
      index = i;
      items[index].active = true;
    }
  }
  this.setData({
    itemList: items,
   
  })
  // 获取点击的坐标值
  items[index].lx = e.touches[0].clientX;
  items[index].ly = e.touches[0].clientY;
},
// 拖动图片
WraptouchMove(e) {
  
  items[index]._lx = e.touches[0].clientX;
  items[index]._ly = e.touches[0].clientY;

  items[index].left += items[index]._lx - items[index].lx;
  items[index].top += items[index]._ly - items[index].ly;
  items[index].x += items[index]._lx - items[index].lx;
  items[index].y += items[index]._ly - items[index].ly;

  items[index].lx = e.touches[0].clientX;
  items[index].ly = e.touches[0].clientY;
  this.setData({
    itemList: items,
   
  })
},
// 放开图片
WraptouchEnd() {
  this.setData({
    itemList: items,
 
  })
  this.synthesis(); // 调用合成图方法
  
},
// 点击伸缩图标
oTouchStart(e) {

  //找到点击的那个图片对象，并记录
  for (let i = 0; i < items.length; i++) {
    items[i].active = false;
    if (e.currentTarget.dataset.id == items[i].id) {
      index = i;
      items[index].active = true;
    }
  }
  //获取作为移动前角度的坐标
  items[index].tx = e.touches[0].clientX;
  items[index].ty = e.touches[0].clientY;
  //移动前的角度
  items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty);
  //获取图片半径
  items[index].r = this.getDistancs(items[index].x, items[index].y, items[index].left, items[index].top);
  this.setData({
    itemList: items,

  })
},
oTouchZoom: function(e) {

  //记录移动后的位置
  items[index]._tx = e.touches[0].clientX;
  items[index]._ty = e.touches[0].clientY;
  //移动的点到圆心的距离
 
  items[index].disPtoO = this.getDistancs(items[index].x+18, items[index].y+100, items[index]._tx, items[index]._ty - 10)
  var scale = items[index].disPtoO / items[index].r
  if(scale <= 3.5){
  items[index].scale = scale;
}
  
/*
  //移动后位置的角度
  items[index].angleNext = this.countDeg(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
  //角度差
  items[index].new_rotate = items[index].angleNext - items[index].anglePre;

  //叠加的角度差
  items[index].rotate += items[index].new_rotate;
  items[index].angle = items[index].rotate; //赋值
*/
  //用过移动后的坐标赋值为移动前坐标
  items[index].tx = e.touches[0].clientX;
  items[index].ty = e.touches[0].clientY;
  items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)
  //赋值setData渲染

  this.setData({
    itemList: items,
   
  })
},
oTouchRotate: function(e) {

  //记录移动后的位置
  items[index]._tx = e.touches[0].clientX;
  items[index]._ty = e.touches[0].clientY;
  //移动的点到圆心的距离
/*
  items[index].disPtoO = this.getDistancs(items[index].x, items[index].y, items[index]._tx, items[index]._ty - 10)
  items[index].scale = items[index].disPtoO / items[index].r;
*/

  //移动后位置的角度
  items[index].angleNext = this.countDeg(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
  //角度差
  items[index].new_rotate = items[index].angleNext - items[index].anglePre;

  //叠加的角度差
  items[index].rotate += items[index].new_rotate;
  items[index].angle = items[index].rotate; //赋值

  //用过移动后的坐标赋值为移动前坐标
  items[index].tx = e.touches[0].clientX;
  items[index].ty = e.touches[0].clientY;
  items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)
  //赋值setData渲染

  this.setData({
    itemList: items,
   
  })
},
// 计算坐标点到圆心的距离

getDistancs(cx, cy, pointer_x, pointer_y) {
  var ox = pointer_x - cx;
  var oy = pointer_y - cy;
  return Math.sqrt(
    ox * ox + oy * oy
  );
},

/*
 *参数cx和cy为图片圆心坐标
 *参数pointer_x和pointer_y为手点击的坐标
 *返回值为手点击的坐标到圆心的角度
 */
countDeg: function(cx, cy, pointer_x, pointer_y) {
  var ox = pointer_x - cx;
  var oy = pointer_y - cy;
  var to = Math.abs(ox / oy);
  var angle = Math.atan(to) / (2 * Math.PI) * 360;
  if (ox < 0 && oy < 0) //相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系  
  {
    angle = -angle;
  } else if (ox <= 0 && oy >= 0) //左下角,3象限  
  {
    angle = -(180 - angle)
  } else if (ox > 0 && oy < 0) //右上角，1象限  
  {
    angle = angle;
  } else if (ox > 0 && oy > 0) //右下角，2象限  
  {
    angle = 180 - angle;
  }
  return angle;
},

ToReturn: function(e) {
  let newList = [];
  for (let i = 0; i < items.length - 1; i++) {
      newList.push(items[i])
  }
  if (newList.length > 0) {
    newList[newList.length - 1].active = true; // 剩下图片组最后一个选中
  }
  items = newList;
  this.setData({
    itemList: items
  })
},


deleteItem: function(e) {
  let newList = [];
  for (let i = 0; i < items.length; i++) {
    if (e.currentTarget.dataset.id != items[i].id) {
      newList.push(items[i])
    }
  }
  if (newList.length > 0) {
    newList[newList.length - 1].active = true; // 剩下图片组最后一个选中
  }
  items = newList;
  this.setData({
    itemList: items
  })
},
// 打开遮罩层
openMask() {
  this.synthesis();
  this.setData({
    showCanvas: true
  })
},
synthesis() { // 合成图片
  maskCanvas.save();
  maskCanvas.beginPath();
  // 画背景色（白色）
  maskCanvas.setFillStyle('#ffffff');
  maskCanvas.fillRect(0, 0, this.data.canvasWidth, this.data.canvasHeight);
  //maskCanvas.drawImage("./card/1.png", 0, 0, 400, 400);
  
  items.forEach((currentValue, index) => {
    maskCanvas.save();
    maskCanvas.translate(0, 0);
    maskCanvas.beginPath();
    maskCanvas.translate(currentValue.x , currentValue.y); // 圆心坐标
    if( currentValue.angle == undefined ){
      maskCanvas.rotate(-0.01 * Math.PI / 180);
    }else{
    maskCanvas.rotate(currentValue.angle * Math.PI / 180);}
    maskCanvas.translate(-(currentValue.width * currentValue.scale / 2), -(currentValue.height * currentValue.scale / 2))
    maskCanvas.drawImage(currentValue.image, 0, 0, currentValue.width * currentValue.scale, currentValue.height * currentValue.scale);
    maskCanvas.restore();
  },this)
  // reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制
  
  var _this = this 
   maskCanvas.draw(false, (e) => {
      wx.canvasToTempFilePath({
        canvasId: 'maskCanvas',
        success: res => {
          _this.setData({
            canvasTemImg: res.tempFilePath
          })
        }
      }, _this)
  
    })


},
disappearCanvas() {
  this.setData({
    showCanvas: false
  })
},
// 保存图片到系统相册
saveImg: function() {
  console.log(this.data.canvasTemImg)
  wx.saveImageToPhotosAlbum({
    filePath: this.data.canvasTemImg,
    success: res => {
      wx.showToast({
        title: '保存成功',
        icon: "success"
      })
    },
    fail: res => {
      wx.openSetting({
        success: settingdata => {
          if (settingdata.authSetting['scope.writePhotosAlbum']) {
            console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
          } else {
            console.log('获取权限失败，给出不给权限就无法正常使用的提示')
          }
        },
        fail: error => {
          console.log(error)
        }
      })
      wx.showModal({
        title: '提示',
        content: '保存失败，请确保相册权限已打开',
      })
    }
  })
},

 
//////////////////////////////////////////////////////////////////////////////

  /**
   * 页面的初始数据
   */
 
  opendraw(){////////////////////////////////////////////////////////////////
    this.context = wx.createCanvasContext("canvasWrap_draw", this)
    this.setData({
      showCanvas_draw: true,
    })
    if( count == 0 ){
    this.context.setFillStyle('transparent');//填充白色
    this.context.fillRect(0, 0, 1000, 1000 );//画出矩形白色背景
   this.context.draw();
  }
  },
  Clear(){ 
    this.context.clearRect(0, 0, 1000, 1000)
    this.context.draw()
    this.setData({
      max_x: 0,
      max_y :0,
      min_x: 9999,
      min_y :9999,
    })
    count = 2
  },
  closedraw(){
    this.setData({
      showCanvas_draw: false,
    })
    if(count != 2){
   count = 4}
  },
  /**
   * 触摸开始
   */
  touchStart: function (e) {
    //得到触摸点的坐标
    this.startX = e.changedTouches[0].x
    this.startY = e.changedTouches[0].y
    this.context = wx.createCanvasContext("canvasWrap_draw", this)
    
    if (this.data.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画
      this.context.setStrokeStyle('#ffffff') //设置线条样式 此处设置为画布的背景颜色  橡皮擦原理就是：利用擦过的地方被填充为画布的背景颜色一致 从而达到橡皮擦的效果
      this.context.setLineCap('round') //设置线条端点的样式
      this.context.setLineJoin('round') //设置两线相交处的样式
      this.context.setLineWidth(20) //设置线条宽度
      this.context.save();  //保存当前坐标轴的缩放、旋转、平移信息
      this.context.beginPath() //开始一个路径
      this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true);  //添加一个弧形路径到当前路径，顺时针绘制  这里总共画了360度  也就是一个圆形
      this.context.fill();  //对当前路径进行填充
      this.context.restore();  //恢复之前保存过的坐标轴的缩放、旋转、平移信息
    } else {
      // 设置画笔颜色
      this.context.setStrokeStyle(this.data.penColor);
      // 设置线条宽度
      this.context.setLineWidth(this.data.lineWidth);
      this.context.setLineCap('round') // 让线条圆润
      this.context.beginPath()
    }
  },

  /**
   * 手指触摸后移动
   */
  
  touchMove: function (e) {

    var startX1 = e.changedTouches[0].x
    var startY1 = e.changedTouches[0].y

    if (this.data.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画
      this.context.save();  //保存当前坐标轴的缩放、旋转、平移信息
      this.context.moveTo(this.startX, this.startY);  //把路径移动到画布中的指定点，但不创建线条
      this.context.lineTo(startX1, startY1);  //添加一个新点，然后在画布中创建从该点到最后指定点的线条
      this.context.stroke();  //对当前路径进行描边
      this.context.restore()  //恢复之前保存过的坐标轴的缩放、旋转、平移信息

      this.startX = startX1;
      this.startY = startY1;

    } else {
      this.context.moveTo(this.startX, this.startY)
      this.context.lineTo(startX1, startY1)
      this.context.stroke()

      this.startX = startX1;
      this.startY = startY1;
      
    }
    if( this.startX > this.data.max_x){
      this.data.max_x = this.startX;
    }
    if( this.startY > this.data.max_y){
      this.data.max_y = this.startY;
    }
    if( this.startX < this.data.min_x){
      this.data.min_x = this.startX;
    }
    if( this.startY < this.data.min_y){
      this.data.min_y = this.startY;
    }
    
    //只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>
    wx.drawCanvas({
      canvasId: 'canvasWrap_draw',
      reserve: true,
      actions: this.context.getActions() // 获取绘图动作数组
      
    })
   
  },

  /**
   * 触摸结束
   */
  touchEnd: function (e) {
    this.touchMove(e);
    count = 3
    wx.canvasToTempFilePath({
      canvasId: 'canvasWrap_draw',
      x: this.data.min_x - 20,
      y: this.data.min_y - 20,
      width: this.data.max_x - this.data.min_x + 30,
      height: this.data.max_y - this.data.min_y + 30,
      success: res => {
        this.setData({
          canvasTemImg_draw: res.tempFilePath
        })
     
      }
 
    }, this);
  },

  /**
   * 画笔选择
   */
  penSelect: function (options) {
    var lineWidth = options.target.dataset.param;
    console.log("lineWidth:" + lineWidth);
    this.setData ({
      isClear: false,
      lineWidth: lineWidth,
    });
  },

  /**
   * 颜色选择
   */
  colorSelect: function (options) {
    var penColor = options.target.dataset.param;
    console.log("penColor:" + penColor);
    this.setData({
      isClear: false,
      penColor: penColor,
    });
  },

  /**
   * 清除涂鸦信息
   */
  clearCanvas: function (options) {
    console.log("clearCanvas");
    this.setData({
      isClear: true
    });
  },
   drawOn(){
     if(count == 3 || count == 4){
    let that = this;
    that.setDropItem({url: this.data.canvasTemImg_draw})
  }
    this.setData({
      showCanvas_draw: false,
    })
   
   },
  
})

