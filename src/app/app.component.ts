import { Component, ViewContainerRef } from '@angular/core';
import {AlarmService} from "../toolbox/alarm/alarm-service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private alarmStarted:boolean = false;
  private codePanelShown:boolean = false;

  constructor(private _alarmService:AlarmService, public toastr: ToastrService) {
  }


  startAlarm(){
    this._alarmService.startAlarm().subscribe(
      (res) => {
        this.showSuccess("Alarm Started.");
        this.alarmStarted = true;
        console.info("Alarm started");
      },
      (err) => {
        this.showError("Alarm Did Not Start.");
        console.error("Alarm failed", err);
      }
    );
  }

  stopAlarm(){
    this._alarmService.stopAlarm('1605').subscribe(
      (res) => {
        this.alarmStarted = false;
        this.showSuccess("Alarm Stopped.");
        this.codePanelShown = false;
        console.info("Alarm stopped");
      },
      (err) => {
        this.showError("Alarm Has Not Been Stopped.");
        console.error("Alarm failed", err);
      }
    );
    //TODO : remove the code from here when the keyboard is made for the touch screen
  }

  showCodePanel(){
    this.codePanelShown = true;
  }



  showSuccess(message) {
    this.toastr.success(message, 'Success!');
  }

  showError(message) {
    this.toastr.error(message, 'Oops!');
  }

  showWarning(message) {
    this.toastr.warning(message, 'Alert!');
  }

  showInfo(message) {
    this.toastr.info(message);
  }

}
