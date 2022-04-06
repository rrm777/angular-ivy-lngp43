import { Component, VERSION, OnInit } from '@angular/core';
import { GetApiService} from './get-api.service'
import { Router } from '@angular/router';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major; 
  isAuthenticated: boolean;
  constructor(private api:GetApiService,
              private router: Router,
              private cognitoService: CognitoService) {
    this.isAuthenticated = false;
  }
  public ngOnInit(): void {
    this.cognitoService.isAuthenticated()
    .then((success: boolean) => {
      this.isAuthenticated = success;
      this.api.apiCall().subscribe((data)=>{
        console.warn("get api data", data);
        var obj = JSON.parse(data['body']);
        var res = [];
                
        for(var i in obj)
          res.push(obj[i]);
        this.name=res[0];
      })
    });
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }
  
}
