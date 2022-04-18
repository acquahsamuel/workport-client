import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './shared/services/interceptors/jwt.interceptor';

/**
 * Refacotor for lazy loading
*/
import { AdminModule } from './modules/admin/admin.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminModule,
    UserAuthModule,
    DashboardModule,
    HomepageModule,
    EditorModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    {provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor ,multi : true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
