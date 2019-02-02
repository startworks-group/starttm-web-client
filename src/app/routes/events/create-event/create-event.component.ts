import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  formEvent: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formEvent = this.fb.group({
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
