import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Gujarati Thali",
      price: 250,
      category: "thali",
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    },
    {
      id: 2,
      name: "Kathiyawadi Thali",
      price: 300,
      category: "thali",
      img: "https://images.unsplash.com/photo-1604908176997-431b5b1b7f2f",
    },
    {
      id: 3,
      name: "Dhokla",
      price: 80,
      category: "snacks",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 4,
      name: "Khaman",
      price: 90,
      category: "snacks",
      img: "https://images.unsplash.com/photo-1617196035154-1e2d98e6f3a2",
    },
    {
      id: 5,
      name: "Masala Chaas",
      price: 40,
      category: "drinks",
      img: "https://images.unsplash.com/photo-1626200419199-391ae4be7c4e",
    },
    {
      id: 6,
      name: "Mango Lassi",
      price: 70,
      category: "drinks",
      img: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
    },
  ];

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
