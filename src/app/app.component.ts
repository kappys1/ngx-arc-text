import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import { INgxArcTextComponent } from 'dist/ngx-arc-text'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-arc-text'
  text = 'this is a example'
  arc = 150

  class = ''
  classes = [
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Roboto Mono', value: 'Roboto-mono' },
    { name: 'Montserrat', value: 'Montserrat' },
    { name: 'Mountains of Christmas', value: 'Mountains' }
  ]

  direction = ''
  directions = [
    { name: 'clockwise', value: 1 },
    { name: 'counter-clockwise', value: -1 }
  ]

  @ViewChild('letters') letters: INgxArcTextComponent

  ngOnInit() {
    console.log(this.letters)
  }

  updateLetters() {
    this.letters.update()
  }
}
