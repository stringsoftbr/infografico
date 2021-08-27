$("#legenda1").on({
    mouseenter: function () {
        $("#legenda-chart1").css({ "display": "block", "position": "absolute" });
    },
    mouseleave: function () {
        $("#legenda-chart1").css("display", "none");
    }
});

$("#hora").on({
    mouseenter: function () {
        $("#mytimer").css({ "display": "block", "position": "absolute" });
    },
    mouseleave: function () {
        $("#mytimer").css("display", "none");
    }
});

$("#send").click(function () {
    alert("Sua mensagem foi enviada, obrigao!");
});

var delayed;
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        datasets: [
            {
                label: "Área ",
                backgroundColor: ["#ABCF91"],
                data: [194000000, 210000000, 239000000, 285000000, 295000000, 308000000, 312000000, 314000000, 311000000, 312000000]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: false,
            text: 'Áreas de Florestas Públicas'
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        }
    }

});