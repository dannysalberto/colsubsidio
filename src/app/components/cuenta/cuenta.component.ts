import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  public cuentaForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.cuentaForm = this.formBuilder.group({
      numero: new FormControl(''),
      saldo: new FormControl('0')
    });
  }

  onSaveForm(){
    console.log(this.cuentaForm.value);
  }

}
