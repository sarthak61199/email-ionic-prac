import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) { }

  email = {
    to: 'demo@demo.com',
    subject: 'TestMail',
    body: 'This is a test mail',
    isHtml: true
  }

  OpenEmailComposer() {
    this.emailComposer.open(this.email);
  }

}
