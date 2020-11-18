import { Component, OnInit } from '@angular/core';
import { NbCardComponent, NbTreeGridModule } from '@nebular/theme';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Content } from '../../@core/data/content-data';
import { SitecontentService } from 'app/@core/api/sitecontent.service';
import { OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';

@Component({
  selector: 'ngx-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {

  private alive = true;
  data$: Content[];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private contentService: SitecontentService,private themeService: NbThemeService) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      this.currentTheme = theme.name;
});

 
   }

   

  ngOnInit(): void {

    this.getData();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getData(): void {
    this.contentService.getContentData()
    .subscribe(data => this.data$ = data);
  }


}

