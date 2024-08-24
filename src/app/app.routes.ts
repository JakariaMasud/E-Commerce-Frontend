import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent,
        title:'Login Now'
    },
    {
        path:'login',
        component: LoginComponent,
        title:'Login Now'
    },
    {
        path:'register',
        component: RegisterComponent,
        title:'Register'
    },
    {
        path:'product',
        component:ProductDetailsComponent,
        title:'Product Details'
    }
];
