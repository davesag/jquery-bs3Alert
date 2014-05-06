# bs3Alert

A simple jQuery plugin that makes and shows repeatable Bootstrap 3 alerts.

## Download it

Either clone this repository or download the [production 'minified' version][min]
or the [development version][max] depending on your need.

[min]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.min.js
[max]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.js

## Why did I write this?

Bootstrap 3 is great but their Alerts annoy me. They are perfect for old-style websites that load page, 
show a message, and then go away.  But if you do a lot of AJAX / Websockets work, then you might want to 
display a variety of alerts based on responses from a server, which, when closed by the user, ought not 
be completely removed from the page.

The **bs3Alert** plugin generates a standard Bootstrap 3 Alert, close handler and all (if you wish),
but makes it trivial to spit out new alerts when you need them, entirely programmtically.  All you need to
do it supply a container `DIV` to attach it to.

### Why else did I write this?

I was very keen to learn about `Grunt` and `Qunit` and learn how to propely unit test a jQuery plugin
from scratch.  And in a project I'm doing for work, I needed a Bootstrap Alert that didn't destroy itself when
closed.  I had a look at the [jquery-bs-alerts](https://github.com/eltimn/jquery-bs-alerts) project
but my attempt to use it turned up some bugs and after a few hours of trying to fix it myself, I decided it would
be easier, and more educational, to simply write my own.

## Documentation

The simplest possible example looks a lot like this:

Assuming you've loaded jQuery and Bootstrap 3 in your page.

```html
<script src="dist/jquery-bs3Alert.min.js"></script>
<div id="my-alert-goes-here"></div>
<script>
$(document).ready(function(){
  $("#my-alert-goes-here").bs3Alert();
  $(document).trigger('show-alert', {
    message: 'Help! Something bad happened.'
  })
})

</script>
```

### Options

You can pass in options when you create it as follows:

```javascript
$(document).ready(function(){
  $("#my-alert-goes-here").bs3Alert({
    dismissable: true,
    fade:        true,
    priority:    'danger',
    titles: {
      success: 'Success',
      info:    'Information',
      warning: 'Warning',
      danger:  'Error'
    }
  });
  $(document).trigger('show-alert', {
    message: 'How very sweet!'
  })
})
```

* `dismissable` :if true the alert will contain a close button.
* `fade`: if true the alert will fade out when closed.
* `priority`: the default priority.  One of 'success', 'info', 'warning', or 'danger'.
* `titles` : the text to display for any given priority. The priorities match those from Bootstrap 3.

You can also pass options in with the message when you `trigger` the `show-alert` event. eg:

```javascript
$(document).trigger('show-alert', {
  priority: 'warning',
  message: 'Please be careful',
  dismissable: false
})
```

### It's a standard Bootstrap 3 Alert

Which means you can bind alert close events just like normal,
but with the advantage that the alert can be easily re-opened.
This makes it excellent for displaying errors on web pages that
are the result of ajax calls.

### It's tiny.

The [Minified file][min] is only 1.19 kB.

## Release History

1. First Commit - The basic framework is up, including gruntfile, and quint tests.
2. It Works - The core plugin works
3. Enhanced tests and added fade - You can now fade the alert as it closes.
4. **Version 1** released. 😍
