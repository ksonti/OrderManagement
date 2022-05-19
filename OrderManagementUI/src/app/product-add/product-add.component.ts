import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { TypeService } from '../_services/type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReturnOrder } from '../_model/returnOrder';
import { Type } from '../_model/type';

// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() form: any = {};
  isSuccessful = false;
  componentType = {};
  isSignUpFailed = false;
  errorMessage = '';
  isUpdate = false;

  returnOrder: ReturnOrder = {
    userID: null,
    userName: '',
	  lastName: '',
    contactNumber: null,
    telephoneNumber: null,
	  creditCardNumber: null,
	  componentType: '',
	  componentName: '',
	  quantityOfDefective: null,
	  isPriorityRequest: false
  };

  type: Type = {
    type_id: null,
    type_title: null,
    type_description: ''
  };

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.form.product_type_id = 0;
    this.getProductType();
    if (id) {
      this.isUpdate = true;
      this.getProduct(id);
    }

  }

  getProduct(id): void {
    this.productService.getById(id).subscribe(
      data => {
        this.returnOrder = data[0];
      },
      err => {
        console.log(err);
      }
    );

  }

  getProductType(): void {
    this.typeService.getAllTypes().subscribe(
      data => {
        this.type = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ID  "+id)
    if (id) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  updateProduct(): void {
    console.log("Product Upate")
    this.productService.update(this.returnOrder.userID, { ...this.returnOrder, ...this.form }).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/productConfirmation'], {state :{requestId: data.requestId, userID: data.userID, processingCharge: data.processingCharge, packagingAndDeliveryCharge: data.packagingAndDeliveryCharge, dateOfDelivery: data.dateOfDelivery}});
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  addProduct(): void {
    this.productService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/productConfirmation'], {queryParams :{requestId: data.requestId, userID: data.userID, processingCharge: data.processingCharge, packagingAndDeliveryCharge: data.packagingAndDeliveryCharge, dateOfDelivery: data.dateOfDelivery, totalCharge: data.totalCharges}});
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
