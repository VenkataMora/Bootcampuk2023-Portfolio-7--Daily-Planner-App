var dayEl=$('#currentDay');
var currenTime=dayjs().format('dddd, MMM D');
dayEl.text(currenTime);
var containerEl=$('.container');
var hours=[9,10,11,12,13,14,15,16,17];
function timeBlocks(){
for (var i = 0; i < hours.length; i++) {
        var hour=$("<div>").addClass("time-block row");
        hour.attr("data-hour",hours[i]);
        var hourcolumn=$("<div>").addClass("hour col-2");
        hourcolumn.text(dayjs().hour(hours[i]).format("hA"));
        var textAreacolumn = $("<textarea>").addClass("description col-8");
        var saveBtncolumn = $("<button>").addClass("saveBtn col-2");
        saveBtncolumn.append($("<i>").addClass("fas fa-save"));
        hour.append(hourcolumn, textAreacolumn, saveBtncolumn);
        containerEl.append(hour);
    }

}
timeBlocks();
function hourStyles(){
    var currentHour = dayjs().hour();
    $(".time-block").each(function() {
        var blockhour = parseInt($(this).attr("data-hour"));
        if (blockhour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
            }
            else if (blockhour === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
                }
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                    }


    });
}
hourStyles();
