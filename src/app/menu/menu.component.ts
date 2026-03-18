import { Component, OnInit, inject } from '@angular/core';
import { MenuService, MenuItem } from '../menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  menuService = inject(MenuService);
  menuItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];
  activeCategory: string = 'all';

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    this.filteredItems = this.menuItems;
  }

  filterMenu(category: string) {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredItems = this.menuItems;
    } else {
      this.filteredItems = this.menuItems.filter(item => item.category === category);
    }
  }

  addToCart(id: number) {
    console.log('Added item id to cart', id);
    // Future expansion: cart logic implementation
  }

}
