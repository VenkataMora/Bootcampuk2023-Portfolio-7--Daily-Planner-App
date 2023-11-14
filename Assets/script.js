var displayEl= $('.display-3');
var leadEl=$('.lead');
var dayEl=$('#currentDay');

var currenTime=dayjs().format('dddd, MMM D');
dayEl.text(currenTime);
