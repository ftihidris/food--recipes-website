import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input()
  foodPageTags?:string[];
  tags?: Tag[];
  selectedTag: string | null = null;

  constructor(private foodService: FoodService) {}

  selectTag(tagName: string) {
    this.selectedTag = tagName;
  }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
