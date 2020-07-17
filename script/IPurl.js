//接口地址
// var IPurl = "http://bojiujia.800123456.top/api.aspx";
var IPurl = "http://xiaoyudaigou168.com.aa.800123456.top/api/";
var imgurl = "http://xiaoyudaigou168.com.aa.800123456.top/";
// var headurl = "http://bojiujia.800123456.top";
/**
 * 页面传参
 * @returns {Object}
 */

function getUrlParam() { //获取参数
    var url = decodeURIComponent(location.search);
    var theParam = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theParam;
}
function getNowCanshu() {
  var aa = window.location.href;//返回当前页面的url
  var urlinfo = aa.replace("#", " ");
  var canshu = function() {
    var ind = urlinfo.indexOf('?');//返回某个指定的字符串值在字符串中首次出现的位置
    var cs = urlinfo.substr(ind + 1);
    var tempobj = new Object();
    var csarr = cs.split("&");
    jQuery.each(csarr, function(i, v) {
      var temparr = v.split("=");
      var objname = temparr[0];
      tempobj[objname] = temparr[1];
    });
    return tempobj;
  }();
  return canshu;
}
function contentN(text) {
  if (text) {
  var reg = text.replace(/(\r\n)|(\n)/g,'<br>');
    return reg

  }
}
function getpri(price){
	var pri = price*0.01
	 pri =pri.toFixed(2)
 return pri
}
function telReg(tel){
  if(tel){
    var tel0= "" + tel;
    var reg=/(\d{3})\d{4}(\d{4})/;
    var tel1 = tel0.replace(reg, "$1****$2")
    console.log(tel1);
    return tel1
  }
}
function namereg(name){
  // var reg=/(\d{3})\d{4}(\d{4})/;
  var name1 = name.split("")
 if(name1.length>=3){
   // console.log(name1);
  var sxs=''
  for (var i = 0; i <name1.length-3; i++) {
    sxs=sxs+'*'
  }
  var newname=name1[0]+sxs+name1[name1.length-1]
    return newname
 }else{
  return name
 }
}
//获取img
//获取img
function getgimg(pic){
  if(!pic){
  	return
  }
  var arr=[]
  // arr=pic.split(",");
  arr=pic
  // var arr1=[]
  // arr1=arr[0].split("|");
  console.log(imgurl+arr[0])
  return imgurl+arr[0]
  // vm.tclist[index].picbox
}
function getgimg1(pic){
  if(!pic){
    return
  }
  var arr=[]
  // console.log(pic)
  arr=pic.split("^");
  var arr1=[]
  // arr1=arr[0].split("|");
  // console.log(imgurl+arr1[1])
  // console.log(imgurl+arr1[1])
  return imgurl+arr[0]
  // vm.tclist[index].picbox
}
function getTime(time){
  if(!time){
    return
  }
  var arr=[]
  // console.log(pic)
  arr=time.split(" ");
  var arr1=arr[0].split('/')
  return arr1[2]+'-'+arr1[0]+'-'+arr1[1]+' '+arr[1]
}
function bdenglu(type){
  if($api.getStorage('loginmsg')&&$api.getStorage('loginmsg')!=''){
      return
  }
  api.toast({
      msg: '请先登录账号!!!',
      duration: 1000,
      location: 'middle'
  });
  if(type==-1){
    api.openWin({
      name: 'login_win',
      url: './login/login_win.html',
      pageParam: {
          type: type
      }
    }); 
  }else{
    api.openWin({
      name: 'login_win',
      url: '../login/login_win.html',
      pageParam: {
          type: type
      }
    }); 
  }
	
  
}
//静默登录
function loginStatic(){
    var usertel,userpassword
    if($api.getStorage('usertel')&&$api.getStorage('usertel')!=''){
        usertel=$api.getStorage('usertel')
        userpassword=$api.getStorage('userpassword')
    }else{
      return
    }
    var value1={ //you参数 
      "phone": usertel, 
      "password":userpassword,
    }
    console.log(JSON.stringify(value1))
    api.ajax({
        url: IPurl+'/api/login/phone_login',
        method: 'post',
        timeout: 30,
        dataType: 'json',
        returnAll: false,
        data: {
            values: value1,
        }
    }, function(ret, err) {
        if (ret) {
          if (ret.code==1) {
            // alert(JSON.stringify(ret))
            // setTimeout(function(){
            //api.setPrefs设置登录成功状态
            // api.sendEvent({
            //     name: 'loginSuccess',
            //     extra:{id:-1}
            // });
            api.setPrefs({
              key: 'loginStatus',
              value: 'loginSuccess'
            });
            $api.setStorage('loginmsg', ret.data)
            $api.setStorage('user', ret.data.user)
            $api.setStorage('logintoken',ret.data.user.token)
            $api.setStorage('store', ret.data.store)
            $api.setStorage('usertel', usertel)
            $api.setStorage('userpassword', userpassword)
            console.log('刷登录')
          }else{
              console.log(JSON.stringify(ret))
          }
        }else{
            console.log(JSON.stringify(err));
        }
    })
}



/*tip*/
function resetTip1(callback,arg1,arg2){
    api.alert({
      title: '提示',
      msg: '当前网络不稳定请重试',
      buttons: ['重试']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        if(index=1){
          console.log('aa')
          if(arg1){
            callback(arg1,arg2)
          }else{
            callback()
          }
          
        }
    })
}




function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  if(!exdays){
    exdays=1
  }
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}