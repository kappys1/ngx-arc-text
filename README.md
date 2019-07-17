# ngx-arc-text

> Wrapper Library of [arc-text](https://github.com/kappys1/arc-text) to curve any text font on the web directly with angular.

[![npm version](https://badge.fury.io/js/ngx-arc-text.svg)](https://badge.fury.io/js/ngx-arc-text)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat) 
[![Build Status](https://travis-ci.org/kappys1/arc-text.svg?branch=master)](https://travis-ci.org/kappys1/arc-text)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Install

```bash
  npm install ngx-arc-text --save
```

## Examples

[Here](https://kappys1.github.io/ngx-arc-text/)


## Usage

1. Add to import Modules

```js
import { NgxArcTextModule } from 'ngx-arc-text';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxArcTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. You can use NgxArcTextComponent in your component:

```html
  <ngx-arc-text
    [text]="text"
    [arc]="arc"
    [direction]=direction
    #letters>
  </ngx-arc-text>
```

## Params
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| text | string |  | Text you want to curve |
| arc | number | 150 | Angle you want to curve |
| direction | number | 1 | 1 is clockwise mode and -1 is counter-clockwise mode |

## Function
| Name | Params | Description |
| ------ | ------ | ------ | ------ |
| update |  | Re-Render again the curve text, is necesary if you change all style in your font, for example, size or font-family. |

**how to access?**

You can see in the example the tag '#letters', so in your controller you can get the ViewChild. 

```js
  import { INgxArcTextComponent } from 'dist/ngx-arc-text';


  @ViewChild('letters') letters: INgxArcTextComponent;
```

Now you can update and see the component status.


### Author
Alex Marcos Gutierrez

### License
MIT
