export interface Email{

    emailPK: number;
    emailSubject: string;
    emailContent: string;
    emailTo: string;
    emailFrom: string;
    emailDateTime: string;
    emailStatus: string;  //"Inbox", "Trash", "Sent", "Drafts", "Important", "Tagged"
    emailContentPreview: string;

}