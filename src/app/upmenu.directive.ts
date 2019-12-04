import { Directive, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpmenu]',
  host: {
    '(mouseenter)': 'onMouseEnter()'
  }
})
export class UpmenuDirective {

  private top: number = 0;


  constructor(private el: ElementRef, private rederer: Renderer2) {
    let  onScroll = () => {
      if (window.innerWidth > 767)
        this.top = window.pageYOffset;
      else
        this.top = 0;
    }
    window.addEventListener('scroll', onScroll);
  }
  @HostBinding("style.position") get position(){
    return "relative"
  }

  @HostBinding("style.top")
  get marginTop() {
    return (this.top + 'px');
  }

  onMouseEnter() {
    console.log(this.el);

  }
}
