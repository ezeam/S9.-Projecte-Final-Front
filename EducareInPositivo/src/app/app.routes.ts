import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { DisciplinaPositivaComponent } from './components/disciplina-positiva/disciplina-positiva.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { PercorsoEducareComponent } from './components/percorso-educare/percorso-educare.component';
import { SupportoPersonalizzatoComponent } from './components/supporto-personalizzato/supporto-personalizzato.component';
import { WebinarComponent } from './components/webinar/webinar.component';
import { CalendlyComponent } from './components/calendly/calendly.component';
import { AuthGuard } from './guards/auth.guard'; // Importa el Guard

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chi-sono', component: ChiSonoComponent },
  { path: 'disciplina-positiva', component: DisciplinaPositivaComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'percorso-educare', component: PercorsoEducareComponent },
  { path: 'supporto-personalizzato', component: SupportoPersonalizzatoComponent },
  { path: 'webinar', component: WebinarComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // Protección con el Guard
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'calendly', component: CalendlyComponent },
];
