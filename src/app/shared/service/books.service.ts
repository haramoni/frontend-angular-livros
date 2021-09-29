import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class BookService {

  apiUrl = "https://localhost:5001/livros/livrosestante/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  }

  constructor(private httpClient: HttpClient) {}

  postNewRegisteredBook(){}

  getAllBooks(){}

  generateBooks(){}

}

