import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { empty, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit, OnDestroy {


  public static activeLang = 'es';
  activeLang2 = SidenavComponent.activeLang;
  events: string[] = [];
  opened = false;
  dataMenu = [];

  public mediaSub: Subscription;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private location: Location,
    public mediaObserver: MediaObserver
  ) {
    this.translate.setDefaultLang(SidenavComponent.activeLang);
    this.location = location;
  }


  async ngOnInit() {
    this.dataMenu = [
      {
        'icon': 'medical_services',
        'label': this.activeLang2 == 'es' ? 'Medicamentos' : 'Medicines',
        'route': 'medicines',
        'children': null,
        'open': false
      },
      {
        'icon': 'vertical_split',
        'label': this.activeLang2 == 'es' ? 'Estantes' : 'Chelves',
        'route': 'chelves',
        'children': [
          {
            icon: 'code',
            label: 'A',
          },
          {
            icon: 'code',
            label: 'B',
          },
          {
            icon: 'code',
            label: 'C',
          },
          {
            icon: 'code',
            label: 'D',
          },
        ],
        'open': false
      },
      {
        'icon': 'contacts',
        'label': this.activeLang2 == 'es' ? 'Proveedores' : 'Providers',
        'route': 'providers',
        'children': null,
        'open': false
      }
    ];

    this.mediaSub = await this.mediaObserver.media$.subscribe((result: MediaChange) => {
      switch (result.mqAlias) {
        case 'xs':
          this.opened = false;
          break;
        case 'sm':
          this.opened = false;
          break;
        case 'md':
          this.opened = true;
          break;
        case 'lg':
          this.opened = true;
          break;
        default:
          this.opened = true;
          break;
      }
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  public cambiarLenguaje() {
    if (this.activeLang2 == 'es') {
      SidenavComponent.activeLang = 'en';
      this.activeLang2 = 'en';
      this.translate.use('en');
    } else {
      SidenavComponent.activeLang = 'es';
      this.activeLang2 = 'es';
      this.translate.use('es');
    }

    this.dataMenu = [
      {
        'icon': 'medical_services',
        'label': this.activeLang2 == 'es' ? 'Medicamentos' : 'Medicines',
        'route': 'medicines',
        'children': null,
        'open': false
      },
      {
        'icon': 'vertical_split',
        'label': this.activeLang2 == 'es' ? 'Estantes' : 'Chelves',
        'route': 'chelves',
        'children': [
          {
            icon: 'code',
            label: 'A',
          },
          {
            icon: 'code',
            label: 'B',
          },
          {
            icon: 'code',
            label: 'C',
          },
          {
            icon: 'code',
            label: 'D',
          },
        ],
        'open': false
      },
      {
        'icon': 'contacts',
        'label': this.activeLang2 == 'es' ? 'Proveedores' : 'Providers',
        'route': 'providers',
        'children': null,
        'open': false
      }
    ];

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.location.path()]);
    });
  }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;


}
