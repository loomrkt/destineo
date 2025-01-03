import { Routes } from '@angular/router';
// layout
import { LayoutComponent } from './layouts/layout/layout.component';

// pages
import { MainComponent } from './pages/main/main.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent,
            },
        ],
    },
];
