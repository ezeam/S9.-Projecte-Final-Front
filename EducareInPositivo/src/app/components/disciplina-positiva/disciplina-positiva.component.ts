import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-positiva',
  standalone: true,
  imports: [],
  templateUrl: './disciplina-positiva.component.html',
  styleUrl: './disciplina-positiva.component.scss'
})
export class DisciplinaPositivaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  } 
}
