import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-test.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
})

export class ApiTestComponent implements OnInit {
  cats: Array<any> = [];

  cat: any = {
    name: '',
    age: '',
    breed: ''
  }
  
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.buscarGatos();
  }

  buscarGatos() {
    this.service.getCats().subscribe((response: any) => {
      this.cats = response;
    });
  }

  adicionarGatos() {
    this.service.postCats(this.cat).subscribe((response) => {
      this.buscarGatos();
    });
  }
}
