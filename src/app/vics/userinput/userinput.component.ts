// userinput.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiVisitService } from 'src/app/service/api-visit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {
  visitorInfo = {
    Firstname: '',
    Middlename: '',
    Lastname: '',
    Suffix: '',
    Position: '',
    Agency: '',
    Purpose: '',
    Specificpurpose: '',
    DateTime: '',
    CertificateNeeded: '',
  };

  loading = false;
  error = '';
  successMessage = '';
  submitting = false;
  showCertificateModal = false;
  showReviewModal = false;
  submissionStatus: '' | 'processing' | 'success' | 'error' = '';
  submissionSuccess = false;

  constructor(
    private ApiVisitService: ApiVisitService,
    private router: Router
  ) {
    const now = new Date();
    this.visitorInfo.DateTime = now.toISOString();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.visitorInfo) return;

    this.submitting = true;
    this.error = '';
    this.successMessage = '';

    const uppercasedVisitorInfo = this.uppercaseSelectedFields(this.visitorInfo);
    
    this.ApiVisitService.saveVisitorInfo(uppercasedVisitorInfo).subscribe({
      next: (response) => {
        this.submissionSuccess = true;
        this.successMessage = 'Visitor information saved successfully!';
        this.submitting = false;
        this.showCertificateModal = false;
        this.showReviewModal = false;
      },
      error: (err) => {
        this.submissionSuccess = false;
        this.error = err.message || 'There was an error saving your information. Please try again.';
        this.submitting = false;
        this.showCertificateModal = false;
        this.showReviewModal = false;
      }
    });
  }

  uppercaseSelectedFields(info: any) {
    return {
      ...info,
      Firstname: info.Firstname?.toUpperCase() || '',
      Middlename: info.Middlename?.toUpperCase() || '',
      Lastname: info.Lastname?.toUpperCase() || '',
      Suffix: info.Suffix?.toUpperCase() || '',
      Agency: info.Agency?.toUpperCase() || '',
      Position: info.Position?.toUpperCase() || '',
      Specificpurpose: info.Specificpurpose?.toUpperCase() || '',
    };
  }

  handleSuffixChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    if (select.value === 'null') {
      this.visitorInfo.Suffix = ' ';
    }
  }

  // In your component class
getDisplayData() {
  return this.uppercaseSelectedFields(this.visitorInfo);
}

 // In your component
reviewData: any;

openReviewModal() {
  if (this.isFormValid()) {
    this.reviewData = this.uppercaseSelectedFields(this.visitorInfo);
    this.showReviewModal = true;
  }
}


  isFormValid(): boolean {
  // Check required fields and return boolean directly
  return !!(
    this.visitorInfo.Firstname && 
    this.visitorInfo.Lastname && 
    this.visitorInfo.Position && 
    this.visitorInfo.Agency && 
    this.visitorInfo.Purpose &&
    (this.visitorInfo.Purpose !== 'OTHER' || this.visitorInfo.Specificpurpose)
  );
}

  confirmSubmit() {
    this.showReviewModal = false;
    this.showCertificateModal = true;
  }

  editDetails() {
    this.showReviewModal = false;
  }

  confirmCertificate(needsCertificate: boolean) {
    this.visitorInfo.CertificateNeeded = needsCertificate ? 'Yes' : 'No';
    this.showCertificateModal = false;
    
    // Show processing state
    this.submissionStatus = 'processing';
    this.submitting = true;

    this.onSubmit();

    setTimeout(() => {
      if (this.submissionSuccess) {
        this.submissionStatus = 'success';
        
        setTimeout(() => {
          this.router.navigate(['/completion-page']);
        }, 2000);
      } else {
        this.submissionStatus = 'error';
        this.submitting = false;
        
        setTimeout(() => {
          this.submissionStatus = '';
        }, 5000);
      }
    }, 3000);
  }

  cancelSubmit() {
    this.showCertificateModal = false;
  }

  confirmBack() {
    const confirmed = confirm("Are you sure you want to go back? Your input will be lost.");
    if (confirmed) {
      this.router.navigate(['/welcomepage']);
    }
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