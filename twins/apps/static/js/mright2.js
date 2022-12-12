var mCharts = echarts.init(document.querySelector('#echart12'))
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:['井排干线压力','管线经济流速'],
		textStyle: {
		    color: '#fff',
		},
    },
    radar: [
        {
            indicator: [
                {text: '泵出口压力', max: 100},
                {text: '管径', max: 100},
                {text: '注水井油压', max: 100},
                {text: '注水井地层压力', max: 100},
                {text: '管线摩阻系数', max: 100}
            ],
            radius: 60,
            center: ['25%','60%'],
        },
        {
            indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                    res.push({text:i+'月',max:100});
                }
                return res;
            })(),
            center: ['75%','60%'],
            radius: 60
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40],
                    name: '井排干线压力'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [85, 90, 90, 95, 95],
                    name: '管线经济流速'
                },
                {
                    value: [95, 80, 95, 90, 93],
                    name: '某水果手机'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 2,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    name: '降水量',
                    value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                },
                {
                    name:'蒸发量',
                    value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                }
            ]
        }
    ]
};
mCharts.setOption(option)