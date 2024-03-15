import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Output('featureSelected') feature = new EventEmitter<string>();

   constructor() { }

  ngOnInit(): void {
  }

  onSelect(featureData : string){
    this.feature.emit(featureData);
  }
}
