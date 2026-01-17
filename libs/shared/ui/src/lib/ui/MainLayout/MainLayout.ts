import { ChangeDetectionStrategy, Component, inject, signal ,computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from '@errormanagement/data-access-auth';

import { NavigationService } from '@errormanagement/shared/ui-services';
@Component({
  selector: 'lib-main-layout',
  imports: [RouterOutlet, RouterLink ,CommonModule],
  templateUrl: './MainLayout.html',
  styleUrl: './MainLayout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout { title = 'DHSupportDashboard';

  navService = inject(NavigationService); 
  authService = inject(AuthService);

  isSidebarOpen = true; 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 
  openSubmenus = signal<string[]>([]);
  
  toggleSubmenuById(label: string) {
    this.openSubmenus.update(menus => {
      if (menus.includes(label)) {
        return menus.filter(m => m !== label);
      } else {
        return [...menus, label];
      }
    });
  }
  
  isSubmenuOpen(label: string): boolean {
    return this.openSubmenus().includes(label);
  }
   logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.authService.logout().subscribe({
        error: (err) => console.error('Logout error:', err)
      });
    }
  }
}

