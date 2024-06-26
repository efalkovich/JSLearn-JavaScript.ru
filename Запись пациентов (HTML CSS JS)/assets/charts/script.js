let firstChart = echarts.init(document.getElementById('firstChart'));
let secondChart = echarts.init(document.getElementById('secondChart'));
let thirdChart = echarts.init(document.getElementById('thirdChart'));
let mastersList = masters.masters;

let firstOptions = {
  title: {
    text: 'Загруженность по часам',
    subtext: '(данные автоматически обновляются при изменении на странице записей)',
    left: 'center'
  },
  tooltip: {},
  legend: {
    data: []
  },
  xAxis: {
    data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
  },
  yAxis: {},
  series: [
    {
      name: 'Кол-во записей',
      type: 'bar',
      data: []
    }
  ]
};

let secondOptions = {
  title: {
    text: 'Загруженность по месяцам',
    subtext: '(данные автоматически обновляются при изменении на странице записей)',
    left: 'center'
  },
  tooltip: {},
  legend: {
    data: []
  },
  xAxis: {
    data: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Нояб.', 'Дек.'],
  },
  yAxis: {},
  series: [
    {
      name: 'Кол-во записей',
      type: 'line',
      data: []
    }
  ]
};

let thirdOptions = {
  title: {
    text: 'Загруженность специалистов',
    subtext: '(данные автоматически обновляются при изменении на странице записей)',
    left: 'center'
  },
  tooltip: {},
  legend: {
    data: []
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: mastersList.reverse().map(item => item.fullName),
    right: 0
  },
  series: [
    {
      name: 'Кол-во записей',
      type: 'bar',
      data: []
    }
  ],
  grid: {
   left: '20%'
  }
};

function updateThChart() {
   let data = [];
   let length = thirdOptions.yAxis.data.length;
   for(let i  = 0; i < length; i++)
      data[i] = 0;

   for(let key in localStorage) {
      if(!localStorage.hasOwnProperty(key))
         continue;

      let split = key.split('-');

      if(isNaN(+(split[0].slice(6))))
         continue;

      let index = length - 1 - +(split[0].slice(6));
      data[index]++;
   }

   thirdOptions.series[0].data = data;

   thirdChart.setOption(thirdOptions)
}

function updateSChart() {
   let data = [];
   for(let i  = 0; i < secondOptions.xAxis.data.length; i++)
      data[i] = 0;

   for(let key in localStorage) {
      if(!localStorage.hasOwnProperty(key))
         continue;

      let split = key.split('-');

      if(isNaN(+split[2]))
         continue;

      let index = +(split[2]);
      data[index - 1]++;
   }

   secondOptions.series[0].data = data;

   secondChart.setOption(secondOptions)
}

function updateFChart() {
   let data = [];
   for(let i  = 0; i < firstOptions.xAxis.data.length; i++)
      data[i] = 0;

   for(let key in localStorage) {
      if(!localStorage.hasOwnProperty(key))
         continue;

      let split = key.split('-');

      if(isNaN(+split[split.length - 1]))
         continue;

      let index = +(split[split.length - 1].slice(0, -2));
      data[index - 8]++;
   }

   firstOptions.series[0].data = data;

   firstChart.setOption(firstOptions)
}

updateFChart();
updateSChart();
updateThChart();
setInterval(() =>  {updateFChart(); updateSChart(); updateThChart();}, 3000);

