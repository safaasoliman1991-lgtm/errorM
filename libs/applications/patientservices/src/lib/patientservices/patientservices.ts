import { Component, inject, OnInit } from '@angular/core';

import { NavigationService } from '@errormanagement/shared/ui-services';
import { patientservicesNavItems } from '@errormanagement/data-access-patientservices';
import { PermissionService } from '@errormanagement/data-access-auth';

import { filterNavItemsByPermission } from '@errormanagement/shared/util-config';
@Component({
  selector: 'lib-patientservices',
  imports: [],
  templateUrl: './patientservices.html',
  styleUrl: './patientservices.css',
})
export class Patientservices implements OnInit {
  private readonly navService = inject(NavigationService);
  private readonly permissionService = inject(PermissionService);

  ngOnInit(): void {
    this.setupNavigation();
  }
  /**
   * Setup navigation items based on user permissions
   */
  private setupNavigation(): void {
    const filteredNav = filterNavItemsByPermission(
      patientservicesNavItems,
      this.permissionService.permissions(),
    );
    this.navService.setNav(filteredNav);
  }
}
