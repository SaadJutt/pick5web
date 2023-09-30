import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'bandlist',
        loadChildren: () => import('../band-lists/band-lists.module').then(m => m.BandListsModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'payout',
        loadChildren: () => import('../payout/payout.module').then(m => m.PayoutModule)
      },
      {
        path: 'addfund',
        loadChildren: () => import('../add-fund/add-fund.module').then(m => m.AddFundModule)
      },
      {
        path: 'notif',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'selectsong',
        loadChildren: () => import('../song-selection/song-selection.module').then(m => m.SongSelectionModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('../leader-board/leader-board.module').then(m => m.LeaderBoardModule)
      },
      {
        path: 'byband',
        loadChildren: () => import('../by-band/by-band.module').then(m => m.ByBandModule)
      },
      {
        path: 'payinghistory',
        loadChildren: () => import('../paying-history/paying-history.module').then(m => m.PayingHistoryModule)
      },
      {
        path: 'playinghistory',
        loadChildren: () => import('../playing-history/playing-history.module').then(m => m.PlayingHistoryModule)
      },
      {
        path: 'locationSchedule',
        loadChildren: () => import('../location-schedule/location-schedule.module').then(m => m.LocationScheduleModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsRoutingModule { }
