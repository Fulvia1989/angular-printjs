import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintjsComponent } from './printjs/printjs.component';
import { HtmlComponent } from './printjs/html/html.component';
import { JsonComponent } from './printjs/json/json.component';
import { ImageComponent } from './printjs/image/image.component';

const routes: Routes = [
  {path:'', redirectTo: 'printjs/html', pathMatch:'full'},
  {path: 'printjs', 
  component:PrintjsComponent,
  children:[
    {path:'html', component:HtmlComponent},
    {path:'json',component:JsonComponent},
    {path:'image',component:ImageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
