import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      federacao: [null, [Validators.required]],
      club: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]]
    });
  }

  _submitForm(){
    //implementar)
  }

}
