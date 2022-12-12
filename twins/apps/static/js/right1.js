var mCharts = echarts.init(document.querySelector('#echart4'))
var maxData = 2000;
var option = {
  // backgroundColor:'#041437',
  tooltip: {},
  xAxis: {
    max: maxData,
    splitLine: { show: false },
    offset: 10,
    axisLine: {
      show: false 
    },
    axisLabel: {
     show: false 
    }
  },
  yAxis: {
    data: ['1月', '2月', '3月', '4月'],
    inverse: true,
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      margin: 10,
      color: '#999',
      fontSize: 16
    }
  },
  grid: {
    top: 'center',
    height: 160,
    left: 60,
    right: 60
  },
  series: [
    {
      // current data
      type: 'pictorialBar',
      itemStyle:{
        color:'#01F4C3',
      },
      symbol: 'rect',
      symbolRepeat: 'fixed',
      symbolMargin: 5,
      symbolClip: true,
      symbolSize: [10,30],
      symbolBoundingData: maxData,
      data: [891, 1220, 660, 1670],
      z: 10
    },
    {
      type: 'pictorialBar',
      itemStyle: {
        color:'#fff',
      },
      label: {
        show: true,
        position: 'right',
        offset: [10, 0],
        color: 'green',
        fontSize: 18
      },
      animationDuration: 0,
      symbolRepeat: 'fixed',
      symbolMargin: 5,
      symbol: 'rect',
      symbolSize: [10,30],
      symbolBoundingData: maxData,
      data: [891, 1220, 660, 1670],
      z: 5
    }
  ]
};

mCharts.setOption(option);