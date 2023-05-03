import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Details } from '../detail.model';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss']
})
export class CalendarModalComponent {
  allUserDetails:Details[] = [];
  indvDetails = new Details()
  showData = false;

  form = new UntypedFormGroup({
    dateMDY: new UntypedFormControl(new Date()),
    fromTime: new UntypedFormControl(),
    toTime: new UntypedFormControl()
  });

  get calendarControls() {
    return this.form.controls;
  }

  selectedDate() {
    console.log(this.form.value.dateMDY,'this.form.value.dateMDY')
  }

  onSubmit() {
    if (Number(this.form.value.dateMDY) && this.form.value.fromTime && this.form.value.toTime) { 
      let from = this.form.value.fromTime;
      let To = this.form.value.toTime;
      if(from?.split(':')[0] < To?.split(':')[0]) {
        // save user schedule
        let person = prompt("Please enter your name",'sample');
        if (person != null) {
          this.indvDetails.guestName = person;
        }
        const serviceTypeObj:Details = {
          guestName : String(person),
          guestFromDate: this.form.value.fromTime,
          guestToDate: this.form.value.toTime,
          guestSelectedDate: this.form.value.dateMDY,        
        };
        this.allUserDetails.push(serviceTypeObj)
        this.showData = true;
        this.form.reset();
      }  else {
        alert("invalid input")
      } 
   
    } else {
      alert("invalid input")
    }     
  }
}
