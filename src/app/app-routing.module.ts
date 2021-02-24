import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'working-committee',
    loadChildren: () => import('./pages/working-committee/working-committee.module').then( m => m.WorkingCommitteePageModule)
  },
  {
    path: 'local-committee',
    loadChildren: () => import('./pages/local-committee/local-committee.module').then( m => m.LocalCommitteePageModule)
  },
  {
    path: 'teaching',
    loadChildren: () => import('./pages/teaching/teaching.module').then( m => m.TeachingPageModule)
  },
  {
    path: 'non-teaching',
    loadChildren: () => import('./pages/non-teaching/non-teaching.module').then( m => m.NonTeachingPageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./pages/department/department.module').then( m => m.DepartmentPageModule)
  },
  {
    path: 'other-stuff',
    loadChildren: () => import('./pages/other-stuff/other-stuff.module').then( m => m.OtherStuffPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./pages/download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'notices',
    loadChildren: () => import('./pages/notices/notices.module').then( m => m.NoticesPageModule)
  },
  {
    path: 'notice-details/:id',
    loadChildren: () => import('./pages/notice-details/notice-details.module').then( m => m.NoticeDetailsPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'view-image/:id',
    loadChildren: () => import('./pages/view-image/view-image.module').then( m => m.ViewImagePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
