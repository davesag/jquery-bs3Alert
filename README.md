# Bs3Alert

A simple jQuery plugin that makes and shows repeatable Bootstrap 3 alerts.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.min.js
[max]: https://raw.github.com/davesag/jq/master/dist/jquery-bs3Alert.js

In your web page's body, assuming you've installed jQuery and Bootstrap 3:

```html
<script src="dist/jquery-bs3Alert.min.js"></script>
<div id="my-alert-goes-here"></div>
<script>
$(document).ready(function(){
  $("#my-alert-goes-here").bs3Alert();
  $(document).trigger('open', {
    priority: 'danger',
    message: 'Help! Something bad happened.'
  })
})

</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History

1. First Commit - The basic framework is up, including gruntfile, and quint tests.
