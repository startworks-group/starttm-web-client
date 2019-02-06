import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-federation-form',
  templateUrl: './federation-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

//MODIFICAR O NECESSÁRIO DE ACORDO COM OS PARÂMETROS DO MODEL FEDERATION! AINDA NÃO ESTÁ PRONTO, O MESMO VALE PARA O HTML

export class FederationFormComponent implements OnInit {
  formFederation: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formFederation = this.fb.group({
      federacao: [null, [Validators.required]],
      initials: [null, [Validators.required]],
      uf: [null, [Validators.required]]
    });
  }

  _submitForm(){
    //implementar)
  }

}
