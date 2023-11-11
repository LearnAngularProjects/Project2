import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Watch',
      price: 10.99,
      description: 'This is the description of Product 1.',
      imageLink: '/assets/images/1.jpg',
      availability: "Available"
    },
    {
      id: 2,
      name: 'Book',
      price: 15.49,
      description: 'Description for Product 2 goes here.',
      imageLink: '/assets/images/2.jpg',
      availability: "Available"
    },
    {
      id: 3,
      name: 'Desktop',
      price: 5.99,
      description: 'Product 3 is a great choice for your needs.',
      imageLink: '/assets/images/3.jpg',
      availability: "Not Available"
    },
    {
      id: 4,
      name: 'Laptop HP',
      price: 7.99,
      description: 'Product 4 is another fantastic option.',
      imageLink: '/assets/images/4.jpg',
      availability: "Available"
    },
    {
      id: 5,
      name: 'Laptop Dell',
      price: 12.99,
      description: 'A high-quality choice, Product 5.',
      imageLink: '/assets/images/5.jpg',
      availability: "Not Available"
    },
    {
      id: 6,
      name: 'Iphone',
      price: 8.99,
      description: 'Product 6 suits your budget.',
      imageLink: '/assets/images/6.jpg',
      availability: "Available"
    },
  ];

  getTotalProducts() {
    return this.products.length;
  }

  getAvailableProducts() {
    return this.products.filter(p => p.availability === "Available").length;
  }

  getNotAvailableProducts() {
    return this.products.filter(p => p.availability === "Not Available").length;
  }

  productCountRadioButton: string = "all";

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
  }

  searchText: string = "";
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(searchValue);
  }
}
