import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ providedIn: "root" })
export class ProductService {

    // private url = '/assets/products.json';
    private url = 'http://localhost:3000/';

    constructor(private http: HttpClient) {

    }
    getProducts(): Observable<any> {
        return this.http.get(this.url)
            .pipe(map((productList: Array<any>) => {
                console.log(productList);

                return productList["productList"]
                    .map(p => {
                        let product: Product = new Product(p.id, p.name, p.price, p.num, p.done);
                        return product;
                    })
            }));
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
    updateProduct(id: number, p: Product) {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.put(this.url, p, { params: urlParams });
    }

    createProduct(prod: Product) {
        return this.http.post(this.url, prod);
    }

}