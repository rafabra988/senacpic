import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-foto-registro',
  templateUrl: './foto-registro.component.html',
  styleUrls: ['./foto-registro.component.css']
})
export class FotoRegistroComponent implements OnInit{

  cadForm:FormGroup;

  constructor(private formuBuilder: FormBuilder){}

  ngOnInit(): void{
    this.cadForm = this.formuBuilder.group({
      titulo:['', Validators.required],
      tituloalt:['', Validators.required],
      descricao:['', Validators.required],
      url:['', Validators.required]
    });
  }

}
