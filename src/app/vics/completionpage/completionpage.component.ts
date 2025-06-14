import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-completionpage',
  templateUrl: './completionpage.component.html',
  styleUrls: ['./completionpage.component.css']
})
export class CompletionpageComponent implements OnInit {

  state: 'processing' | 'complete' = 'processing';
  withCertificate: boolean = false;

  ngOnInit(): void {
   
    setTimeout(() => {
      this.state = 'complete';
    }, 2000);
  }
}
