import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule],
  declarations: [NavComponent, HeaderComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent], 
  exports: [NavComponent, HeaderComponent, ProjectsComponent, AboutComponent, FooterComponent]
})
export class ComponentsModule { }




