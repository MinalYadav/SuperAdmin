import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insurance-company',
  standalone: true,
  imports: [],
  templateUrl: './insurance-company.component.html',
  styleUrl: './insurance-company.component.css'
})
export class InsuranceCompanyComponent {

  constructor(private modal:NgbModal) { }

  onClick(content:any){
    this.modal.open(content,{
      // ariaLabelledBy:'model-title',
      ariaLabelledBy:'modal-header',
      centered:true,
      backdrop:'static',
      keyboard:false,
    })
  }
}
