var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FFFFFF', '#e8cccd'],
                ['#C9D7FF', '#7FEBD9'],
                ['#8AFF8B', '#FFF6D6']
            ]
        }
    }
});

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['13  april', '20 april','27 april', '4 mei', '11 mei'],
        datasets: [{
            label: 'wugi99',
            backgroundColor: "blue",
            borderColor: "blue", 
            data: [1330, 1280, 1300, 1448, 1456],   
            fill: false,
        },
        {
            label: 'Pulse OSM',
            backgroundColor: "Green,",
            borderColor: "Green",
            data: [1831, 1776, 1796, 1818, 2027],
            fill: false,
        }]
    },
    options: {
    }
});
