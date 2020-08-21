import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from 'src/app/models/medicine.model';
import { Shelf } from 'src/app/models/shelf.model';
import { Provider } from 'src/app/models/provider.model';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-new-med',
  templateUrl: './new-med.component.html',
  styleUrls: ['./new-med.component.scss']
})
export class NewMedComponent implements OnInit {

  value = '';
  data = new Medicine(0, "", 0, 0, new Shelf(0, "", ""), new Provider(0, "", "", ""));
  shelves: [];
  providers: [];
  shelf = new Shelf(0, "", "");
  provider = new Provider(0, "", "", "");
  showCarga = false;
  showMessage = false;
  message = '';
  activeLang = SidenavComponent.activeLang;

  constructor(private activatedRoute: ActivatedRoute, private medicine_service: MedicineService, private router: Router, private translate: TranslateService,) {
    this.translate.setDefaultLang(SidenavComponent.activeLang);
  }

  ngOnInit(): void {
    this.getSelects();
  }

  getSelects() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.shelves = data.shelves;
      this.providers = data.providers;
      console.log(this.shelves)
      console.log(this.providers)
    })
  }

  agregar() {
    console.log(this.data)
    if (this.data['shelf'].id_shelf == 0 || this.data['provider'].id_provider == 0 ||
      this.data.name == '' || this.data.price == 0 || this.data.stock == 0) {
      this.message = 'Ingrese todos los campos *'
      this.showMessage = true;
    } else {
      this.message = '';
      this.showMessage = false;
      this.showCarga = true;
      this.data.price = Number(this.data.price);
      this.medicine_service.createMedicine(this.data).pipe(
        catchError((error) => {
          this.showCarga = false;
          console.log(error, "Error al crear");
          return empty();
        })
      ).subscribe((response) => {
        this.showCarga = false;
        console.log(response)
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/medicines']);
        });
      })
    }
  }

}
