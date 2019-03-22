// Core Dependencies
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutes } from './index.routing';

// Product module imported that has layouts for products 
import { ProductModule } from '../layouts/product/product.module';

// Components
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
	imports: [ CommonModule, ProductModule, SharedModule, RouterModule.forChild(IndexRoutes) ],
	declarations: [ IndexComponent, HeaderComponent,NavbarComponent ],
	schemas: [ NO_ERRORS_SCHEMA ],
	exports: [ NavbarComponent ],
	providers: []
})
export class IndexModule {}
