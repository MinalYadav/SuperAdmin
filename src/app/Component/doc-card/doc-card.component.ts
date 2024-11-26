import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doctor } from '../../Models/doctor.model';
// import routerLink
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doc-card',
  standalone: true,
  imports: [],
  templateUrl: './doc-card.component.html',
  styleUrl: './doc-card.component.css',
})
export class DocCardComponent {
  @Input() doctor!: Doctor;
  @Input() currentDoctor!: Doctor;

  // printDoctor(){
  //   console.log(this.doctor);
  //   console.log(this.currentDoctor);
  // }

  @Output() onClick = new EventEmitter();

  Click() {
    // console.log('doc-card');
    this.onClick.emit();
  }

  // @Output() seletedDoctor  = new EventEmitter();

  // selectDoctor() {
  //   this.seletedDoctor.emit(this.doctor);
  // }
}
