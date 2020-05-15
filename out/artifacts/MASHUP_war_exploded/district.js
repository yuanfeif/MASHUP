$(document).ready(function(){
    // 默认显示北京
    cityDistrict();
})

// vue展示
var vmDistrict = new Vue({
    el:"#district",
    data:{
        districtData:{}
    }
})

// 天气接口
function cityDistrict() {
    // 清空对象
    vmDistrict.districtData = {};
    $.ajax({
        //默认是GET
        type: "GET",
        //高德行政区域API
        url: "https://restapi.amap.com/v3/config/district",
        dataType: "jsonp",
        data: {
            key: "1364833e0ff82437ce898dc29e5c2a1a",
            keywords: "启东",
            subdistrict: 1,
        },
        success: function (data) {
            console.log(data);
            vmDistrict.districtData = data.districts[0];
            console.log(data.districts[0]);
        },
        fail: function (err) {
            console.log("查询失败");
            console.log(err);
        }
    });
}
