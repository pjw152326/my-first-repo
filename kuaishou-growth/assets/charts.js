(function () {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var el = document.getElementById('chart-efficiency');
  if (!el || typeof echarts === 'undefined') return;

  var chart = echarts.init(el, null, { renderer: 'svg' });

  var categories = ['垂类作者月收入', '私域成交效率', '短直双开 GMV'];
  var values = [2.2, 4, 5];

  chart.setOption({
    animation: false,
    grid: { left: 8, right: 56, top: 18, bottom: 8, containLabel: true },
    tooltip: {
      appendToBody: true,
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: bg2,
      borderColor: rule,
      textStyle: { color: ink, fontFamily: 'inherit', fontSize: 13 },
      formatter: function (params) {
        var p = params[0];
        return p.name + '：<b>' + p.value + ' 倍</b>';
      }
    },
    xAxis: {
      type: 'value',
      max: 6,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11, formatter: '{value}x' }
    },
    yAxis: {
      type: 'category',
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: ink, fontSize: 13, fontWeight: 600 }
    },
    series: [
      {
        type: 'bar',
        data: [
          { value: 2.2, itemStyle: { color: accent + '99' } },
          { value: 4, itemStyle: { color: accent2 + 'b3' } },
          { value: 5, itemStyle: { color: accent } }
        ],
        barWidth: 26,
        itemStyle: { borderRadius: [0, 6, 6, 0] },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}x',
          color: ink,
          fontSize: 14,
          fontWeight: 700
        }
      }
    ]
  });

  window.addEventListener('resize', function () { chart.resize(); });
})();
