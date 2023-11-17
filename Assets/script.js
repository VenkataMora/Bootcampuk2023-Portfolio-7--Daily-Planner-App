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
