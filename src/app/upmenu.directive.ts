import { Directive, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpmenu]',
  host: {
    '(mouseenter)': 'onMouseEnter()'
  }
})
export class UpmenuDirective {

  private _marginTop: number = 0;


  constructor(private el: ElementRef, private rederer: Renderer2) {
    let  onScroll = () => {
      if (window.innerWidth > 991)
        this._marginTop = window.pageYOffset;
      else
        this._marginTop = 0;
    }
    window.addEventListener('scroll', onScroll);
  }


  @HostBinding("style.margin-top")
  get marginTop() {
    return (this._marginTop + 'px');
  }

  onMouseEnter() {
    console.log(this.el);

  }
}
