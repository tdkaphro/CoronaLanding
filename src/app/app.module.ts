import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LandingComponent } from "./application/tickets/landing/landing.component";
import { TicketsComponent } from "./application/tickets/tickets/tickets.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddTicketComponent } from "./application/tickets/add-ticket/add-ticket.component";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { AddInformationsComponent } from "./application/tickets/add-informations/add-informations.component";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    LandingComponent,
    AddTicketComponent,
    HeaderComponent,
    AddInformationsComponent
  ],
  imports: [
    MatFormFieldModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserModule,
    MatInputModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
