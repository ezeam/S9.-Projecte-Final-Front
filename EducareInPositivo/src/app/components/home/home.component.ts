import { Component } from '@angular/core';
import { HomeChiSonoComponent } from "./home-chi-sono/home-chi-sono.component";
import { HomeComePosoAiutartiComponent } from "./home-come-poso-aiutarti/home-come-poso-aiutarti.component";
import { HomeDisciplinaPositivaComponent } from "./home-disciplina-positiva/home-disciplina-positiva.component";
import { HomeDiconoDiMeComponent } from "./home-dicono-di-me/home-dicono-di-me.component";
import { ChiSonoComponent } from "../chi-sono/chi-sono.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeChiSonoComponent, HomeComePosoAiutartiComponent, HomeDisciplinaPositivaComponent, HomeDiconoDiMeComponent, ChiSonoComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  function () {

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    let forms = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
    }
}
