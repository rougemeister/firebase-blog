import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../../../environment';
import { AuthService } from '../../services/auth.service';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AngularFireAuthModule, AngularFireModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onSubmit() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  async googleSignIn() {
    try {
      await this.authService.googleSignIn();
      console.log('Google sign-in successful');
    } catch (error) {
      console.error('Google sign-in failed', error);
    }
  }

}
