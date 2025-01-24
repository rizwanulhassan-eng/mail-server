import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


  export class LoginPageComponent {
    loginForm: FormGroup;
    activeSlide = 0;
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        remember: [false],
      });
    }
  
    onSubmit(): void {
      if (this.loginForm.valid) {
        console.log('Form Data:', this.loginForm.value);
      } else {
        console.error('Form is invalid!');
      }
    }
  
    nextSlide(): void {
      this.activeSlide = (this.activeSlide + 1) % 2; // Assuming 2 slides
      this.updateSlide();
    }
  
    prevSlide(): void {
      this.activeSlide = (this.activeSlide - 1 + 2) % 2; // Assuming 2 slides
      this.updateSlide();
    }
  
    updateSlide(): void {
      const items = document.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        item.classList.toggle('active', index === this.activeSlide);
      });
    }
  }
