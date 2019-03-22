/**
 * Main routing of the application 
 */
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
// import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: './index/index.module#IndexModule'
			},
			{
				path: 'products',
				loadChildren: './layouts/product/product.module#ProductModule'
			}
			
		]
	},
	// { path: 'no-access', component: NoAccessComponent },
	{ path: '**', component: PageNotFoundComponent }
];
