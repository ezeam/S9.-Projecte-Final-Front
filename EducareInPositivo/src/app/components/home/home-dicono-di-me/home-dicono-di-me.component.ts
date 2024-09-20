import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dicono-di-me',
  standalone: true,
  imports: [],
  templateUrl: './home-dicono-di-me.component.html',
  styleUrl: './home-dicono-di-me.component.scss'
})
export class HomeDiconoDiMeComponent {
  reviews = [ //NO ESTÁ FUNCIONANDO, ESTÁN HACODEADAS EN EL HTML
    {
      id: 0,
      text: `Ho conosciuto Nunzia a Barcellona poiché avevo necessità di trovare uno specialista che parlasse italiano per il mio bambino. Nunzia si è resa disponibile ad aiutare la nostra famiglia in più occasioni, è una professionista molto umana ed empatica, ci sarebbe tanto bisogno di professionisti come lei: ha saputo unire l’umanità alle competenze professionali. Grazie di cuore.`,
      author: 'Valentina'
    },
    {
      id: 1,
      text: `Ho partecipato al corso “educare in positivo” ed è stato un bellissimo percorso. Gli incontri sono ben strutturati e ricchi di utili contenuti. Ho iniziato a mettere in pratica da subito quanto appreso e ho notato la differenza nel gestire alcune delle situazioni che sentivo stressanti con il mio bimbo di tre anni. Sicuramente parteciperò ad eventuali corsi di approfondimento futuri.`,
      author: 'Irene'
    },
    {
      id: 2,
      text: `Nunzia per me è la mia famiglia, un punto di appoggio fondamentale. Ha aiutato me e il mio bambino in un momento di difficoltà con la professionalità necessaria ma anche con l'amore e l’affetto di una madre ad un’altra madre. E’ una professionista in grado di consigliare e indirizzare a 360 gradi e nello stesso tempo scaldarti il cuore con dolcezza e sensibilità.`,
      author: 'Elisa'
    },
    {
      id: 3,
      text: `Prima di tutto grazie. Per la tua disponibilità, la chiarezza, la ricchezza dei contenuti trattati...`,
      author: 'Stefania'
    },
    {
      id: 4,
      text: `Cara Nunzia, grazie per la tua costante presenza e disponibilità infinita. Come mamma di una bimba di 3 anni...`,
      author: 'Ewelina'
    },
    {
      id: 5,
      text: `Il corso è stato davvero molto interessante, strutturato in maniera coinvolgente e dinamico. Nunzia è stata in grado di coinvolgere tutti...`,
      author: 'Roberta'
    },
    {
      id: 6,
      text: `Ho conosciuto Nunzia a Barcellona, e l’ho contattata per ricevere una consulenza per mio figlio neurodivergente...`,
      author: 'Maria'
    },
    {
      id: 7,
      text: `Nunzia è una grande professionista. Abbiamo effettuato diverse consulenze personalizzate e lei ha sempre saputo darci consigli totalmente adatti...`,
      author: 'Ester'
    },
    {
      id: 8,
      text: `Nunzia è una persona positiva, sempre pronta ad ascoltarti. Mi sono trovata molto bene con lei...`,
      author: 'Paola'
    },
    {
      id: 9,
      text: `Ho fatto una consulenza con Nunzia per tutti e due i miei figli. Mi sono sentita accolta, ascoltata...`,
      author: 'Brisa'
    },
    {
      id: 10,
      text: `Ho sia partecipato al corso educare in positivo, sia usufruito degli altri servizi proposti da Nunzia...`,
      author: 'Maria Teresa'
    },
    {
      id: 11,
      text: `Professionista seria, preparata, delicata e attenta a tutti gli aspetti del suo lavoro...`,
      author: 'Carolina'
    },
    {
      id: 12,
      text: `È raro trovare una professionista come Nunzia. Preparata, scrupolosa, empatica. Ha saputo prendermi per mano e guidarmi...`,
      author: 'Roberto'
    }
  ];
}
