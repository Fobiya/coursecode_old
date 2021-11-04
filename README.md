### Fobiya Source code

[![npm](https://badgen.net/npm/v/@babel/core)](https://github.com/Fobiya/coursecode)


*  ``npm uninstall node-sass --save-dev``
* add mixin @media
* add includ SVG link and scss b64


*  @include wid(1200-1499) {   } 
*  @include wid(1200)      {   } 
*  @include wid(992-1199)  {   } 
*  @include wid(601-991)   {   } 
*  @include wid(600)       {   } 

* ------------------------------------

*  @include wid(1500) {   }  >
*  @include wid(1200) {   }  >
*  @include wid(992)  {   }  >
*  @include wid(991)  {   }  <
*  @include wid(600)  {   }  <


*  @include wid(500)  {   }  <
*  @include wid(450)  {   }  <
*  @include wid(400)  {   }  <
*  @include wid(350)  {   }  <




### Table
```
section.name__1.section__
  .container
    .row
      .col-md-4.col-sm-12
```
### Link and Script
```
link(rel='stylesheet', href='css/style.css')

script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js')
```
### Picture
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