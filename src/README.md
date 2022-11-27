### Source code SRC/SCSS Fobiya

[![npm](https://badgen.net/npm/v/@babel/core)](https://github.com/Fobiya/coursecode_old)

https://nodejs.org/download/release/v14.16.0/


 [MEDIA](https://github.com/Fobiya/coursecode_old/#MEDIA) 
 [GRID](https://github.com/Fobiya/coursecode_old/#GRID) 
 [BEFORE-AFTER](https://github.com/Fobiya/coursecode_old/#BEFORE-AFTER) 
 [FONT](https://github.com/Fobiya/coursecode_old/#FONT) 
 [BUTTON](https://github.com/Fobiya/coursecode_old/#BUTTON) 
 [Table](https://github.com/Fobiya/coursecode_old/#Table) 
 [Link-and-Script](https://github.com/Fobiya/coursecode_old/#Link-and-Script) 
 [Picture](https://github.com/Fobiya/coursecode_old/#Picture) 
 [Form](https://github.com/Fobiya/coursecode_old/#Form) 


*  ``npm uninstall node-sass --save-dev``
*  ``port: 9007``

##### Copyright (c) 2022


#### MEDIA
``` scss
@mixin wid($size) {
   @if $size == 1500 {
    @media (min-width: 1500px) { @content; 
     content: '1500px > ';  }
  } @else if $size == 1200-1499 {
    @media (min-width: 1200px) and (max-width: 1499px) { @content;  content: '1200-1499'; }
  } @else if $size == 1200 {
    @media (min-width: 1200px) { @content;  content: '1200 > ';  }
  } @else if $size == 992-1199 {
    @media (min-width: 992px) and (max-width: 1199px) { @content; content: '992-1199'; }
  } @else if $size == 992-1300 {
    @media (min-width: 992px) and (max-width: 1130px) { @content; content: '992-1300';  }
  } @else if $size == 992{
    @media (min-width: 992px) { @content; content: '992 > ';  }
  } @else if $size == 991 {
    @media (max-width: 991px) { @content; content: '991 < '; }
  } @else if $size == 601-991 {
    @media (min-width: 601px) and (max-width: 991px) { @content; content: '601-991'; }
  } @else if $size == 600 {
    @media (max-width: 600px) { @content; content: '600 > '; }
  }@else if $size == 500 {
    @media (max-width: 500px) { @content; content: '500 > '; }
  }@else if $size == 450 {
    @media (max-width: 450px) { @content; content: '450 > '; }
  }@else if $size == 400 {
    @media (max-width: 400px) { @content; content: '400 > '; }
  }@else if $size == 350 {
    @media (max-width: 350px) { @content; content: '350 > '; }
  }
}


// ------------------------------------

//  @include wid(1500) {   }  >
//  @include wid(1200) {   }  >
//  @include wid(992)  {   }  >
//  @include wid(991)  {   }  <
//  @include wid(600)  {   }  <


//  @include wid(500)  {   }  <
//  @include wid(450)  {   }  <
//  @include wid(400)  {   }  <
//  @include wid(350)  {   }  <
```

``` scss
@include wid(992)      {  }
@include wid(601-991)  {  }
@include wid(600)      {  }

```

### GRID 
``` scss
 &>.container>.row:nth-child(1)>div:nth-child(1){
   
 &>.container:nth-child(1)>.row:nth-child(1)>div:nth-child(1){

```


### BEFORE-AFTER
``` scss
  %bef-aft{
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    position: relative;
  }

//  @extend %bef-aft;


  &:before{
    @extend %bef-aft;

    background: url(../img/logo.svg) no-repeat;

    width: 37px;
    height: 37px;
    margin-left: 14px;
  }


```


### FONT
``` scss
color: #5D4060;
margin-bottom: 5px;
letter-spacing: -.001em;

@include wid(992)  {  font: 900 20px/1.2em var(--l); }
@include wid(601-991)  {  font: 900 16px/1.2em var(--l); }
@include wid(600)  {  font: 900 14px/1.2em var(--l); }


```


#### BUTTON
``` scss
 %button { }

 .new_button{
    @extend %button;
 }
```   

#### Table
```
section.name__1.section__
  .container
    .row
      .col.m12.s12.l12.xl12
```

#### Link-and-Script
```
a(href='javascript:;') 

link(rel='stylesheet', href='css/style.css')

script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js')

```

#### Picture
```
picture
  source(srcset='img/', media='(min-width: 801px)')
  source(srcset='img/', media='(max-width: 800px)')
  img.images(srcset='img/', alt='images_1')
  
```

#### Form
```
form(method='POST', action='javascript:void(null);')
  // Hidden Required Fields
  .form_input
    span.field
      input.name(type='text', name='name', required='', value='', placeholder='Name')
  .form_input
    span.field
      input.mail(type='email', name='email', required='', value='', placeholder='Email')
  .form_input
    span.field
      input.ferstname(type='text', name='subject', required='', value='', placeholder='Subject')
  .form_input
    span.field
      textarea.textarea(name='message', required='', value='', placeholder='Message')

  button.blue(type='submit', name='send') SEND
  
```