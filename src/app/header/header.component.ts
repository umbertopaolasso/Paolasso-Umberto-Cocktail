import { Component, ElementRef } from "@angular/core";
import { ApiService } from "../ApiService";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "HeaderComponent",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  id: any;
  drink: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {}
}
