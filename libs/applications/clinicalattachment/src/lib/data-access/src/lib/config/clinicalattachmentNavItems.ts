import { NavItem } from '@errormanagement/shared/domain';

export const clinicalattachmentNavItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi-speedometer2',
    route: '/applications/clinicalattachment/dashboard',
    permission: 'view_clinicalattachment_dashboard',
  },
  {
    label: 'Applications',
    icon: 'bi-file-earmark-text',
    route: '/applications/clinicalattachment/list',
    permission: 'view_clinicalattachment_applications',
  },
  {
    label: 'Reports',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/reports',
    permission: 'view_clinical_reports',
    children: [
      {
        label: 'Create',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/create',
        permission: 'view_users',
      },
    ],
  },
  {
    label: 'Settings',
    icon: 'bi-gear',
    route: '/applications/clinicalattachment/settings',
    permission: 'edit_clinicalattachment_settings',
  },
];
