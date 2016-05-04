# lazyload
jQuery plugin for lazy loading images, it delays the loading of images.

###Usage
You need load jQuery.

```html
<script src="jquery.js"></script>
<script src="jquery.lazyload.js"></script>
```

You shoud have width and height attributes in your tag or use CSS.

```html
<img class="lazy" data-src="img/example.jpg">
```

Then in your code: 

```javascript
$('.lazy').lazyload();
```