import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'clienteForm',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  public clienteForm: FormGroup;
  public cliente:Cliente;


  constructor(private formBuilder: FormBuilder,
              private clienteService:ClienteService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=+this.route.snapshot.paramMap.get('id');
    if (id>0){
      this.showCliente(id);
    }
    this.buildForm();
  }

  private buildForm(){
    this.clienteForm = this.formBuilder.group({
      /*nombre: new FormControl('',[Validators.requiredTrue,Validators.minLength(2),Validators.maxLength(30)]),
      direccion: new FormControl('',[Validators.requiredTrue,Validators.minLength(10),Validators.maxLength(50)]),
      telefono: new FormControl('',[Validators.requiredTrue,Validators.minLength(5),Validators.maxLength(12)])*/
      nombre: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl('')
    });
  }

  onClearForm(){
    this.clienteForm.reset();
  }

  onSaveForm(){
      console.log(this.clienteForm.value);

      let cliente: Cliente;
      cliente = {
        nombre: this.clienteForm.get('nombre').value,
        direccion: this.clienteForm.get('direccion').value,
        telefono: this.clienteForm.get('telefono').value
      }
      this.clienteService.saveCliente(cliente).subscribe((response:any)=>{
        console.log(response);
      })
      this.router.navigate(['gridcliente']);
  }

  showCliente(id:number){
      this.clienteService.getCliente(id).subscribe((response:any)=>{
        this.cliente =  response;
        this.clienteForm.patchValue(this.cliente);

      })
  }

  public getError() {
    let error = new Object();
    const control = this.clienteForm;
    console.log(control.controls);


  }

  get nombre () {return this.clienteForm.get('nombre')};
  get direccion () {return this.clienteForm.get('direccion')};
  get telefono () {return this.clienteForm.get('telefono')};

}
