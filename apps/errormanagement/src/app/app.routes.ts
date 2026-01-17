import { Route } from '@angular/router';
import { permissionGuard } from '@errormanagement/data-access-auth';
import { authGuard, noAuthGuard } from '@errormanagement/utils';
export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'applications',
  },
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('@errormanagement/feature-login').then((m) => m.FeatureLogin),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('@errormanagement/shared/ui').then((m) => m.UnauthorizedComponent),
  },
  {
    path: 'applications',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivate: [authGuard],
        loadComponent: () =>
          import('@errormanagement/feature-cards').then((m) => m.FeatureCards),
      },
      {
        path: 'patientservices',
        //  canActivate: [permissionGuard],
        canActivateChild: [permissionGuard],
        loadComponent: () =>
          import('@errormanagement/shared/ui').then((m) => m.MainLayout),
        children: [
          {
            path: '',
            //     canActivate: [permissionGuard],
            data: { permission: 'view_patientservices' },
            loadComponent: () =>
              import('@errormanagement/patientservices').then(
                (m) => m.Patientservices,
              ),
          },
          {
            path: 'medicalservices',
            //    canActivate: [permissionGuard],
            canActivateChild: [permissionGuard],
            loadComponent: () =>
              import('@errormanagement/shared/ui').then((m) => m.MainLayout),
            children: [
              {
                path: 'sickleave',
                canActivate: [permissionGuard],
                data: { permission: 'view_medicalservices_sickleave' },
                loadComponent: () =>
                  import('@errormanagement/patientservices').then(
                    (m) => m.Patientservices,
                  ),
              },
            ],
          },
        ],
      },
      {
        path: 'clinicalattachment',
        canActivateChild: [permissionGuard],
        loadComponent: () =>
          import('@errormanagement/shared/ui').then((m) => m.MainLayout),
        children: [
          {
            path: '',
            // canActivate: [permissionGuard],
            data: { permission: 'view_clinical_attachment' },
            loadComponent: () =>
              import('@errormanagement/clinicalattachment').then(
                (m) => m.Clinicalattachment,
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'applications',
  },
];
