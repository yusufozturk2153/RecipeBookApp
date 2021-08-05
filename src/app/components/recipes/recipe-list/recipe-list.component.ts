import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    { name: "Test Name", description: "Test Description", imagePath: "https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?output-format=auto&output-quality=auto" },
    { name: "Test Name 2", description: "Test Description 2", imagePath: "https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg" }
  ];

  ngOnInit(): void {
  }

}
