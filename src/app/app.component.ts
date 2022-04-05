import { Component, VERSION } from '@angular/core';
import { GetApiService} from './get-api.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major; 
  constructor( private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>{
      console.warn("get api data", data);
      this.name=data['first'];
    })
  }
}
