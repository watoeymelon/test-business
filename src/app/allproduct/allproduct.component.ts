import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = [];  // ประกาศตัวแปรสำหรับเก็บสินค้าทั้งหมด
  filteredProducts: any[] = [];  // ประกาศตัวแปรสำหรับเก็บสินค้าหลังการกรอง

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลสินค้าจาก ProductService
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;  // รับข้อมูลสินค้าทั้งหมด
      this.filterProducts(); // เรียกใช้ฟังก์ชันกรองสินค้า
    });
  }

  filterProducts() {
    // กรองสินค้าตามหมวดหมู่
    this.filteredProducts = this.products.filter(product => product.category.includes('allproduct'));
  }

  addToCart(product: any) {
    // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
    this.cartService.addToCart(product);
    alert('เพิ่มสินค้าลงในตะกร้าแล้ว!');
  }
}
