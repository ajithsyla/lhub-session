import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../tajrecipes.model';
@Component({
  selector: 'app-tajrecipe-list',
  templateUrl: './tajrecipe-list.component.html',
  styleUrls: ['./tajrecipe-list.component.css']
})
export class TajrecipeListComponent implements OnInit {
  tajrecipes : Recipe[] = [
    new Recipe('Crispy corn recipes', 
    'I love Crispy Corn which is deeply Fried. ', 
    'http://maayeka.com/wp-content/uploads/2015/07/Crispy-corn-kernals-1.jpg'),
    new Recipe('Crispy Chicken', 
    'Finger licking good is  KFC best caption ever  ', 
    'http://static.primecp.com/images/article_images_v2/89029/Crispy-Oven-fried-Drumsticks-OR.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
