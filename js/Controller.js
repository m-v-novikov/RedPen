'use stricte';

/*Controllers*/

var manePageControllers = angular.module('manePageControllers', []);

manePageControllers.controller('GreatingCtrl', ['$scope',
    function($scope){
        console.log("hello i'm ready");

        $scope.lineDiagrams =
        {
            numberParticipants : {
                title: 'Количество участников',
                id: 'numberParticipants',
                minBlockWidth: 1,
                commonQuantity: '1 789 587',
                dataPoints: [
                    { x: 1, y: 0, markerType: "none" },
                    { x: 2, y: 350 },
                    { x: 3, y: 370 },
                    { x: 4, y: 650 },
                    { x: 5, y: 800, markerType: "none" }
                ]

            },
            numberNonWorkingTime : {
                title: 'Количество нерабочего времени',
                id: 'numberNonWorkingTime',
                minBlockWidth: 1,
                commonQuantity: '2 987 736',
                measure: 'часов',
                dataPoints: [
                    { x: 1, y: 0, markerType: "none" },
                    { x: 2, y: 350 },
                    { x: 3, y: 370 },
                    { x: 4, y: 650 },
                    { x: 5, y: 800, markerType: "none" }
                ]
            },
            numberIdeas : {
                title: 'Идей',
                id: 'numberIdeas',
                minBlockWidth: 1,
                commonQuantity: '521',
                dataPoints: [
                    { x: 1, y: 0, markerType: "none" },
                    { x: 2, y: 350 },
                    { x: 3, y: 370 },
                    { x: 4, y: 650 },
                    { x: 5, y: 800, markerType: "none" }
                ]
            },
            numberRatings : {
                title: 'Оценок',
                id: 'numberRatings',
                minBlockWidth: 1,
                commonQuantity: '10 735',
                dataPoints: [
                    { x: 1, y: 0, markerType: "none" },
                    { x: 2, y: 350 },
                    { x: 3, y: 370 },
                    { x: 4, y: 650 },
                    { x: 5, y: 800, markerType: "none" }
                ]
            },
            numberComments : {
                title: 'Комментариев',
                id: 'numberComments',
                minBlockWidth: 1,
                commonQuantity: '250 789',
                dataPoints: [
                    { x: 1, y: 0, markerType: "none" },
                    { x: 2, y: 350 },
                    { x: 3, y: 370 },
                    { x: 4, y: 650 },
                    { x: 5, y: 800, markerType: "none" }
                ]
            }
        };

        $scope.doughnutDiagrams =
        {
            proportionProjectsObjectives : {
                title: 'Доля проектов в стратегических задачах',
                id: 'proportionProjectsObjectives',
                minBlockWidth: 0,
                dataPoints: [
                    {y: 345, name: 345 + '% ' + "mar"},
                    {y: 367, name: "apr"},
                    {y: 453, name: "may"},
                    {y: 256, name: "jun"},
                    {y: 234, name: "sep"},
                    {y: 456, name: "oct"}
                ]
            },
            sexParties : {
                title: 'Пол участников',
                id: 'sexParties',
                minBlockWidth: 1,
                dataPoints: [
                    {y: 850, name: 85 + '% ' + "мужчин"},
                    {y: 150, name: 15 + '% ' + "женщин"}
                ]
            },
            ageParties : {
                title: 'Возраст участников',
                id: 'ageParties',
                minBlockWidth: 0,
                dataPoints: [
                    {y: 550, name: 55 + '% ' + "до 40 лет"},
                    {y: 450, name: 45 + '% ' + "после 40 лет"}
                ]
            }
        };

        CanvasJS.addColorSet("barChartColors",
            [//colorSet Array

                "#1a991a",
                "#ff8e0c"
            ]);

        CanvasJS.addColorSet("doughnutChartColors",
            [//colorSet Array
                "#198c15",
                "#ff8e0c",
                "#bed44e",
                "#a053a3",
                "#facb37",
                "#00b393",

            ]);
        CanvasJS.addColorSet("lineChartColor",
            [//colorSet Array

                "#1b8b14",
                "#ff8e0c"
            ]);

        $scope.getLineCharts =function(id, dataPoints){

            var graphics = new CanvasJS.Chart(id,
                {
                    colorSet: "lineChartColor",
                    animationEnabled: true,
                    animationDuration: 1000,
                    interactivityEnabled: false,
                    axisX:{
                        gridThickness: 0,
                        lineThickness: 0,
                        tickThickness: 0,
                        labelFormatter: function ( e ) {
                            return '';
                        }
                    },
                    axisY:{
                        gridThickness: 0,
                        lineThickness: 0,
                        tickThickness: 0,
                        labelFormatter: function ( e ) {
                            return '';
                        }
                    },
                    toolTip:{
                        enabled: false
                    },

                    data: [
                        {
                            type: "line",
                            markerBorderColor: "#ff8e0c",
                            markerType: "circle",
                            markerBorderThickness: 2,
                            lineThickness: 4,

                            dataPoints: dataPoints
                        }
                    ]
                });
                graphics.render();
        };


        $scope.getDoughnutCharts =function(id, dataPoints) {

            var doughnutChart = new CanvasJS.Chart(id,
                {
                    colorSet: "doughnutChartColors",
                    animationEnabled: true,
                    animationDuration: 1000,
                    interactivityEnabled: false,

                    toolTip: {
                        enabled: false
                    },
                    legend: {
                        fontSize: 12,
                        horizontalAlign: "right", // left, center ,right
                        verticalAlign: "center"  // top, center, bottom
                    },

                    data: [
                        {
                            type: "doughnut",
                            legendMarkerType: "square",
                            showInLegend: true,
                            dataPoints: dataPoints
                        }
                    ]
                });
            doughnutChart.render();
        };

        $scope.barChart = new CanvasJS.Chart("barCartContainer", {
            colorSet: "barChartColors",
            animationEnabled: true,
            animationDuration: 1000,
            dataPointWidth: 5,
            axisX:{
                gridThickness: 0,
                lineThickness: 0,
                maximum: 180,
                tickThickness: 0,
                labelFormatter: function ( e ) {
                    return '';
                }
            },
            axisY:{
                gridThickness: 0,
                lineThickness: 0,
                maximum: 130,
                tickThickness: 0,
                labelFormatter: function ( e ) {
                    return '';
                }
            },
            toolTip:{
                enabled: false
            },

            data: [

                {
                    type: "stackedBar",
                    lineThickness: 10,
                    dataPoints: [
                        { x: 0, y: 30},
                        { x: 40, y: 50},
                        { x: 80, y: 60 },
                        { x: 120, y: 70},
                        { x: 160, y: 75}
                    ]
                },
                {
                    type: "stackedBar",
                    lineThickness: 10,
                    dataPoints: [
                        { x: 0, y: 10},
                        { x: 20, y: 0},
                        { x: 40, y: 20},
                        { x: 60, y: 0},
                        { x: 80, y: 25 },
                        { x: 100, y: 0 },
                        { x: 120, y: 30},
                        { x: 140, y: 0},
                        { x: 160, y: 35}
                    ]
                }
            ]
        });

        $scope.barChart.render();



        //$scope.clickOnUpload = function ($event) {
        //    $event.stopPropagation();
        //
        //    $timeout(function() {
        //        angular.element('.graphic-item_wrap').triggerHandler('click');
        //    }, 100);
        //};





    }]);


