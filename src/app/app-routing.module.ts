import { AboutComponent } from './about/about.component';
import { DespensaComponent } from './despensa/despensa.component';
import { RefrigeradosComponent } from './refrigerados/refrigerados.component';
import { CanastaComponent } from './canasta/canasta.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
	component: AboutComponent,
	path: "about",
},{
	component: DespensaComponent,
	path: "despensa",
},{
	component: RefrigeradosComponent,
	path: "refrigerados",
},{
	component: CanastaComponent,
	path: "canasta",
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
