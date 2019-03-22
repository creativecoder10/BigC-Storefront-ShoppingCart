import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { ProductModule } from './layouts/product/product.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/* to load and set en.json as the default application language */
// export function setupTranslateFactory(): Function {
// 	return () => service.use('en');
// }

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IndexModule,
		FormsModule,
		ProductModule,
		SharedModule,
		RouterModule.forRoot(AppRoutes),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		
	],
	bootstrap: [ AppComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
