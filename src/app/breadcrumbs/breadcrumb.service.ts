import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter } from "rxjs";


@Injectable({ 
    providedIn: 'root' 
  }) 
  export class BreadcrumbService { 
   
    private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]); 
    readonly breadcrumbs$ = this._breadcrumbs$.asObservable(); 
   
    constructor(private router: Router) { 
      this.router.events.pipe( 
        filter((event) => event instanceof NavigationEnd) 
      ).subscribe(event => { 
        const root = this.router.routerState.snapshot.root; 
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root.firstChild, [], breadcrumbs); 
   
        this._breadcrumbs$.next(breadcrumbs); 
      }); 
    } 
   
    private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) { 
      if (route) { 

        const routeUrl = parentUrl.concat(route.url.map(url => url.path));

        const breadcrumbHome = { 
            label: 'Home', 
            url: '/'
        };
        breadcrumbs.push(breadcrumbHome); 

        if (routeUrl[0] && routeUrl[0] != 'home') {
            const parentRoute = this.router.config.find(r => r.path == routeUrl[0])
            const breadcrumbParent = { 
                label: (<any>parentRoute.data).breadcrumb,
                url: '/' + routeUrl[0]
            };
            breadcrumbs.push(breadcrumbParent);
        }

        if (routeUrl.length > 1) {
            const breadcrumbChild = { 
                label: (<any>route.data).breadcrumb, 
                url: '/' + routeUrl.join('/')
            };
            breadcrumbs.push(breadcrumbChild);
        }
      } 
    }  
  }




  export interface Breadcrumb {
    label: string;
    url: string;
  }