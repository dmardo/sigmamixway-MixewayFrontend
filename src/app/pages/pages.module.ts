import { NgModule } from '@angular/core';
import {NbAlertModule, NbCardModule, NbListModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { MixerDashboardModule } from './mixer-dashboard/mixer-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ShowProjectModule} from './show-project/show-project.module';
import {AdminModule} from './admin/admin.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '../auth/token.interceptor';
import {FormsModule} from '@angular/forms';
import {CicdModule} from './cicd/cicd.module';
import {VulnsModule} from './vulns/vulns.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    MixerDashboardModule,
    ShowProjectModule,
    AdminModule,
    FormsModule,
    CicdModule,
    VulnsModule,
    NbCardModule,
    NbAlertModule,
    NbListModule,
  ],
  declarations: [
    PagesComponent,
    SearchComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class PagesModule {
}
