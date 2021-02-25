import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { GridclienteComponent } from './components/gridcliente/gridcliente.component';
import { HomeComponent } from './components/home/home.component';
import { ReporteComponent } from './components/reporte/reporte.component';


const routes: Routes = [
  {path:'cliente',component:ClienteComponent},
  {path:'cliente/:id',component:ClienteComponent},
  {path:'home',component:HomeComponent},
  {path:'gridcliente',component:GridclienteComponent},
  {path:'reporte',component:ReporteComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
