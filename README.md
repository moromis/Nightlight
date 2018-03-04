# Nightlight

## Simple script in two pieces to toggle the lights on your website

### To use:
<br/>

1. Download the repository.

<br/>

2. Put the following code in the headers of the html pages you want to support lights-off -on functionality:
```javascript
<!-- nightlight -->
<script src="nightlight.js"></script>
```

<br/>

3. Put the following code at the bottom of all your html pages:
```javascript 
<!-- nightlight listener -->
<script src="nightlight_listener.js"></script>
```

<br/>

4. Make a button or some sort of clickable element somewhere in your code for each page that 
you want to support Nightlight functionality, and give it:
```html
id=nightlight
```

<br/>

And you're done! Wasn't that easy?

