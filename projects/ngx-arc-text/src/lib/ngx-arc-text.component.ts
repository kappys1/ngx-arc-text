import { Component, OnInit, Input, SimpleChanges, SimpleChange, ViewChild, ElementRef, OnChanges, HostBinding } from '@angular/core';
import ArcText from 'arc-text';

@Component({
  selector: 'ngx-arc-text',
  template: `
      {{text}}
  `,
  styles: []
})
export class NgxArcTextComponent implements OnChanges {

  @Input() direction = 1;
  @Input() arc = 150;
  @Input() text = '';
  private textCyrcle;

  constructor(private letters: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    this.update();
  }

  update() {
    setTimeout(() => this.arcLetters());
  }

  private arcLetters(){
    console.log("hola");
    if(this.textCyrcle) {
      this.textCyrcle.destroy()
    }
    this.letters.nativeElement.innerHTML =this.text;
    this.textCyrcle = new ArcText(this.letters.nativeElement);

    this.textCyrcle.arc(this.arc);
    this.textCyrcle.direction(this.direction);

  }
}
