import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StartsComponent } from './starts/starts.component';

// 导航路由
import { Routes } from '@angular/router';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component'


const routerconfig: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // 路由重定向
	{path: 'dashboard', component: DashboardComponent}, // 主页
	{path: 'stock', component: StockManageComponent}, // 股票管理
	{path: 'stock/:id', component:StockFormComponent} //
]


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		SidebarComponent,
		FooterComponent,
		ContentComponent,
		StartsComponent,
		StockManageComponent,
		StockFormComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routerconfig) // 引入routerModule模块
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
