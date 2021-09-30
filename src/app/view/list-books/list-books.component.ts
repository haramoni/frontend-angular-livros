import { Component, OnInit } from "@angular/core";
import { Books } from "src/app/shared/model/book.model";
import { BookService } from "src/app/shared/service/books.service";

@Component({
  selector: "app-list-books",
  templateUrl: "list-books.component.html",
  styleUrls: ["list-books.component.css"],
})
export class ListBooksComponent implements OnInit {
  registeredBooks!: any;

  constructor(public rest: BookService) {}

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.rest.getAllBooks().subscribe((data: Books) => {
      this.registeredBooks = data;
    });
  }
}
