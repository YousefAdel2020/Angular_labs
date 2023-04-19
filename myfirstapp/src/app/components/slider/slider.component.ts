import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imgArr=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg"];
  index=0;
  imgSrc=this.imgArr[this.index];
  slidevalue:any;
  prev()
  {
    if(this.index>0)
    this.imgSrc=this.imgArr[--this.index];
  }
  next()
  {
    if(this.index<2)
    this.imgSrc=this.imgArr[++this.index];
  }
  slide()
  {
    this.slidevalue=setInterval(()=>{
      this.imgSrc=this.imgArr[(++this.index)%3];
     
    },1000)
  }
  stop()
  {
  clearInterval(this.slidevalue);
  }
}
