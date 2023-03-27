import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Food } from '../../shared/models/Food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 }
    ]
  }

  getAllFoodsByTag(tag: string): Food[]{
    return tag == "All"?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Pizza Peperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../assets/images/food-1.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '../assets/images/food-2.jpeg',
        tags: ['SlowFood', 'Lunch']
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '../assets/images/food-3.jpeg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '../assets/images/food-4.jpeg',
        tags: ['FastFood', 'Fry']
      },
      {
        id: 5,
        name: 'Chicken Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '../assets/images/food-5.jpeg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '../assets/images/food-6.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }

    ];
  }
}
