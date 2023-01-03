import { Component, OnInit } from '@angular/core';
import { Product } from '../_Model/Product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../_Services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandler } from '../_Model/FileHandler.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { UserService } from '../_Services/user.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  ngOnInit(): void {
  }

  csvRecords: any[] = [];
  csvRecords2: any[] = [];
  header: boolean = false;

  constructor(private ngxCsvParser: NgxCsvParser, private productService : ProductService) {}

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {
      const files = $event.srcElement.files;
      this.header =
          (this.header as unknown as string) === 'true' ||
          this.header === true;

      this.ngxCsvParser
          .parse(files[0], {
              header: this.header,
              delimiter: ';',
              encoding: 'utf8'
          })
          .pipe()
          .subscribe(
              (result: any)  => {
                  console.log('Result', result);
                  this.csvRecords = result;
                  for (let i=0; i<=result.length; i++)
                  {
                    console.log(result[i]);
                  }
              },
              (error: NgxCSVParserError) => {
                  console.log('Error', error);
              }
          );
  }
  @ViewChild('fileImportInput2') fileImportInput2: any;
  fileChangeListener2($event: any): void {
    const files = $event.srcElement.files;
    this.header =
        (this.header as unknown as string) === 'true' ||
        this.header === true;

    this.ngxCsvParser
        .parse(files[0], {
            header: this.header,
            delimiter: ';',
            encoding: 'utf8'
        })
        .pipe()
        .subscribe(
            (result: any)  => {
                //console.log('Result', result);
                this.csvRecords2 = result;
                for (let i=0; i<=result.length; i++)
                {
                  console.log(result[i])
                  
                }
            },
            (error: NgxCSVParserError) => {
                console.log('Error', error);
            }
        );

}

}