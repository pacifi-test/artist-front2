import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {
  user = {
    name: 'Prueba Angular'
  };
  currentTheme = new FormControl('')
  themes = [
    'default',
    'dark',
    'cosmic',
    'corporate',
  ]

  constructor(
    private authService: NbAuthService,
    private router: Router,
    protected tokenService: NbTokenService,
    private themeService: NbThemeService
  ) {
    this.currentTheme.setValue(this.themeService.currentTheme);

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken | any) => {
        if (token.isValid()) {
          this.user = token.getPayload().user; // here we receive a payload from the token and assigns it to our `user` variable
        }
        this.authService.onAuthenticationChange().subscribe(res => {

        })

      });
  }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout('real').subscribe(res => {
    //   res.isSuccess() && this.router.navigate(['/auth']);
    // });
    this.tokenService.clear();
    this.router.navigate(['/auth']);

  }

  changeTheme(theme: string) {
    this.themeService.changeTheme(theme);
  }

}

