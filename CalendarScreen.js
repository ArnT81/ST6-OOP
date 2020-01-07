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
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    week.forEach(element => {
      let myDay = document.createElement('div');
      this.element.appendChild(myDay);
      //myDay.innerHTML = dayRef[i] + '<br>' + date + '/' + month;
      myDay.className = 'myDay';
    })
  }
}


//(i = 0; i < dayRef.length; date++ , i++) {