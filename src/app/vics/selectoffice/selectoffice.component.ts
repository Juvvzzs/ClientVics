import { Component } from '@angular/core';
import { NavbarComponent } from '../vics_layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    FormsModule
  ],
  selector: 'app-selectoffice',
  templateUrl: './selectoffice.component.html',
  styleUrls: ['./selectoffice.component.css']

})
export class SelectofficeComponent {

 searchText: string = '';

  currentPage = 1;
  pageSize = 8;
  selectedOfficeId: number | null = null;

 offices: { id: number; name: string }[] = [
  { id: 0,  name: 'Provincial Gorvernment Office'},
  { id: 1,  name: 'Provincial Government Office - Internal Audit Services Division (PGO-IASD' },
  { id: 2,  name: "Provicial Governor's Offince - Provincial Disability Affairs Division (PGO - PDAD)" },
  { id: 3,  name: 'Provincial Administrator’s Office - Administrative Division (PADO - Admin)' },
  { id: 4,  name: 'Provincial Rehabilitation Center – Provincial Rehabilitation Center (PADO-PRC)' },
  { id: 5,  name: 'Provincial Administrator’s Office – Information Technology Division (PADO-ITD)' },
  { id: 6,  name: 'Provincial Administrator’s Office - Cooperative Development Division (PADO-CDD)' },
  { id: 7,  name: 'Provincial Administrator’s Office - Local Economic Development and Investment Promotions Division (PADO-LEDIPD)' },
  { id: 8,  name: 'Provincial Administrator’s Office - Employment and Workforce Development Division (PADO-EWDD)' },
  { id: 9,  name: 'Provincial Administrator’s Office - Tourism Division (TD)' },
  { id: 10, name: 'Provincial Administrator’s Office – Special Programs and Project Division (SPPD)' },
  { id: 11, name: 'Provincial Human Resource Management Office (PHRMO)' },
  { id: 12, name: 'Provincial Information, Communication and Knowledge Management Office (PICKMO)' },
  { id: 13, name: 'Provincial Planning and Development Office (PPDO)' },
  { id: 14, name: 'Provincial General Services Office (PGSO)' },
  { id: 15, name: 'Provincial Budget Office (PBO)' },
  { id: 16, name: "Provincial Accountant's Office (PACCO)" },
  { id: 17, name: 'Provincial Legal Office (PLO)' },
  { id: 18, name: "Provincial Treasurer's Office (PTO)" },
  { id: 19, name: "Provincial Assessor's Office (PASSO)" },
  { id: 20, name: 'Provincial Health Office (PHO)' },
  { id: 21, name: 'Provincial Health Office - Luntiang Paraiso Regional Rehabilitation Center (PHO – LPRRC)' },
  { id: 22, name: 'Provincial Social Welfare and Development Office (PSWDO)' },
  { id: 23, name: "Provincial Agriculturist's Office (PAGRO)" },
  { id: 24, name: "Provincial Veterinarian's Office (PVO)" },
  { id: 25, name: 'Provincial Environment and Natural Resources Office (PENRO)' },
  { id: 26, name: "Provincial Engineer's Office (PEO)" },
  { id: 27, name: 'Provincial Economic Enterprise Development Office (PEEDO)' },
  { id: 28, name: 'PEEDO Davao del Norte Hospital (Kapalong Zone)' },
  { id: 29, name: 'PEEDO Davao del Norte Hospital (Carmen Zone)' },
  { id: 30, name: 'PEEDO Davao del Norte Hospital (IGACOS Zone)' },
  { id: 31, name: 'Provincial Sports and Youth Development Office (PSYDO)' },
  { id: 32, name: 'Provincial Disaster Risk Reduction and Management Office (PDRRMO)' },
  { id: 33, name: "Vice-Governor's Office (VGO)" },
  { id: 34, name: 'Sangguniang Panlalawigan Office (SPO)' },
  { id: 35, name: 'Office of the Secretary to the Sanggunian (OSS)' },
];

  get pagedOffices() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredOffices.length / this.pageSize);
  }

  selectOffice(officeId: number) {
    this.selectedOfficeId = officeId;
   
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  backPage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }

  // This will filter the displayed list in real-time
    get filteredOffices() {
      const search = this.searchText.toLowerCase();
      return this.offices.filter(office =>
      office.name.toLowerCase().includes(search)
  );
}
}
