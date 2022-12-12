var mCharts = echarts.init(document.querySelector('#echart11'))
var option = {
    // backgroundColor: 'rgb(43, 51, 59)',

    calculable: true,
    tooltip: {
        trigger: 'item',
        formatter: '%',
    },
    title: {
        show: true,
        // text: '南丁格尔玫瑰图',
        left: 'center',
        top: 40,
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    legend: {
        show: true,
        icon: 'circle',
        x: 'center',
        y: '20%',
        data: ['高压注水井分布', '低压注水井分布', '高低混压井分布', '井口节流损失', '其他'],
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '总支出',
            type: 'pie',
            radius: [13, 67],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ['50%', '50%'],
            roseType: 'area',
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    formatter: '%',
                },
                emphasis: {
                    show: true,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    smooth: false,
                    length: 20,
                    length2: 10,
                },
                emphasis: {
                    show: true,
                },
            },
            data: [
                {
                    value: 5,
                    name: '高压注水井分布',
                    itemStyle: {
                        normal: {
                            color: '#f845f1',
                        },
                    },
                    label: {
                        color: '#f845f1',
                    },
                },
                {
                    value: 15,
                    name: '低压注水井分布',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3',
                        },
                    },
                    label: {
                        color: '#ad46f3',
                    },
                },
                {
                    value: 20,
                    name: '高低混压井分布',
                    itemStyle: {
                        normal: {
                            color: '#5045f6',
                        },
                    },
                    label: {
                        color: '#5045f6',
                    },
                },
                {
                    value: 25,
                    name: '井口节流损失',
                    itemStyle: {
                        normal: {
                            color: '#4777f5',
                        },
                    },
                    label: {
                        color: '#4777f5',
                    },
                },
                {
                    value: 35,
                    name: '其他',
                    itemStyle: {
                        normal: {
                            color: '#44aff0',
                        },
                    },
                    label: {
                        color: '#44aff0',
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            ],
        },
    ],
};
mCharts.setOption(option)