### Source code

[![npm](https://badgen.net/npm/v/@babel/core)](https://github.com/Fobiya/coursecode)
*  ``port: 9017``

*  ``npm uninstall node-sass --save-dev``

#### MEDIA
``` scss
@mixin wid($size) {
   @if $size == 1500 {
    @media (min-width: 1500px) { @content; }
  } @else if $size == 1200-1499 {
    @media (min-width: 1200px) and (max-width: 1499px) { @content; }
  } @else if $size == 1200 {
    @media (min-width: 1200px) { @content; }
  } @else if $size == 992-1199 {
    @media (min-width: 992px) and (max-width: 1199px) { @content; }
  } @else if $size == 992-1300 {
    @media (min-width: 992px) and (max-width: 1130px) { @content; }
  } @else if $size == 992{
    @media (min-width: 992px) { @content; }
  } @else if $size == 991 {
    @media (max-width: 991px) { @content; }
  } @else if $size == 601-991 {
    @media (min-width: 601px) and (max-width: 991px) { @content; }
  } @else if $size == 600 {
    @media (max-width: 600px) { @content; }
  }@else if $size == 500 {
    @media (max-width: 500px) { @content; }
  }@else if $size == 450 {
    @media (max-width: 450px) { @content; }
  }@else if $size == 400 {
    @media (max-width: 400px) { @content; }
  }@else if $size == 350 {
    @media (max-width: 350px) { @content; }
  }
}

//  @include wid(1200)      {   } 
//  @include wid(992-1199)  {   } 
//  @include wid(601-991)   {   } 
//  @include wid(600)       {   } 

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

### BEFORE AFTER
``` scss
    %bef-aft{
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      position: relative;
    }

//    @extend %bef-aft;
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
      .col-md-4.col-sm-12
```
#### Link and Script
```
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


##### Copyright (c) 2020


https://devhints.io/

#### Configuration Webpack

* compress css not url in file ``build/webpack.base.conf.js``  -  `` options: { sourceMap: true  /* , url: false  */ } ``

#### Full bind - the main

* css /sass / scss - loader
* autoprefixer
* min-css
* cssnano
* pug-loader | [Open link](https://pughtml.com) converter
* html-loader
* image-webpack-loader - optimizes your images 

#### Plugins
* Slick-carousel  [Open link](https://github.com/kenwheeler/slick/)   
* Fancybox [Open link](https://github.com/fancyapps/fancybox)  
* Ionic Framework [Open link](https://ionicons.com/v2/)  
* Pixel perfect my js
* Forms validator input my js