import { Component } from "@angular/core";
import { ApiService } from "../ApiService";
import { ActivatedRoute } from "@angular/router";

type DrinkResponse = { strIngredient: string; strMeasure1: string };

@Component({
  selector: "dettaglioComponent",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.css"],
})
export class dettaglioComponent {
  id: any;
  drink: any; // Specifica il tipo corretto

  newDrink: DrinkResponse[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    // Recupera l'ID dalla URL
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
    });

    this.apiService.getDrinkDetails(this.id).subscribe((data) => {
      this.drink = data;
      console.log("->", this.drink);

      this.newDrink = Array.from({ length: 15 }, (_, i) => ({
        strIngredient: this.drink.drinks[0][`strIngredient${i + 1}`],
        strMeasure1: this.drink.drinks[0][`strMeasure${i + 1}`],
      })).filter((item) => !!item.strIngredient && !!item.strMeasure1);
    });
  }
}
