import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/models/medicine.model';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { empty, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit, OnDestroy {

  public data: [];
  cols = 4;
  // Declare height and width variables
  scrHeight: any;
  scrWidth: any;
  public deviceXs: boolean;
  public mediaSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, public mediaObserver: MediaObserver, private translate: TranslateService,) {
    this.getScreenSize();
    this.translate.setDefaultLang(SidenavComponent.activeLang);
  }

  //Height and Width
  @HostListener('window:resize', ['$event'])
  //xs sm md lg

  async ngOnInit() {
    this.getMedicines();

    this.mediaSub = await this.mediaObserver.media$.subscribe((result: MediaChange) => {
      switch (result.mqAlias) {
        case 'xs':
          this.cols = 1;
          break;
        case 'sm':
          this.cols = 2;
          break;
        case 'md':
          this.cols = 3;
          break;
        case 'lg':
          this.cols = 4;
          break;
        default:
          break;
      }
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  getMedicines() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.data = data.medicines;
    })
  }

}
