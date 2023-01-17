import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {
  user = {
    name: 'Prueba Angular'
  };

  constructor(
    private authService: NbAuthService,
    private router: Router
  ) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken | any) => {

        // if (token.isValid()) {
        //   this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        // }
        this.authService.onAuthenticationChange().subscribe(res => {

        })

      });
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout('dummy').subscribe(res => {
      res.isSuccess() && this.router.navigate(['/auth']);
    });
  }

}
