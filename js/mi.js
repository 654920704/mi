// var lb = document.querySelector('#lunbo');

var list = document.querySelector('#list');

var txt = document.querySelector('#txt');
var data = [{
    name: "红米Pro",
    contain: "硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身",
    price: "1499元 起",
    image: "http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg"
},
    {
        name: "红米Note 3",
        contain: "【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
        price: "799元 起",
        image: "http://i1.mifile.cn/v1/a1/T1VNJjBsdT1RXrhCrK.jpg"
    },
    {
        name: "红米手机3S",
        contain: "指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
        price: "699元 起",
        image: "http://i8.mifile.cn/v1/a1/517db742-917d-d2ef-5953-066c2c2f6625.jpg"
    },
    {
        name: "小米Max全球通",
        contain: "6.44\"大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",
        price: "1299元 起",
        image: "http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg"
    },
    {
        name: "红米Note 3",
        contain: "【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
        price: "799元 起",
        image: "images/hongmi_3.jpg"
    },
    {
        name: "小米平板2",
        contain: "全金属机身 / 7.9英寸视网膜屏幕 / 800万像素相机 / 6190mAh大电池 / 支持5V/2A快充",
        price: "999元 起",
        image: "images/xiaomi_pb.jpg"
    },
    {
        name: "小米电视3S 43英寸",
        contain: "LG、友达 全高清液晶屏 / 金属机身薄至10.9mm / 内容丰富 / 支持壁挂",
        price: "1799元",
        image: "images/xiaomi_tv3s.jpg"
    },
    {
        name: "小米盒子3",
        contain: "全新升级64位 4K网络机顶盒 / 标配小米蓝牙语音体感遥控器",
        price: "249元",
        image: "images/xiaomi_hezi.jpg"
    },
    {
        name: "小米手环2",
        contain: "OLED显示屏，时间、步数、心率，触手可及 / 全新腕带设计，升级计步算法 / 精准心率监测，科学运动自主掌握",
        price: "149元",
        image: "images/mi_cuff.jpg"
    },
    {
        name: "米兔儿童电话手表",
        contain: "高清双向语音通话，五重定位 / 一键紧急呼救，包含位置数据及7秒环境录音 / 三重数据加密，三道安全保障，私密更安全",
        price: "299元",
        image: "images/mitu_tc.jpg"
    },];


function initCtrl(data) {
    var strHtml = '';

    data.forEach(function (item) {
        strHtml += '<ul  class="list"><img src="'+item.image+'" alt=""><div><h3>'+item.name+'</h3></br><span id="detail">'+item.contain+'</span></br></br><span id="price">'+item.price+'</span></div></ul>'

});
    list.innerHTML = strHtml;
    console.log(strHtml);
}
initCtrl(data);
txt.onkeyup = function() {
    var str = txt.value;
    var result = data.filter(function(item) {
        if (item.name.toLowerCase().indexOf(str.toLowerCase())>-1 ||
            item.contain.toLowerCase().indexOf(str.toLowerCase())>-1||item.price.toLowerCase().indexOf(str.toLowerCase())>-1
        ){
          return item;
        }
    });
    initCtrl(result);
}

