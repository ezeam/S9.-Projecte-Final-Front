import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CalendlyService } from '../../services/calendly.service';

@Component({
  selector: 'app-calendly',
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.scss']
})
export class CalendlyComponent implements OnInit {
  @ViewChild('calendlyContainer', { static: true }) calendlyContainer!: ElementRef;

  constructor(private calendlyService: CalendlyService) {}

  ngOnInit(): void {
    this.calendlyService.loadCalendlyScript().then(() => {
      this.initializeCalendlyWidget();
    }).catch((error) => {
      console.error('Error loading Calendly script:', error);
    });
  }

  initializeCalendlyWidget() {
    const options = {
      url: 'https://calendly.com/educareinpositivo/chiamata-conoscitiva',
      parentElement: this.calendlyContainer.nativeElement,
      styles: {
        height: '630px',
        width: '100%',
      },
    };
    (window as any).Calendly.initInlineWidget(options);
  }
}
