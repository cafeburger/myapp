import "reflect-metadata";
import {Component} from "@angular/core";
import {FormBuilder, ControlGroup, Validators} from "@angular/common";
import {Parties} from "../../../collections/parties.ts";

@Component({
  selector: 'parties-form',
  templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm {
  partiesForm:ControlGroup;

  constructor() {
    let fb = new FormBuilder();
    this.partiesForm = fb.group({
      name: ['Bob', Validators.required],
      description: [''],
      location: ['', Validators.required]
    });
  }

  addParty(party) {
    if (this.partiesForm.valid) {
      Parties.insert({
        name: party.name,
        description: party.description,
        location: party.location
      })
    }
    (this.partiesForm.controls['name']).updateValue('');
    (this.partiesForm.controls['description']).updateValue('');
    (this.partiesForm.controls['location']).updateValue('');
  }
}