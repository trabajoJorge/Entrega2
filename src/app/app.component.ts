import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Entrega2';
  constructor(){}

  miFormulario= new FormGroup({
    userEmail : new FormControl('', Validators.email),
    userPass : new FormControl('', Validators.required)
  });

}
