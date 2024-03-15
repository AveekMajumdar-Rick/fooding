import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedEvent = 'recipe';

  onNavigate(featureEvent: string){
    this.loadedEvent = featureEvent;
  }

}
