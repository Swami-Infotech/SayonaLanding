import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SayonaService } from '../sayona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  landingpagedata:any;


  SliderImage:string = '';
  Slider2Image:string = '';
  Slider3Image:string = '';

  ngOnInit(): void {
    this.getalldata();
  }

  constructor(private service:SayonaService){}





  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 2 },
      940: { items: 3 }
    },
    nav: false
  }


  customOptions4: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 2 },
      940: { items: 3 }
    },
    nav: false
  }


  customOptions5: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 }
    },
    nav: false
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('mainheader');
    if (window.scrollY > 50) { // Use window.scrollY to get the vertical scroll position
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }



  getalldata(){
    this.service.GetAllData().subscribe(
      (Response:any)=>{
        this.landingpagedata = Response;

        this.SliderImage = `url(${Response.Slider1})`;
        this.Slider2Image = `url(${Response.Slider2})`;
        this.Slider3Image = `url(${Response.Slider3})`;
      }
    )
  }




}
