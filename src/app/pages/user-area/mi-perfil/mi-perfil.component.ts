import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import dateFormat, { masks } from "dateformat";

import { LocalCustomersService } from '../../../services/local-customers.service';
import { CustomersService } from '../../../services/customers.service';

import { Customers } from '../../../interfaces/customers.interface';
import { LocalCustomers } from '../../../interfaces/local-customers.interface'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit, OnDestroy {
  public formCustomer!: FormGroup;

  public screenActiveClave: boolean = false;
  public classDatosPersonales: string = 'pestaniaActiva';
  public classCambiarClave: string = 'classPointer';


  constructor(
        private spinner: NgxSpinnerService,
        private fb: FormBuilder,
        private customersService: CustomersService,
        private localCustomersService: LocalCustomersService
    ) { }


  private subscription: Subscription[] = [];

  dataRequest: Customers = {
    account_state: '',
    account_state_message: '',
    age:  '',
    address:  '',
    birth_date:  '',
    card_type:  '',
    card_type_message:  '',
    city:  '',
    county:  '',
    delay_step:  '',
    dv:  '',
    mail:  '',
    name:  '',
    phone:  '',
    rut:  '',
  }

  listCustomer: any;
  rut: string = ''
  dv: string = ''

  ngOnInit(): void {
    this.spinner.show();
    this.formCustomer = this.fb.group({
      age: [''],
      address: [''],
      birth_date: [''],
      card_type: [''],
      card_type_message: [''],
      city: [''],
      county: [''],
      delay_step: [''],
      mail: [''],
      name: [''],
      phone: [''],
      rut: ['']
    })

    this.rut = '18369890'
    this.dv = '7'

// 11086413 2 birth_date: "07-07-1966"
// 17158608 9 birth_date: "23-03-1989"  falla
// 7866355 3 birth_date: "21-07-1955"   falla


    this.getCustomersByRut()

  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  

  navigateToCambiarClave(): void {
    this.screenActiveClave = true;
    this.classCambiarClave = 'pestaniaActiva'
    this.classDatosPersonales = 'classPointer'
  }

  navigateToDatosPersonales(): void {
    this.screenActiveClave = false;
    this.classCambiarClave = 'classPointer'
    this.classDatosPersonales = 'pestaniaActiva'
  }

  async getCustomersByRut() {
    this.customersService.getCustomersByRut(this.rut, this.dv)
    .pipe(
      tap(res => {
        this.dataRequest = res;
        console.log(this.dataRequest)
        this.PrepDatos()

        // this.getListCustomers()

      } )
    )
    .subscribe({
    });
  }

  async getListCustomers() {
    this.localCustomersService.getAllLocalCustomers()
    .pipe(
      tap(res => {
        this.listCustomer = res;
        console.log(this.listCustomer)
        // this.PrepDatos()

      } )
    )
    .subscribe({
    });
  }

  async PrepDatos() {
    await this.fillDatosForm()
  }

  async fillDatosForm() {

    console.log("this.dataRequest.birth_date", this.dataRequest.birth_date)

    // console.log(this.dateToYMD(new Date(this.dataRequest.birth_date.getDate(),this.dataRequest.birth_date.getMonth(),this.dataRequest.birth_date.getDay()))); // Nov 5

    // let dia: Date = this.dataRequest.birth_date.getDay
    // console.log("dia", dia.getDate())
    try {
      let fNacimiento: Date = new Date(this.dataRequest.birth_date)
      console.log("fNacimiento", fNacimiento)

      let fNacimiento2: string
      fNacimiento = new Date(this.dataRequest.birth_date);

      fNacimiento2 =  dateFormat(fNacimiento, 'yyyy-mm-dd');
      console.log("fNacimiento2", fNacimiento2)

      this.formCustomer = this.fb.group({
        age: this.dataRequest.age,
        address: this.dataRequest.address,
        birth_date: fNacimiento2,
        card_type: this.dataRequest.card_type,
        card_type_message: this.dataRequest.card_type_message,
        city: this.dataRequest.city,
        county: this.dataRequest.county,
        delay_step: this.dataRequest.delay_step,
        mail: this.dataRequest.mail,
        phone: this.dataRequest.phone,
        name: this.dataRequest.name,
        rut: this.dataRequest.rut + '-' + this.dataRequest.dv
      })

    }
    catch {
      this.formCustomer = this.fb.group({
        age: this.dataRequest.age,
        address: this.dataRequest.address,
        birth_date: this.dataRequest.birth_date,
        card_type: this.dataRequest.card_type,
        card_type_message: this.dataRequest.card_type_message,
        city: this.dataRequest.city,
        county: this.dataRequest.county,
        delay_step: this.dataRequest.delay_step,
        mail: this.dataRequest.mail,
        phone: this.dataRequest.phone,
        name: this.dataRequest.name,
        rut: this.dataRequest.rut + '-' + this.dataRequest.dv
      })

    }

    this.spinner.hide()

  }

  dateToYMD(date: Date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}



}
