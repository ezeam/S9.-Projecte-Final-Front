import { Component, OnInit } from '@angular/core';
import { BtnChiamataComponent } from "../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-disciplina-positiva',
  standalone: true,
  imports: [BtnChiamataComponent],
  templateUrl: './disciplina-positiva.component.html',
  styleUrl: './disciplina-positiva.component.scss'
})
export class DisciplinaPositivaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  } 
}
