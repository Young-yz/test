/*大屏*/
//自调用函数
(function () {
    // 1、页面一加载就要知道页面宽度计算
    var setFont = function () {
        // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
        var html = document.documentElement;// 获取html
        // 获取宽度
        var width = html.clientWidth;

        // 判断
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        // 设置html的基准值
        var fontSize = width / 80 + 'px';
        // 设置给html
        html.style.fontSize = fontSize;
    }
    setFont();
    // 2、页面改变的时候也需要设置
    // 尺寸改变事件
    window.onresize = function () {
        setFont();
    }
})();

(function () {
    //事件委托
    $('.monitor').on('click', ' a', function () {
        //点击当前的a 加类名 active  他的兄弟删除类名
        $(this).addClass('active').siblings().removeClass('active');
        //获取一一对应的下标 
        var index = $(this).index();
        //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
        $('.content').eq(index).show().siblings('.content').hide();
    });
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.monitor .marquee').each(function (index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });

})();
//销售
(function () {
    var option = {
        //鼠标提示工具
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            // 类目类型                                  
            type: 'category',
            // x轴刻度文字                                  
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            },
            boundaryGap: false//去除轴内间距
        },
        yAxis: {
            // 数据作为刻度文字                                  
            type: 'value',
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            },
            boundaryGap: false//去除轴内间距
        },
        //图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色

            },
            right: '10%'//距离右边10%
        },
        // 设置网格样式
        grid: {
            show: true,// 显示边框
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        series: [{
            name: '系统总体注水',
            // 数据                                  
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#00f2f1'  // 线颜色
            }
        },
        {
            name: '区域注水',
            // 数据                                  
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#ed3f35'  // 线颜色
            }
        },
		{
		    name: '单井注水',
		    // 数据                                  
		    data: [80, 91, 57, 64, 187, 79, 259, 66, 101, 49, 83, 41],
		    // 图表类型                                  
		    type: 'line',
		    // 圆滑连接                                  
		    smooth: true,
		    itemStyle: {
		        color: '#15f3a2'  // 线颜色
		    }
		}]
    };
    var myechart = echarts.init($('.echart10')[0]);
    myechart.setOption(option);

    //点击效果
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
			[80, 91, 57, 64, 187, 79, 259, 66, 101, 49, 83, 41]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
			[59, 78, 62, 47, 33, 90, 101, 83, 91, 76, 77, 69]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
			[91, 87, 88, 73, 99, 107, 151, 175, 133, 98, 85, 79]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
			[44, 12,35, 51, 55, 44, 21, 44, 36, 51, 27, 21]
        ]
    }
    $('#mc2 ').on('click', '.mtit a', function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        //option series   data
        //获取自定义属性值
        var key = $(this).attr('data-type');
        //取出对应的值
        key = data[key];
        //将值设置到 图表中
        option.series[0].data = key[0];
        option.series[1].data = key[1];
        //再次调用才能在页面显示
        myechart.setOption(option);
    });
    //定时器
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index > 4) {
            index = 0;
        };
        $('#mc2 .mtit a').eq(index).click();
    }, 2000);
})();
