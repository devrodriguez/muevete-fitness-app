import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    {
      title: 'Productos',
      url: '/product',
      icon: 'basket'
    },
    // {
    //   title: 'Contacto',
    //   url: '/contact',
    //   icon: 'book'
    // },
    {
      title: 'Rutinas',
      url: '/routine',
      icon: 'time'
    }
  ];
  
  constructor(
    private platform: Platform,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await StatusBar.show();
      await StatusBar.setStyle({ style: Style.Light });
      await SplashScreen.hide();
    });
  }

  logout(){
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('c');
    this.router.navigateByUrl('login', { replaceUrl:true });
    this.menuCtrl.close();
  }
}
