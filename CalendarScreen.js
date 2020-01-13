class CalendarScreen extends Screen {
  constructor() {
    super();
    this.header();
    // new GetTime();
    this.initTime();
    this.dayRef();
    this.monthRef();
    // this.show();
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

  initTime() {
    this.d = new Date();
    this.date = this.d.getDate(this.d.getDate()+1);
    // console.log(this.d);
    // console.log(this.date);
  }

  dayRef() {
    this.dayRef = new Array;
    this.dayRef[0] = 'Mon';
    this.dayRef[1] = 'Tue';
    this.dayRef[2] = 'Wed';
    this.dayRef[3] = 'Thu';
    this.dayRef[4] = 'Fri';
    this.dayRef[5] = 'Sat';
    this.dayRef[6] = 'Sun';
    this.day = this.dayRef[this.d.getDay()];
  }

  monthRef() {
    this.monthRef = new Array;
    this.monthRef[0] = '1';
    this.monthRef[1] = '2';
    this.monthRef[2] = '3';
    this.monthRef[3] = '4';
    this.monthRef[4] = '5';
    this.monthRef[5] = '6';
    this.monthRef[6] = '7';
    this.monthRef[7] = '8';
    this.monthRef[8] = '9';
    this.monthRef[9] = '10';
    this.monthRef[10] = '11';
    this.monthRef[11] = '12';
    this.month = this.monthRef[this.d.getMonth()];
  }

  // show() {
  //   this.show = this.day + '<br>' + this.date + '/' + this.month;
  //   // console.log(this.show);
  // }

  initCalendar() {
    for (var i = 0; i < this.dayRef.length; this.date++ , i++) {
      this.myDay = document.createElement('div');
      this.element.appendChild(this.myDay);
      this.myDay.innerHTML = this.dayRef[i] + '<br>' + this.date + '/' + this.month;
      this.myDay.className = 'myDay';
    }
  }
};