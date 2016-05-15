$(document).ready(function(){
    //console.log($('.graphic-item_wrap').length);
    $('.graphic-item_wrap').click();

    var chartsBlockWidth = $('.graphics').length;
    //console.log(chartsBlockWidth);
    $('.graphics').masonry({
        // options...
        itemSelector: '.graphic-item',
        columnWidth: chartsBlockWidth/2
    });

    var activityMapChar = {
        "RU-TA"  : "10000",
        "RU-TYU" : "20000",
        "RU-ULY"  : "15000",
        "RU-YAR" : "8000",
        "RU-SPE"  : "9000",
        "RU-KO"  : "12000",
        "RU-KR"  : "14000",
        "RU-KYA"  : "18000",
        "RU-SA"  : "10000",
        "RU-TOM" : "22000",
        "RU-TUL"  : "11000",
        "RU-SMO" : "50000"
    };

    $.ajax({url: "./../svg/russiaLow.svg", success: function(result){
        console.log('ajax svg success!');
        var div = document.getElementById("rusMap");
        div.innerHTML = new XMLSerializer().serializeToString(result.documentElement);

        var land = $('.land');
        //console.log(land, land.length);
        for(var i = 0 ; i < land.length; i++){
            var id = land[i].id,
                activityQuantity = (activityMapChar[id] != undefined) ? parseInt(activityMapChar[id], 10) : 0;
            //console.log(id, $('#' + id));
            if(activityMapChar[id] != undefined && activityMapChar[id].length){
                console.log(activityQuantity);
                if(activityQuantity > 100 && activityQuantity <= 7000){
                    $('#' + id).attr('class', 'land units7000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 7000 && activityQuantity <= 8000){
                    $('#' + id).attr('class', 'land units8000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 8000 && activityQuantity <= 9000){
                    $('#' + id).attr('class', 'land units9000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 9000 && activityQuantity <= 10000){
                    $('#' + id).attr('class', 'land units10000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 10000 && activityQuantity <= 11000){
                    $('#' + id).attr('class', 'land unit11000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 11000 && activityQuantity <= 12000){
                    $('#' + id).attr('class', 'land units12000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 12000 && activityQuantity <= 15000){
                    $('#' + id).attr('class', 'land units15000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 15000 && activityQuantity <= 18000){
                    $('#' + id).attr('class', 'land units18000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 18000 && activityQuantity <= 20000){
                    $('#' + id).attr('class', 'land units20000');
                    $('#' + id).attr('data-activity', i);
                }else if(activityQuantity > 20000){
                    $('#' + id).attr('class', 'land units22500');
                    $('#' + id).attr('data-activity', i);
                }
            }else{
                $('#' + id).attr('class', 'land units100');
                $('#' + id).attr('data-activity', i);
            }
            //$(land[i]).attr(i, 'data-activity');
        }
    }});



});