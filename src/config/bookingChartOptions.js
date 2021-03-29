export const bookingOptions =  {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      gridLines: {
        display:false
      },
      ticks: {
        beginAtZero: true,
        display: false
      }
    }],
    xAxes: [{
      gridLines: {
        display:false
      },
          
    }]
  },
  plugins: {
    datalabels: {
      color: 'white',
      font: {
        weight: 'bold',
        size: 22
      }
    }
  }
}