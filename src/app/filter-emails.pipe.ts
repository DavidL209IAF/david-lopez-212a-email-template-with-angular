import { Pipe, PipeTransform } from '@angular/core';
import { Email } from './emails/emails.model';

@Pipe({
  name: 'filterEmails',
  pure: false
})
export class FilterEmailsPipe implements PipeTransform {

  transform(emails: Email[], currentMenuItem: string): Email[] {
    return emails.filter(email => email.emailStatus === currentMenuItem);
  }

}
