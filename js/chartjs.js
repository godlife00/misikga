$(document).ready(function () {

    // 검색 - 요약 선차트 (pc)
    // if ($('#sum_topchart').length) {                        
    //     Highcharts.chart('sum_topchart', {

    //         chart: {
    //             type: 'area',
    //             renderTo: 'sum_topchart',                
    //             style: {
    //                 fontFamily: "'Lato', 'Noto Sans KR'"
    //             },
    //             // height: 300,                
    //             plotBorderColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false
    //         },
    //         colors: ["#e1474e", "#ff3301"],
    //         title: {
    //             style: {
    //                 'font-weight': "bold",
    //                 color: '#E0E0E3',
    //                 textTransform: 'uppercase',
    //                 fontSize: '0',
    //             },
    //             text: null
    //         },

    //         tooltip: {
    //             shared: true,
    //             pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
    //         },

    //         xAxis: [{
    //             categories: ['2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019', '2020','2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019', '2020','2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019', '2020','2005', '2006', '2007', '2008', '2009'],
    //             crosshair: true,
    //             labels: {
    //                 enabled: true,      
    //                 step : 10,              
    //                 align: 'left'
    //             }
    //         }],

    //         yAxis: [
    //             {                
    //             title: {
    //                 text: null
    //             },
    //         }, {
    //             title: {
    //                 text: null
    //             },
    //             tickAmount: 10,
    //             lineColor: null,
    //             minorGridLineWidth: 0,                
    //             alternateGridColor: null,
    //             showFirstLabel: false,                
    //             opposite: true
    //         }],

    //         credits: {
    //             enabled: false,
    //         },

    //         legend: {
    //             enabled: false,
    //         },

    //         exporting: {
    //             enabled: false
    //         },
            
    //         series: [{
    //             // 공백
    //         }, {
    //             name: '',
    //             data: [
    //                 0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
    //                 0.3, 0.1, 0.3, 213123, 2131, 2131, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
    //                 0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
    //                 0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2131, 1.2, 1.4, 3.7, 2.1, 2.0,
    //                 1.5
    //             ],
    //             yAxis: 1
    //         }],

    //         plotOptions: {                
    //             area: {
    //                 fillColor: {
    //                     linearGradient: {
    //                         x1: 0,
    //                         y1: 0,
    //                         x2: 0,
    //                         y2: 1
    //                     },
    //                     stops: [
    //                         [0, Highcharts.getOptions().colors[5]],
    //                         [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
    //                     ]
    //                 },
    //             },
    //             series: {
    //                 label: {
    //                     connectorAllowed: false
    //                 },
    //                 pointStart: null,
    //                 marker: {
    //                     enabled: false,
    //                 },
    //                 fillOpacity: 0.1
    //             },
    //         },
    //     });
    // }

    // 검색 - 요약 선차트 (mobile)
    if ($('#sum_topchart_m').length) {                        
        Highcharts.chart('sum_topchart_m', {

            chart: {
                type: 'area',
                renderTo: 'sum_topchart_m',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },                
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#e1474e"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                enabled: false,
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,                
            },

            yAxis: [{
                title: {
                    text: null
                },
            }, {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,                
                alternateGridColor: null,
                showFirstLabel: false,                
                opposite: true
            }],

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                // 공백
            }, {
                name: '',
                data: [
                    0.2, 5424, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 2131, 2131, 2131, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ],
                yAxis: 1
            }],

            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[5]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                        ]
                    },
                },
                series: {
                    enableMouseTracking: false,
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
});