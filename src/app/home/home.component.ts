import { Component, ElementRef } from "@angular/core";
import { ApiService } from "../ApiService";

@Component({
  selector: "homeComponent",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class homeComponent {
  nome = "Umberto";
  dati: any;
  datiok: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      this.datiok = this.dati.drinks;
      console.log(this.datiok);
      // return this.datiok;
    });
  }
}
