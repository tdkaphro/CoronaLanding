import { AddInformationsComponent } from './application/tickets/add-informations/add-informations.component';
import { AddTicketComponent } from './application/tickets/add-ticket/add-ticket.component';
import { TicketsComponent } from './application/tickets/tickets/tickets.component';
import { LandingComponent } from './application/tickets/landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tickets', component: TicketsComponent, data: { myData: "TEST" } },
  { path: 'addTicket', component: AddTicketComponent },
  { path: 'finishTicket', component: AddInformationsComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
