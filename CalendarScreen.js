class CalendarScreen extends Screen {
  constructor() {
    super();
    this.header();
    this.initCalendar();
  }

  header() {
    let myFormHeader = document.createElement('h3');
    this.element.appendChild(myFormHeader);
    myFormHeader.innerHTML = 'Calendar';
    myFormHeader.className = 'myHeader';

    let weekHead = document.createElement('h3');
    this.element.appendChild(weekHead);
    weekHead.innerHTML = '1 Week';
    weekHead.className = 'centerHeader';
  }

  initCalendar() {
/*  for (i = 0; i < dayRef.length; date++ , i++) {
       let myDay = document.createElement('div');
       completeWeek.appendChild(myDay);
       myDay.innerHTML = dayRef[i] + '<br>' + date + '/' + month;
       myDay.className = 'myDay';
     } */
  }
}


