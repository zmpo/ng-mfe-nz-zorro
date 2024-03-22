import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, RouterOutlet } from "@angular/router";
/** 导入需要使用的 Angular 语言包 **/
import { CommonModule, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

/** 配置 ng-zorro-antd 国际化 **/
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
// import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
      RouterOutlet, RouterModule.forRoot(routes), CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
  ],
  providers: [
      provideNzI18n(en_US)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('#########1324', zh);
        
    }
}
  