import { Routes } from '@angular/router';
import { SearchComponent} from './search/search.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';


export const appRoutes:Routes =[
{
    path:'search',
    component : SearchComponent
},
{
    path:'user/:userId',
    component: UserComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'**',
    redirectTo:'/login'
}

];

