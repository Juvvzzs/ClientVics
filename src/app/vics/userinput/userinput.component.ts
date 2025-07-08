import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { NavbarComponent } from '../vics_layout/navbar/navbar.component';
import { FooterComponent } from '../vics_layout/footer/footer.component';
import { ApiVisitService } from 'src/app/service/api-visit.service';

interface VisitorInfo {
  Firstname: string;
  Middlename: string;
  Lastname: string;
  Suffix: string;
  Position: string;
  Agency: string;
  Purpose: string;
  Specificpurpose: string;
  DateTime: string;
  CertificateNeeded: string;
}

@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {

  visitorInfo: VisitorInfo = {
    Firstname: '',
    Middlename: '',
    Lastname: '',
    Suffix: '',
    Position: '',
    Agency: '',
    Purpose: '',
    Specificpurpose: '',
    DateTime: '',
    CertificateNeeded: ''
  };

  reviewData: VisitorInfo | null = null;

  loadingCertificate = false;
  loading = false;
  error = '';
  successMessage = '';
  submitting = false;
  submissionStatus: '' | 'processing' | 'success' | 'error' = '';
  submissionSuccess = false;
  showReviewModal = false;
  showCertificateModal = false;

  constructor(
    private apiVisitService: ApiVisitService,
    private router: Router
  ) {
    this.visitorInfo.DateTime = new Date().toISOString();
  }

  ngOnInit(): void { }

  // Final submission logic
  onSubmit(): void {
    if (!this.isFormValid()) return;

    this.submitting = true;
    this.error = '';

    // this.successMessage = '';

    const sanitizedData = this.sanitizeVisitorInfo(this.visitorInfo);

    this.apiVisitService.saveVisitorInfo(sanitizedData).subscribe({
      next: () => {
        this.submissionSuccess = true;
        this.successMessage = 'Visitor information saved successfully!';
        // this.resetModals();
      },
      error: (err) => {
        this.submissionSuccess = false;
        this.error = err.message || 'There was an error saving your information.';
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }

  // Capitalize selected fields
  private sanitizeVisitorInfo(info: VisitorInfo): VisitorInfo {
    return {
      ...info,
      Firstname: info.Firstname.toUpperCase(),
      Middlename: info.Middlename.toUpperCase(),
      Lastname: info.Lastname.toUpperCase(),
      Suffix: info.Suffix.toUpperCase(),
      Position: info.Position.toUpperCase(),
      Agency: info.Agency.toUpperCase(),
      Specificpurpose: info.Specificpurpose.toUpperCase()
    };
  }

  openReviewModal(): void {
    if (this.isFormValid()) {
      this.reviewData = this.sanitizeVisitorInfo(this.visitorInfo);
      this.showReviewModal = true;
    }
  }

  confirmSubmit(): void {
    this.showReviewModal = false;
    this.showCertificateModal = true;
  }

 confirmCertificate(needsCertificate: boolean): void {
  this.loadingCertificate = true;
  this.submitting = true;
  this.visitorInfo.CertificateNeeded = needsCertificate ? 'Yes' : 'No';

  const sanitizedData = this.sanitizeVisitorInfo(this.visitorInfo);

  this.apiVisitService.saveVisitorInfo(sanitizedData).subscribe({
    next: () => {
      this.successMessage = 'Visitor information saved successfully!';
      this.router.navigate(['/completion-page']).then(() => {
        this.showCertificateModal = false;
        this.loadingCertificate = false;
      });
    },
    error: (err) => {
      this.error = err.message || 'There was an error saving your information. Please try again.';
      this.loadingCertificate = false;
      this.submitting = false;
    }
  });
}

  cancelSubmit(): void {
    this.showCertificateModal = false;
  }

  editDetails(): void {
    this.showReviewModal = false;
  }

  confirmBack(): void {
    const confirmed = confirm("Are you sure you want to go back? Your input will be lost.");
    if (confirmed) {
      this.router.navigate(['/welcomepage']);
    }
  }

  isFormValid(): boolean {
    const info = this.visitorInfo;
    return !!(
      info.Firstname &&
      info.Lastname &&
      info.Position &&
      info.Agency &&
      info.Purpose &&
      (info.Purpose !== 'OTHER' || info.Specificpurpose)
    );
  }

  getDisplayData(): VisitorInfo {
    return this.sanitizeVisitorInfo(this.visitorInfo);
  }

  private resetModals(): void {
    this.showReviewModal = false;
    this.showCertificateModal = false;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const upperValue = input.value.toUpperCase();

    if (input.value !== upperValue) {
      requestAnimationFrame(() => {
        input.value = upperValue;
        input.setSelectionRange(start, end);
      });
    }
  }
}
