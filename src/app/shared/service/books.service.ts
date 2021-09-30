import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Books } from "../model/book.model";

@Injectable({
  providedIn: "root",
})
export class BookService {
  apiUrl = "https://localhost:5001/livros/livrosestante/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  postNewRegisteredBook(form: string): Observable<any> {
    return this.httpClient.post<Books>(this.apiUrl + "cadastrar", form);
  }

  getAllBooks() {
    return this.httpClient.get<Books>(this.apiUrl + "listar");
  }

  generateBooks(): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "iniciar", "");
  }
}
