import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookService } from "src/app/shared/service/books.service";

@Component({
  selector: "app-register-new-book",
  templateUrl: "register-new-book.component.html",
  styleUrls: ["register-new-book.component.css"],
})
export class RegisterNewBookComponent implements OnInit {
  public bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private rest: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      TituloLivro: ["", [Validators.required]],
      AnoLancamento: ["", [Validators.required]],
      Autor: ["", [Validators.required]],
      Genero: ["", [Validators.required]],
    });
  }

  registerNewBook() {
    // this.rest
    //   .postNewRegisteredBook(this.bookForm.value)
    //   .subscribe((result) => {});
  }
}
