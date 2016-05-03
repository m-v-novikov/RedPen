'use stricte';

/*Controllers*/

var manePageControllers = angular.module('manePageControllers', ["ng-fusioncharts"]);

manePageControllers.controller('GreatingCtrl', ['$scope',
    function($scope){
        console.log("hello i'm ready");

        $scope.attrs = {
            "plotgradientcolor": "",
            "bgcolor": "FFFFFF",
            "showalternatehgridcolor": "0",
            "showcanvasborder": "0",
            "canvasborderalpha": "0",
            "canvasbordercolor": "CCCCCC",
            "canvasborderthickness": "1",
            "yaxismaxvalue": "50",
            "captionpadding": "10",
            "linethickness": "3",
            "yaxisvaluespadding": "5",
            "palettecolors": "#1b8b14",
            "labelDisplay": "none",
            "numDivLines": "0",
            "showLegend": "0",
            "showBorder": "0",
            "showYAxisValues": "0",
            "showXAxisValues": "0",
            "showPercentageInLabel": "0",
            "enableSmartLabels": "0",
            "showLabels": "0",
            "showValues": "0"
        };

        $scope.diagrams = {
            "numPartner": {
                "width": "small",
                "diagram-type": "graphic",
                "title": "Количество участников",
                "commonQuantity": "1 789 587",
                "measure": "часов",
                "categories" :[
                    {
                        "category": [
                            {
                                "label": "startGraph"
                            },
                            {
                                "label": "firstSection"
                            },
                            {
                                "label": "secondSection"
                            },
                            {
                                "label": "thirdSection"
                            },
                            {
                                "label": "endGraph"
                            }
                        ]
                    }
                ],
                "dataset" :[
                    {
                        "data": [
                            {
                                "value": "10"
                            },
                            {
                                "value": "20"
                            },
                            {
                                "value": "20"
                            },
                            {
                                "value": "30"
                            },
                            {
                                "value": "35"
                            }
                        ]
                    }
                ]

            },
            "numUnWorkTime": {
                "width": "small",
                "diagram-type": "graphic",
                "title": "Количество нерабочего времени",
                "commonQuantity": "2 987 736",
                "measure": "часов",
                "categories" :[
                    {
                        "category": [
                            {
                                "label": "startGraph"
                            },
                            {
                                "label": "firstSection"
                            },
                            {
                                "label": "secondSection"
                            },
                            {
                                "label": "thirdSection"
                            },
                            {
                                "label": "endGraph"
                            }
                        ]
                    }
                ],
                "dataset" :[
                    {
                        "data": [
                            {
                                "value": "10"
                            },
                            {
                                "value": "20"
                            },
                            {
                                "value": "20"
                            },
                            {
                                "value": "30"
                            },
                            {
                                "value": "35"
                            }
                        ]
                    }
                ]

            }
        }
    }]);