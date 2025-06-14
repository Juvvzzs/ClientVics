import { Component } from '@angular/core';
import { PdfservicesService } from 'src/app/service/pdfservices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
constructor(private PdfservicesService: PdfservicesService) {}

  searchText: string = '';
  selectedOfficeName: string = '';
  private subscription: Subscription | undefined;

  offices: { name: string, page: number }[] = [
    
    { name: 'List of Offices, Address and Contact Information', page: 585},
    { name: 'Provincial Government Office (PGO)', page: 14 },
    { name: 'Provincial Government Office - Internal Audit Services Division (PGO - IASD)', page: 23 },
    { name: "Provicial Governor's Offince - Provincial Disability Affairs Division (PGO - PDAD)", page: 33 },
    { name: 'Provincial Administrator’s Office - Administrative Division (PADO - Admin)', page: 39 },
    { name: 'Provincial Rehabilitation Center – Provincial Rehabilitation Center (PADO-PRC)', page: 50 },
    { name: 'Provincial Administrator’s Office – Information Technology Division (PADO-ITD)', page: 57 },
    { name: 'Provincial Administrator’s Office - Cooperative Development Division (PADO-CDD)', page: 65 },
    { name: 'Provincial Administrator’s Office - Local Economic Development and Investment Promotions Division (PADO-LEDIPD)', page: 80 },
    { name: 'Provincial Administrator’s Office - Employment and Workforce Development Division (PADO-EWDD)', page: 89 },
    { name: 'Provincial Administrator’s Office - Tourism Division (TD)', page: 94 },
    { name: 'Provincial Administrator’s Office – Special Programs and Project Division (SPPD)', page: 103 },
    { name: 'Provincial Human Resource Management Office (PHRMO)', page: 106 },
    { name: 'Provincial Information, Communication and Knowledge Management Office (PICKMO)', page: 136 },
    { name: 'Provincial Planning and Development Office (PPDO)', page: 151 },
    { name: 'Provincial General Services Office (PGSO)', page: 157 },
    { name: 'Provincial Budget Office (PBO)', page: 183 },
    { name: "Provincial Accountant's Office (PACCO)", page: 194 },
    { name: 'Provincial Legal Office (PLO)', page: 198 },
    { name: "Provincial Treasurer's Office (PTO)", page: 210 },
    { name: "Provincial Assessor's Office (PASSO)", page: 238 },
    { name: 'Provincial Health Office (PHO)', page: 269 },
    { name: 'Provincial Health Office - Luntiang Paraiso Regional Rehabilitation Center (PHO – LPRRC)', page: 274 },
    { name: 'Provincial Social Welfare and Development Office (PSWDO)', page: 282 },
    { name: "Provincial Agriculturist's Office (PAGRO)", page: 314 },
    { name: "Provincial Veterinarian's Office (PVO)", page: 341 },
    { name: 'Provincial Environment and Natural Resources Office (PENRO)', page: 352 },
    { name: "Provincial Engineer's Office (PEO)", page: 393 },
    { name: 'Provincial Economic Enterprise Development Office (PEEDO)', page: 409 },
    { name: 'PEEDO Davao del Norte Hospital (Kapalong Zone)', page: 418 },
    { name: 'PEEDO Davao del Norte Hospital (Carmen Zone)', page: 459 },
    { name: 'PEEDO Davao del Norte Hospital (IGACOS Zone)', page: 488 },
    { name: 'Provincial Sports and Youth Development Office (PSYDO)', page: 526 },
    { name: 'Provincial Disaster Risk Reduction and Management Office (PDRRMO)', page: 548 },
    { name: "Vice-Governor's Office (VGO)", page: 570 },
    { name: 'Sangguniang Panlalawigan Office (SPO)', page: 576 },
    { name: 'Office of the Secretary to the Sanggunian (OSS)', page: 578  },
  ];

  onSelectOffice(page: number, name: string): void {
  this.PdfservicesService.setOfficeSelection(page, name);
  this.selectedOfficeName = name;
}
  // This will filter the displayed list in real-time
    get filteredOffices() {
      const search = this.searchText.toLowerCase();
      return this.offices.filter(office =>
      office.name.toLowerCase().includes(search)
  );
}
 ngOnInit(): void {
    this.subscription = this.PdfservicesService.selection$.subscribe(selection => {
      if (selection) {
        this.selectedOfficeName = selection.name;
      }
    });
  }
ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

