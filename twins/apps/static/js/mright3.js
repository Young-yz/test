var mCharts = echarts.init(document.querySelector('#echart13'))

var data = [
    {
        name: '局部压力',
        value: 12,
        percent: '58',
    },
    {
        name: '局部水量',
        value: 5,
        percent: '58',
    },
];

var titleArr = [],
    seriesArr = [];
colors = [
    'rgba(6, 254, 188, 1)',
    'rgba(255, 164, 3, 1)',
    'rgba(6, 254, 188, 0.1)',
    'rgba(255, 164, 3, 0.1)',
    'rgba(255, 255, 255, 0.38)',
    'rgba(255, 255, 255, 1)',
];
data.forEach(function (item, index) {
    let i = index;
    if (i % 2 === 1) {
        i = i + 1;
    }
    titleArr.push({
        text: '{b|正常个数}' + '   ' + '{a|' + item.value + '}' + '   ' + '{a|' + item.percent + '%}',
        left: '70%',
        top: (i + 1) * 25 + '%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '30',
            color: colors[4],
            textAlign: 'center',
            rich: {
                a: {
                    color: colors[5],
                    fontSize: '20',
                    fontWeight: 'bold',
                },
                b: {
                    colors: colors[4],
                    fontSize: '20',
                    fontWeight: 'bold',
                },
            },
        },
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: ['30%', '33%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: colors[index + 2] },
                    { offset: 1, color: colors[index] },
                ]),
                shadowColor: colors[index],
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: ['28%', (i + 1) * 28 + '%'],
        data: [
            {
                value: item.percent,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.seriesName;
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            color: colors[4],
                        },
                    },
                },
            },
            {
                value: 100 - item.percent,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(104, 104, 104, 0.3)',
                    },
                    emphasis: {
                        color: 'rgba(104, 104, 104, 0.3)',
                    },
                },
            },
        ],
    });
});

var option = {
    // backgroundColor: '#111111',
    title: titleArr,
    series: seriesArr,
};

mCharts.setOption(option)