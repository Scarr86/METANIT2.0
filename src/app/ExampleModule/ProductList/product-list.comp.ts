import { Component, ViewChild, TemplateRef } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

import { Directive } from '@angular/core';

@Directive({
    selector: '[editProd]',
})
export class EditProdDirective {
    constructor(ref: TemplateRef<any>){
        console.log(ref)
    }
 }

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.comp.html",
    styleUrls: ["./product-list.comp.css"]
})
export class ProductListComp {
    //тип шаблонов
    @ViewChild("readOnlyTemplate", { static: false })
    readOnlyTemplate: TemplateRef<any>;
    @ViewChild(EditProdDirective , { static: false, read:TemplateRef}) editTemplate: TemplateRef<any>;

    products: Product[] = [];
    editedProduct: Product; // = new Product(1, "",1,111,false);
    isNewRecord: boolean;
    statusMessage: string = "";
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.loadProduct();
    }

    loadProduct() {

        //this.statusMessage = ""; 

        this.productService.getProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
            },
            (err: Error) => {
                console.log(err.message);
                this.statusMessage = err.message;
            }
        );
    }

    deletProduct(p: Product) {
        this.productService.deleteProduct(p.id).subscribe(
            () => {
                this.statusMessage = "Успешно удаленны";
                this.loadProduct();
            },
            (err: Error) => {
                this.statusMessage = "Ошибка1: " + err.message;
            }
        );

        let prod = this.products.find((prod: Product, idx: number) => {
            if (p.id === prod.id) return true;
            else return false;
        });
        this.products.splice(prod.id, 1);
        this.products.forEach((p, id) => {
            p.id = id;
        });
        // console.log(this.products);
    }

    editProduct(p: Product) {
        this.editedProduct = new Product(p.id, p.purchase, p.num, p.price, p.done);
    }

    loadTemplate(product: Product) {
        if (this.editedProduct && this.editedProduct.id == product.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    addProduct() {
        this.editedProduct = new Product(this.products.length, "", 0, 0, false);
        this.products.push(this.editedProduct);
        this.isNewRecord = true;
    }

    saveProduct() {
        if (this.isNewRecord) {
            console.log("add");

            this.productService.createProduct(this.editedProduct).subscribe(
                d => {
                    console.log(JSON.stringify(this.editedProduct, null, 2));

                    this.statusMessage = "Данные успешно добавлены";
                    this.loadProduct();
                },
                (err: Error) => {
                    //this.products.pop();
                    this.statusMessage = "Ошибка2: " + err.message;
                },
                () => {
                    console.log("fin");
                }
            );
            //this.products.push(this.editedProduct);
            this.isNewRecord = false;
            this.editedProduct = null;
        } else {
            this.productService.updateProduct(this.editedProduct.id, this.editedProduct).subscribe(
                () => {
                    this.statusMessage = "Данные обновленны";
                    this.loadProduct();
                },
                (err: Error) => {
                    this.statusMessage = "Ошибка3: " + err.message;
                }
            );
            let ind = this.products.findIndex(p=> p.id === this.editedProduct.id);
            this.products.splice(ind, 1, this.editedProduct)
            this.editedProduct = null;
            console.log("update: ", this.products);
        }
        this.editedProduct = null;
    }

    cancel() {
        if (this.isNewRecord) {
            this.products.pop();
            this.isNewRecord = false;
        }
        this.editedProduct = null;
    }
}
