
// function order_more(){
//   api.sendEvent({
//     name: 'order_more',
//     extra: {key:' value'}
//   });
// }
// function address_list(){
//   api.sendEvent({
//     name: 'address_list',
//     extra: {key:' value'}
//   });
// }

// function jump_login(url, arg1) {
//   api.getPrefs({

//     key: 'loginStatus'

//   }, function (ret, err) {
//     //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
//     var val = ret.value;
//     // alert(ret.value)
//     if (val && val != "") {
//       //已登录
//       jump(url, arg1)
//     } else {
//       //未登录
//       jump('login')
//     }

//   });

// }
function zh_logout(){
  alert('账号已在其他地方登录')
  setTimeout(function (){
    top.window.location="../login/login_win.html"
  },1000)
}
function jump(url){
  top.window.location=url
}
function jump1111(type, arg) {

  var user = 'widget://html/'
  var buss = 'widget://html/buss/'
  var com = 'widget://html/common/'
  //com
  //webview
  if (type == 'webview') {
    console.log(JSON.stringify(arg))
    api.openWin({
      name: 'webview_win',
      url: com + 'webview/webview_win.html',
      pageParam: arg
    });
  }
  //map
  if (type == 'map') {
    console.log(JSON.stringify(arg))
    api.openWin({
      name: 'map_win',
      url: com + 'map/map_win.html',
      pageParam: arg
    });
  }
  //图片预览
  if (type == 'img') {
    console.log(JSON.stringify(arg))
    api.openWin({
      name: 'photoView_frame_f',
      url: com + 'photoView_frame/photoView_frame_f.html',
      pageParam: arg
    });
  }
  //图片预览1
  if (type == 'yulan') {
    console.log(JSON.stringify(arg))
    api.openWin({
      name: 'yulan_win',
      url: com + 'yulan/yulan_win.html',
      pageParam: arg
    });
  }
  //视频预览1
  if (type == 'yulan_video') {
    console.log(JSON.stringify(arg))
    api.openWin({
      name: 'yulan_video_win',
      url: com + 'yulan_video/yulan_video_win.html',
      pageParam: arg
    });
  }
  //登录
  if (type == 'login') {
    api.openWin({
      name: 'login',
      url: user + 'login/login_win.html',
      pageParam: arg
    });
  }
  //登录 用户协议
  if (type == 'yhxy') {
    api.openWin({
      name: 'yhxy',
      url: user + 'yhxy/yhxy_win.html',
      pageParam: arg
    });
  }
  //支付
  if (type == 'zhifu') {
    api.openWin({
      name: 'zhifu',
      url: user + 'zhifu/zhifu_win.html',
      pageParam: arg
    });
  }
  //pay_img
  if (type == 'pay_img') {
    api.openWin({
      name: 'pay_img',
      url: user + 'pay_img/pay_img_win.html',
      pageParam: arg
    });
  }
  //wuliu
  if (type == 'wuliu') {
    api.openWin({
      name: 'wuliu',
      url: user + 'wuliu/wuliu_win.html',
      pageParam: arg
    });
  }

}