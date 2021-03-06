import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

	private stocks:Array<Stock>;

	constructor(public router:Router) {

	}

    

	ngOnInit() { // 頁面初始化時被調用
		this.stocks = [
			new Stock(1,"第一支股票",1.8,3.0,"这是第一支股票",["IT","互联网"]),
			new Stock(2,"第二支股票",1.7,4.5,"这是第二支股票",["IT","互联网"]),
			new Stock(3,"第三支股票",1.6,5.5,"这是第三支股票",["IT","互联网"]),
			new Stock(4,"第四支股票",1.9,3.8,"这是第四支股票",["IT","互联网"]),
			new Stock(5,"第五支股票",1.4,7.5,"这是第五支股票",["IT","互联网"]),
			new Stock(6,"第六支股票",1.5,4.8,"这是第六支股票",["IT","互联网"])
		];
	}

	create(){
		this.router.navigateByUrl('/stock/0')
	}
	update(stock:Stock){
		this.router.navigateByUrl('/stock/' + stock.id)
	}

}

export class Stock {
    constructor(
		public id :number, // id
		public name:string, // 名称 
		public price:number, // 价格
		public rating:number, // 评级
		public desc:string, // 描述
		public categories:Array<string>){
        
    }
}