import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

	private stocks:Array<Stock>;

	constructor() { }

	ngOnInit() { // 頁面初始化時被調用
		this.stocks = [
			new Stock(1,"第一支股票",1.99,3.5,"这是第一支股票",["IT","互联网"]),
			new Stock(2,"第二支股票",1.99,3.5,"这是第二支股票",["IT","互联网"]),
			new Stock(3,"第三支股票",1.99,3.5,"这是第三支股票",["IT","互联网"]),
			new Stock(4,"第四支股票",1.99,3.5,"这是第四支股票",["IT","互联网"]),
			new Stock(5,"第五支股票",1.99,3.5,"这是第五支股票",["IT","互联网"]),
			new Stock(6,"第六支股票",1.99,3.5,"这是第六支股票",["IT","互联网"])
		];
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