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
                hAlign: 'right',
                height: '180px',
                width: '90%',
                minBlockWidth: 0,
                dataPoints: [
                    {y: 100, name: 10 + '% Клиентоориентированность'},
                    {y: 250, name: 25 + '% Гидроразрывы'},
                    {y: 70, name: 7 + '% Надежность'},
                    {y: 30, name: 3 + '% Снижение затрат и рост продаж'},
                    {y: 300, name: 30 + '% Рост нефтедобычы'},
                    {y: 210, name: 21 + '% Производительность и эффективность'}
                ]
            },
            sexParties : {
                title: 'Пол участников',
                id: 'sexParties',
                vAlign: 'bottom',
                minBlockWidth: 1,
                dataPoints: [
                    {y: 850, name: 85 + '% ' + "мужчин"},
                    {y: 150, name: 15 + '% ' + "женщин"}
                ]
            },
            ageParties : {
                title: 'Возраст участников',
                id: 'ageParties',
                hAlign: 'right',
                minBlockWidth: 0,
                dataPoints: [
                    {y: 550, name: 55 + '% ' + "до 40 лет"},
                    {y: 450, name: 45 + '% ' + "после 40 лет"}
                ]
            }
        };
        $scope.barDiagrams =
        {
            categoryPosition : {
                title: 'Категория должности',
                id: 'categoryPosition',
                height: '130px',
                minBlockWidth: 0,
                dataPoints: [
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        dataPoints: [
                            { y: 30, label: "Геофизик-интерпретатор"},
                            { y: 50, label: "Дефектоскопист по контролю"},
                            { y: 60, label: "Супервайзер по бурению" },
                            { y: 70, label: "Менеджер технологических насосов"},
                            { y: 75, label: "Лаборант химического анализа"}
                        ]
                    },
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        dataPoints: [
                            { y: 10, label: "Геофизик-интерпретатор"},
                            { y: 20, label: "Дефектоскопист по контролю"},
                            { y: 25, label: "Супервайзер по бурению" },
                            { y: 30, label: "Менеджер технологических насосов"},
                            { y: 35, label: "Лаборант химического анализа"}
                        ]
                    }
                ]
            },
            distributionStructure : {
                title: 'Распределение по функциональной структуре',
                id: 'distributionStructure',
                height: '500px',
                minBlockWidth: 0,
                dataPoints: [
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        dataPoints: [
                            { y: 30, label: "Балтийский НПЗ"},
                            { y: 50, label: "Байкальский НПЗ"},
                            { y: 60, label: "Волго-Вятский НПЗ" },
                            { y: 70, label: "Дальневосточный НПЗ"},
                            { y: 75, label: "Западно-Сибирский НПЗ"},
                            { y: 30, label: "Западно-Уральский НПЗ"},
                            { y: 50, label: "Московский НПЗ"},
                            { y: 60, label: "Поволжский НПЗ" },
                            { y: 70, label: "Северный НПЗ"},
                            { y: 75, label: "Северо-Западный НПЗ"},
                            { y: 50, label: "Сибирский НПЗ"},
                            { y: 60, label: "Среднерусский НПЗ" },
                            { y: 70, label: "Уральский НПЗ"},
                            { y: 75, label: "Центрально-Черноземный НПЗ"},
                            { y: 50, label: "Юго-Западный НПЗ"},
                            { y: 60, label: "ДБО НПЗ" },
                            { y: 70, label: "ДМО НПЗ"},
                            { y: 75, label: "ППЗ НПЗ"}
                        ]
                    },
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        showInLegend: true,
                        legendText: "Прирост за 3 месяца",
                        dataPoints: [
                            { y: 10, label: "Балтийский НПЗ"},
                            { y: 20, label: "Байкальский НПЗ"},
                            { y: 25, label: "Волго-Вятский НПЗ" },
                            { y: 30, label: "Дальневосточный НПЗ"},
                            { y: 35, label: "Западно-Сибирский НПЗ"},
                            { y: 25, label: "Западно-Уральский НПЗ"},
                            { y: 20, label: "Московский НПЗ"},
                            { y: 30, label: "Поволжский НПЗ" },
                            { y: 20, label: "Северный НПЗ"},
                            { y: 10, label: "Северо-Западный НПЗ"},
                            { y: 20, label: "Сибирский НПЗ"},
                            { y: 20, label: "Среднерусский НПЗ" },
                            { y: 20, label: "Уральский НПЗ"},
                            { y: 30, label: "Центрально-Черноземный НПЗ"},
                            { y: 15, label: "Юго-Западный НПЗ"},
                            { y: 20, label: "ДБО НПЗ" },
                            { y: 25, label: "ДМО НПЗ"},
                            { y: 15, label: "ППЗ НПЗ"}
                        ]
                    }
                ]
            },
            topOffices : {
                title: 'ТОП отделений',
                id: 'topOffices',
                height: '250px',
                minBlockWidth: 0,
                dataPoints: [
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        dataPoints: [
                            { y: 30, label: "Республика Татарстан"},
                            { y: 50, label: "Республика Карелия"},
                            { y: 60, label: "Республика Карачаево-Черкесия" },
                            { y: 70, label: "Республика Дагестан"},
                            { y: 75, label: "Ханты-Мансийский автономный округ"},
                            { y: 30, label: "Чукотский автономный округ"},
                            { y: 50, label: "Тверская область"},
                            { y: 60, label: "Томская область" },
                            { y: 70, label: "Тульская область"},
                            { y: 75, label: "Тюменская область"}
                        ]
                    },
                    {
                        type: "stackedBar",
                        lineThickness: 10,
                        showInLegend: true,
                        legendText: "Прирост за 3 месяца",
                        markerMargin: 10,
                        dataPoints: [
                            { y: 10, label: "Республика Татарстан"},
                            { y: 20, label: "Республика Карелия"},
                            { y: 25, label: "Республика Карачаево-Черкесия" },
                            { y: 30, label: "Республика Дагестан"},
                            { y: 35, label: "Ханты-Мансийский автономный округ"},
                            { y: 10, label: "Чукотский автономный округ"},
                            { y: 20, label: "Тверская область"},
                            { y: 25, label: "Томская область" },
                            { y: 30, label: "Тульская область"},
                            { y: 35, label: "Тюменская область"}
                        ]
                    }
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
                "#00b393"

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
                        margin: 0,
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


        $scope.getDoughnutCharts =function(id, dataPoints, hAlign, vAlign ) {

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
                        horizontalAlign: hAlign || 'center', // left, center ,right
                        verticalAlign: vAlign  || 'center'// top, center, bottom
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

        $scope.getBarCharts =function(id, dataPoints){
            var barChart = new CanvasJS.Chart(id, {
                colorSet: "barChartColors",
                interactivityEnabled: false,
                animationEnabled: true,
                animationDuration: 1000,
                dataPointWidth: 5,
                axisX:{
                    labelFontSize: 13,
                    labelFontColor: "#5c5c5c",
                    gridThickness: 0,
                    lineThickness: 0,
                    tickThickness: 0,
                    interval: 1,

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
                legend: {
                    fontSize: 12,
                    fontFamily: "robotoregular",
                    markerMargin: 10, //not work needed fix it in canvas.js
                    fontColor: "#5c5c5c"
                },

                data: dataPoints
            });
            barChart.render();

        };

        //$scope.clickOnUpload = function ($event) {
        //    $event.stopPropagation();
        //
        //    $timeout(function() {
        //        angular.element('.graphic-item_wrap').triggerHandler('click');
        //    }, 100);
        //};
    }]);


