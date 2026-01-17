import { NavItem } from '@errormanagement/shared/domain';

export const patientservicesNavItems: NavItem[] = [
  {
    label: 'Medical Services',
    icon: 'bi-bar-chart',
    route: '/applications/medicalservices',
    permission: 'view_medicalservices',
    children: [
      {
        label: 'Sick Leave',
        icon: 'bi-speedometer2',
        route: '/sickleave',
        permission: 'view_medicalservices_sickleave',
      },
      {
        label: 'Medical Report',
        icon: 'bi-speedometer2',
        route: '/medicalreport',
        permission: 'view_medicalservices_medicalreport',
      },
      {
        label: 'Vaccines',
        icon: 'bi-speedometer2',
        route: '/applications/medicalservices/Vaccines',
        permission: 'view_medicalservices_Vaccines',
      },

      {
        label: 'Lab Results',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'view_clinicalattachment_dashboard',
      },
    ],
  },
  {
    label: 'Personal Information',
    icon: 'bi-bar-chart',
    route: '/applications/personalinformation',
    children: [
      {
        label: 'Personal Information',
        icon: 'bi-speedometer2',
        route: '/applications/personalinformation',
        permission: 'view_personalinformation_dashboard',
      },
      {
        label: 'Health Card',
        icon: 'bi-speedometer2',
        route: '/applications/personalinformation/healthcard',
        permission: 'view_personalinformation_healthcard',
      },
    ],
  },
  {
    label: 'Certificates',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/Certificates',
    permission: 'view_clinicalattachment_Certificates',
    children: [
      {
        label: 'Letters',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/create',
        permission: 'view_clinicalattachment_dashboard',
      },
      {
        label: 'Medical Fitness',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
      {
        label: 'Premarital Certificate',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
    ],
  },
  {
    label: 'Other Services',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/OtherServices',
    permission: 'view_clinicalattachment_OtherServices',
    children: [
      {
        label: 'Blood Donation (Dammi)',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/Blood',
        permission: 'view_clinicalattachment_Blood',
      },
      {
        label: "A'awen Service",
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/awenservice',
        permission: 'update_clinicalattachment_awenservice',
      },
      {
        label: 'Clinical Attachment',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
    ],
  },
  {
    label: 'Payment',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/Payment',
    permission: 'view_clinicalattachment_Payment',
    children: [
      {
        label: 'Update Payment Status',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/create',
        permission: 'view_clinicalattachment_dashboard',
      },
      {
        label: 'Reassign Payment',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
    ],
  },
  {
    label: 'Data Fix',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/reports',
    permission: 'view_clinicalattachment_reports',
    children: [
      {
        label: 'Update Personal Information',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/create',
        permission: 'view_clinicalattachment_dashboard',
      },
      {
        label: 'Update Health Card',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
      {
        label: 'Update Sick Leave Status',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
      {
        label: 'Update Medical Report Status',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
    ],
  },
  {
    label: 'Appointments',
    icon: 'bi-bar-chart',
    route: '/applications/clinicalattachment/reports',
    permission: 'view_clinicalattachment_reports',
    children: [
      {
        label: 'Telemedicine',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/create',
        permission: 'view_clinicalattachment_dashboard',
      },
      {
        label: 'Doctor For Every Citizen (DFEC)',
        icon: 'bi-speedometer2',
        route: '/applications/clinicalattachment/update',
        permission: 'update_clinicalattachment_dashboard',
      },
    ],
  },
];
