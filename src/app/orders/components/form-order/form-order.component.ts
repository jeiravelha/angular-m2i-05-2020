import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  public form: FormGroup;
  public states = Object.values(StateOrder);
  @Input() init = new Order();
  @Output() formSubmited : EventEmitter<Order> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client:[
        this.init.client,
        Validators.required
      ],
      nbjours:[
        this.init.nbJours,
        Validators.compose([Validators.required, Validators.min(1), Validators.max(365)])
      ],
      tjmHt:[this.init.tjmHt],
      state:[this.init.state]
    }
    );
  }

  public onSubmit(){
    this.formSubmited.emit(this.form.value);
  }

}
