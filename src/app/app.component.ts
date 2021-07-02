
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from './emails/emails.model';
import { EmailListService } from './services/emailList.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailListService]
})
export class AppComponent implements OnInit {

  currentMenuItem = 'Inbox'; //default is Inbox
  emails: Email[] = [];
  emailBeingAdded: boolean = false;


  setMenuItem(event:any, item: string){
    this.currentMenuItem = item;
  }

  getMenuItem(){
    return this.currentMenuItem;
  }

  onAddEmail(){
    this.emailBeingAdded = true;
  }

  onCancelEmail(){
    this.emailBeingAdded = false;
  }

  constructor(private emailService: EmailListService){
  }

  ngOnInit(){
    this.emails = this.emailService.emails;
  }

}
