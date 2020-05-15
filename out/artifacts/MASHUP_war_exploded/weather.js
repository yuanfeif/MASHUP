$(document).ready(function(){
    // 默认显示北京
    cityWeather();
})

// vue展示
var vmWeather = new Vue({
    el:"#weather",
    data:{
        weatherData:{}
    }
})

// 天气接口
function cityWeather() {
    // 清空对象
    vmWeather.weatherData = {};
    $.ajax({
        //默认是GET
        type: "GET",
        //高德天气API
        url: "https://restapi.amap.com/v3/weather/weatherInfo",
        dataType: "jsonp",
        data: {
            key: "1364833e0ff82437ce898dc29e5c2a1a",
            city: 320681
        },
        success: function (data) {
            console.log(data);
            vmWeather.weatherData = data.lives[0];
            console.log(data.lives[0]);
        },
        fail: function (err) {
            console.log("查询失败");
            console.log(err);
        }
    });
}
