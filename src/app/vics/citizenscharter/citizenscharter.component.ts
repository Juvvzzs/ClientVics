import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PdfservicesService } from 'src/app/service/pdfservices.service';
import { SafeurlPipe } from 'src/app/pipe/safeurl.pipe';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-citizenscharter',
  templateUrl: './citizenscharter.component.html',
  styleUrls: ['./citizenscharter.component.css'],
  imports: [
    SafeurlPipe,
    FormsModule,
    RouterModule,
    NgIf
  ]
})

export class CitizenscharterComponent implements OnInit, OnDestroy {
  pdfSrc: string | null = null;
  selectedOffice: string | null = null;
  private subscription: Subscription | null = null;
  iframeKey = 0;
  showIframe = false;

  private routeSubscription?: Subscription;
  private selectionSubscription?: Subscription;

  constructor(
    private router: Router,
    private pdfService: PdfservicesService
  ) {}

  ngOnInit(): void {

     this.subscription = this.pdfService.selection$.subscribe(selection => {
    if (selection !== null) {
      this.selectedOffice = selection.name;
      this.setPdfPage(selection.page);
    }
  });

    setTimeout(() => this.resetPdf(2), 0);

    this.selectionSubscription = this.pdfService.selection$.subscribe(selection => {
      if (selection !== null) {
        this.selectedOffice = selection.name;
        this.resetPdf(selection.page);
      }
    });

    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if ((event as NavigationEnd).urlAfterRedirects.includes('/citizenscharter')) {
          this.resetPdf(1);
        }
      });
  }

resetPdf(page: number): void {
  this.showIframe = false;
  this.pdfSrc = null;

  setTimeout(() => {
    this.pdfSrc = `assets/pdf/CITIZEN CHARTER.pdf#page=${page}&zoom=64&t=${Date.now()}`;
    this.showIframe = true;
  }, 100);
}

setPdfPage(page: number): void {
  this.showIframe = false;
  this.pdfSrc = null;

  setTimeout(() => {
    this.pdfSrc = `assets/pdf/CITIZEN CHARTER.pdf#page=${page}&zoom=64&t=${Date.now()}`;
    this.showIframe = true;
  }, 100);
}

  ngOnDestroy(): void {
    this.selectionSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }
}
