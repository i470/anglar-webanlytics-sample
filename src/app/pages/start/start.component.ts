import { Component, OnInit } from '@angular/core';
import { StatusCardComponent } from '../dashboard/status-card/status-card.component';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}


@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})



export class StartComponent implements OnInit {

  private alive = true;

  constructor(private themeService: NbThemeService) {
this.themeService.getJsTheme()
.pipe(takeWhile(() => this.alive))
.subscribe(theme => {
this.statusCards = this.statusCardsByThemes[theme.name];
});


}

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Visitors',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Security',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Performance',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Reports',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    
  } = {
    default: this.commonStatusCardsSet
  };
  ngOnInit(): void {
  }

}
