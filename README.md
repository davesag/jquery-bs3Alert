# Bs3Alert

A simple jQuery plugin that makes and shows repeatable Bootstrap 3 alerts.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.min.js
[max]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.js

## Documentation
_(Coming soon)_

## Examples

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

#### Options

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

* `dismissable` : if true the alert will contain a close button.
* `priority`: the default priority.  One of 'success', 'info', 'warning', or 'danger'.
* `titles` : the text to display for any given priority.

You can also pass options in with the message when you `trigger` the `show-alert` event. eg:

```javascript
$(document).trigger('show-alert', {
  priority: 'warning',
  message: 'Please be careful',
  dismissable: false
})
```

#### It's a standard Bootstrap 3 Alert

Which means you can bind alert close events just like normal,
but with the advantage that the alert can be easily re-opened.
This makes it excellent for displaying errors on web pages that
are the result of ajax calls.

## Release History

1. First Commit - The basic framework is up, including gruntfile, and quint tests.
2. It Works - The core plugin works
3. Enhanced tests and added fade - You can now fade the alert as it closes.
