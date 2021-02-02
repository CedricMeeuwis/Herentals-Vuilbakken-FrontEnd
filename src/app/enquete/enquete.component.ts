import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../enquete-edit/enquete.service';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {

  json = null;

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit(): void {
    this.enqueteService.getActiveEnquete().subscribe(val => {
      this.json = JSON.parse(val.jsonData);
    });
  }

}
