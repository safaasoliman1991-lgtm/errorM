import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApplicationsService } from '@errormanagement/data-access';
import { AuthService } from '@errormanagement/data-access-auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-feature-cards',
  imports: [RouterLink],
  templateUrl: './feature-cards.html',
  styleUrl: './feature-cards.css',
})
export class FeatureCards {
  private appsService = inject(ApplicationsService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  apps = toSignal(
    this.appsService.getApplications().pipe(
      catchError((error) => {
        // Check if error is authentication-related (401/403)
        if (error?.status === 401 || error?.status === 403) {
          this.router.navigate(['/login']);
          return of([]);
        }
        // For other errors show error message
        console.error('Failed to load applications:', error);
        return of([]); // Return empty array to avoid breaking the UI
      }),
    ),
    { initialValue: [] },
  );
  // debug signals:
  constructor() {
    effect(() => {
      console.log('Applications updated:', this.apps());
    });
  }
  vm = computed(() =>
    this.apps().map((app) => ({
      ...app,
      link: app.route,
      color: app.color,
    })),
  );

  // applications = signal<{ name: string; cardstyle: string; color: string }[]>([
  //   { name: 'app1', cardstyle: '', color: 'bg-danger' },
  //   { name: 'app2', cardstyle: '', color: 'bg-secondary' },
  //   { name: 'app3', cardstyle: '', color: 'bg-success' },
  //   { name: 'app4', cardstyle: '', color: 'bg-warning' },
  //   { name: 'app5', cardstyle: '', color: 'bg-info' },
  //   { name: 'app6', cardstyle: '', color: 'bg-primary' },
  // ]);
}
