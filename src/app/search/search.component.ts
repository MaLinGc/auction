import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories: string[];

  formModel: FormGroup;

  constructor(private productService: ProductService, fb: FormBuilder) {
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: [-1]
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }

    let price = parseInt(control.value);

    if (price > 0) {
      return null;
    } else {
      return { positiveNumber: true };
    }
  }

}
