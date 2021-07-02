import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailListService } from '../services/emailList.service';
import { Email } from './emails.model';
import { MatSnackBar } from "@angular/material/snack-bar";
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css'],
})
export class EmailsComponent implements OnInit {

emails: Email[] = []; 
currentEmailPK: number = -1; //sets intial selected email primary key to -1 as none is clicked
emailDateTime: string = '';
toField: string = '';
fromField: string = '';
emailSubject: string = '';
emailContent: string ='';
@Input() currentMenuItemClicked: string = ''; 
@Input() emailBeingAdded: any; //boolean true our false based on if compose button clicked from parent
@Output() emailCancelTrigger = new EventEmitter(); //event to emit once cancel button is clicked

//properties for adding email
addToField: string = '';
addFromField: string = 'davidl@bayvalleytech.com';
addEmailSubject: string = '';
addEmailContent: string = '';

constructor(private emailsService: EmailListService, private snackBar: MatSnackBar){
}

 ngOnInit(): void {
  this.emails = this.emailsService.emails;
}

emailClicked(emailPK: number){
  this.currentEmailPK = emailPK;
  let index = this.emails.findIndex(email => email.emailPK === emailPK);
  this.fromField = 'From: ' + this.emails[index].emailFrom;
  this.toField = 'To: ' + this.emails[index].emailTo;
  this.emailSubject = this.emails[index].emailSubject;
  this.emailContent = this.emails[index].emailContent;
  this.emailDateTime = this.emails[index].emailDateTime;
}

closeEmail(){
  this.currentEmailPK = -1; //sets to -1 to unselect clicked email
}

cancelEmailAdd(){
  this.emailCancelTrigger.emit(false);
}

sendEmail(){
let dateTime: Date = new Date();
this.emailsService.addEmail(this.addEmailSubject, this.addEmailContent, this.addToField, this.addFromField, dateTime.toLocaleDateString())
this.addEmailSubject = '';
this.addEmailContent = '';
this.addToField = '';
this.addFromField = '';
this.snackBar.open("Email has been Sent.", "OK", {duration: 2000,
  panelClass: ['snackBar']});
}

removeEmail(){

  let index = this.emails.findIndex(email => email.emailPK === this.currentEmailPK);

  if(this.emails[index].emailStatus !== 'Trash' ){
  this.emailsService.updateEmailStatus(this.currentEmailPK, "Trash");
  this.snackBar.open("Email has been moved to Trash.", "OK", {duration: 2000,
    panelClass: ['snackBar']}); //move to trash
  } else if(this.emails[index].emailStatus === 'Trash' ){
    this.emailsService.deleteEmail(index)
    this.snackBar.open("Email has been permanently Deleted.", "OK", {duration: 2000,
    panelClass: ['snackBar']}); //move to trash
    }
  this.currentEmailPK = -1;
}


}