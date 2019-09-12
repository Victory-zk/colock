var scales = document.querySelectorAll(".scale")
var spans = document.querySelectorAll(".scale span")
var scKeys = document.querySelectorAll(".scKey")

// 初始化表盘
// 表盘为360°，每一份时刻取值30°
for(var i=0; i<scales.length; i++) {
    scales[i].style.transform =  "rotate("+i*30+"deg)"
    // spans[i].style.transform = "rotate("+(-i*30)+"deg)"
} 

// 每一份刻度取值为6°
for(var i = 0 ; i < scKeys.length ; i ++){
    scKeys[i].style.transform = "rotate("+i*6+"deg)"
}

function initTime() {
    // 获取当前时间
    var nowTime = new Date()
    var second = document.querySelector(".second")
    var minute = document.querySelector(".minute")
    var hour = document.querySelector(".hour")

    var sNum = nowTime.getSeconds();
    sDeg = sNum*6;
    
    // 将分钟转化为角度，1分钟对应6°
    var mNum = nowTime.getMinutes();
    mDeg = mNum*6 + sNum*6/60+180;
    
    // 将小时转化为角度
    // 1小时对应的角度是360/12=30°
    var hNum = nowTime.getHours();
    hNum = hNum >12 ? hNum - 12 : hNum;
    hDeg =hNum*30 + mNum*30/60+180;

    // 将对应角度显示在表盘上
    second.style.transform = "rotate("+sDeg+"deg)";
    minute.style.transform = "rotate("+mDeg+"deg)";
    hour.style.transform  = "rotate("+hDeg+"deg)"
}
setInterval(initTime, 1000)