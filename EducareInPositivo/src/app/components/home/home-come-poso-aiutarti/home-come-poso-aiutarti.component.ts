import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnChiamataComponent } from "../../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-home-come-poso-aiutarti',
  standalone: true,
  imports: [RouterModule, BtnChiamataComponent],
  templateUrl: './home-come-poso-aiutarti.component.html',
  styleUrl: './home-come-poso-aiutarti.component.scss'
})
export class HomeComePosoAiutartiComponent {

}
