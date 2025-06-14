import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcompageComponent } from './vics/welcompage/welcompage.component';
import { SelectofficeComponent } from './vics/selectoffice/selectoffice.component';
import { CitizenscharterComponent } from './vics/citizenscharter/citizenscharter.component';
import { CompletionpageComponent } from './vics/completionpage/completionpage.component';
import { UserinputComponent } from './vics/userinput/userinput.component';
import { MainlayoutComponent } from './vics/vics_layout/mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcomepage', // Default route
    pathMatch: 'full'
  },
  {
    path: 'welcomepage',
    component: WelcompageComponent,
  },
  {
    path: 'visitors-charter', 
    component: MainlayoutComponent, 
    children: [
    {
      path: 'citizenscharter',component: CitizenscharterComponent}

    ]
  },
  {
    path: 'select-office',
    component: SelectofficeComponent 
  },
  {
    path: 'user-information',
    component: UserinputComponent 
  },
  {
    path: 'completion-page',
    component: CompletionpageComponent 
  },
  {
    path: '**',
    redirectTo: 'welcomepage' // Fallback for invalid routes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }