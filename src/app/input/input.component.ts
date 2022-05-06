import { Component, OnInit, Input } from '@angular/core'; //9
import { FormControl } from '@angular/forms'; //10

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  //11
  @Input() control!: any;
  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
