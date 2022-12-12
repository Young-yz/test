var mCharts = echarts.init(document.querySelector('#echart5'))
var option = {
  // backgroundColor: "#38445E",
  grid: {
    left: "9%",
    top: "20%",
    bottom: "20%",
    right: "8%",
  },
  xAxis: {
    data: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日", "1月8日"],
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "rgba(255, 129, 109, 0.1)",
        width: 1, //这里是为了突出显示加上的
      },
    },
    axisLabel: {
      textStyle: {
        color: "#999",
        fontSize: 12,
      },
    },
  },
  yAxis: [
    {
      splitNumber: 2,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 129, 109, 0.1)",
          width: 1, //这里是为了突出显示加上的
        },
      },
      axisLabel: {
        textStyle: {
          color: "#999",
        },
      },
      splitArea: {
        areaStyle: {
          color: "rgba(255,255,255,.5)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 129, 109, 0.1)",
          width: 0.5,
          type: "dashed",
        },
      },
    },
  ],
  series: [
    {
      name: "hill",
      type: "pictorialBar",
      barCategoryGap: "0%",
      symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
      label: {
        show: true,
        position: "top",
        distance: 15,
        color: "#DB5E6A",
        fontWeight: "bolder",
        fontSize: 20,
      },
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(232, 94, 106, .8)", //  0%  处的颜色
              },
              {
                offset: 1,
                color: "rgba(232, 94, 106, .1)", //  100%  处的颜色
              },
            ],
            global: false, //  缺省为  false
          },
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [123, 60, 25, 18, 12, 9, 2, 1],
      z: 10,
    },
  ],
};
mCharts.setOption(option);