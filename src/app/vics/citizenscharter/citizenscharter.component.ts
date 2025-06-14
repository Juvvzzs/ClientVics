import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PdfservicesService } from 'src/app/service/pdfservices.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-citizenscharter',
  templateUrl: './citizenscharter.component.html',
  styleUrls: ['./citizenscharter.component.css'],


})
export class CitizenscharterComponent {
pdfSrc: string | null = null;
  private subscription: Subscription | undefined;

  constructor(private PdfservicesServices: PdfservicesService) {}

 selectedOffice: string | null = null;

    ngOnInit(): void {
      this.pdfSrc = `assets/pdf/CITIZEN CHARTER.pdf#page=1&zoom=64`;
  // this.pdfSrc = `assets/pdf/CITIZEN CHARTER.pdf#page=1&zoom=57`;
      this.subscription = this.PdfservicesServices.selection$.subscribe(selection => {
      if (selection !== null) {
      this.selectedOffice = selection.name;
    

      // reload
      this.pdfSrc = null;
      setTimeout(() => {
        this.pdfSrc = `assets/pdf/CITIZEN CHARTER.pdf#page=${selection.page}&t=${new Date().getTime()}&zoom=64`;
      }, 15);
    }
  });
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}