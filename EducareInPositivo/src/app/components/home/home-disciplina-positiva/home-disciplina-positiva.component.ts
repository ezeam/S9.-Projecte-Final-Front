import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnChiamataComponent } from "../../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-home-disciplina-positiva',
  standalone: true,
  imports: [RouterModule, BtnChiamataComponent],
  templateUrl: './home-disciplina-positiva.component.html',
  styleUrl: './home-disciplina-positiva.component.scss'
})
export class HomeDisciplinaPositivaComponent {

}
