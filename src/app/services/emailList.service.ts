import { Email } from "../emails/emails.model";

export class EmailListService{


emails: Email[] = [
    {
        emailPK: 0,
        emailSubject: 'LinkedIn', 
        emailContent: 'You have a new connection request. Please review this request to add John Doe.',
        emailTo: 'davidl@bayvalleytech.com', 
        emailFrom:'test@linkedin.com',
        emailDateTime: '6/27/2021',
        emailStatus: 'Inbox',
        emailContentPreview: 'You have a new connection request. Pl...'
    },

    {
        emailPK: 1,
        emailSubject: 'Gmail',
        emailContent: 'A new device has been detected on your most recent login. Please verify.',
        emailTo:'davidl@bayvalleytech.com',
        emailFrom: 'test@gmail.com',
        emailDateTime:'6/25/2021',
        emailStatus: 'Inbox',
        emailContentPreview: 'A new device has been detected on you...'
    },
    
    {
        emailPK: 2,
        emailSubject: 'Indeed',
        emailContent: 'New Job Suggestions. Modesto City Schools IT Manager.',
        emailTo: 'davidl@bayvalleytech.com', 
        emailFrom: 'test@indeed.com',
        emailDateTime: '7:59:09 PM',
        emailStatus: 'Inbox',
        emailContentPreview: 'New Job Suggestions. Modesto City Sch...'},
    
    {
        emailPK: 3,
        emailSubject: 'Best Buy',
        emailContent: '4th of July deals all month long! Huge Deals on laptops, desktops, monitors and printers!',
        emailTo: 'davidl@bayvalleytech.com', 
        emailFrom: 'promotions@bestbuy.com',
        emailDateTime: '7:59:09 PM',
        emailStatus: 'Trash',
        emailContentPreview: '4th of July deals all month long! Huge...'}
]

addEmail(subject: string, content:string, to: string, from: string, datetime:string){
    this.emails.push({emailPK: (this.emails[this.emails.length -1].emailPK) + 1,
        emailSubject: subject, emailContent: content, emailTo: to, 
        emailFrom: from, emailDateTime: datetime, emailStatus: 'Sent' ,
        emailContentPreview: content.substring(0,38) + '...'});
}

deleteEmail(emailPk: number){
    let index = this.emails.findIndex(email => email.emailPK === emailPk);
    this.emails.splice(index,1);
}

updateEmailStatus(emailPK: number, newStatus: string){
   let index = this.emails.findIndex(email => email.emailPK === emailPK);
this.emails[index].emailStatus = newStatus;
}

filterEmailList(status: string){
return this.emails.filter(email => email.emailStatus === status);
}

getEmailStatusLength(status: string){
    return this.emails.filter(email => email.emailStatus === status).length;
}

}