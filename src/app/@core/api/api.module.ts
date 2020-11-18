import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitecontentService } from './sitecontent.service';


const APISERVICES = [
  SitecontentService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...APISERVICES,
  ],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        ...APISERVICES,
      ],
    };
  }
}
