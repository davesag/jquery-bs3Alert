/*
 * jquery-bs3Alert
 * https://github.com/davesag/jq
 *
 * Copyright (c) 2014 davesag
 * Licensed under the MIT license.
 */

if (typeof jQuery === 'undefined') {
  throw 'Expected jQuery to have been loaded before this script.';
}

(function($, undefined) {
  'use strict';

  // Collection method.
  $.fn.bs3Alert = function(options) {
    var self = this,
        opts = $.extend(true, {}, $.fn.bs3Alert.options);
    if (typeof options === 'object') {
      opts = $.extend(true, opts, options);
    }
    this.options = opts;
    return this.each(function() {
      var $this = $(this);
      // $this.hide(); // it must start out hidden
      $(document).off('show-alert').on('show-alert', function(evt, data){
        var options = $.extend(true, {}, self.options, data);
        $this.empty();
        $this.append(buildAlert(options));
      });
    });
  };

  function buildAlert(options) {
    var aClass = 'alert alert-' + options.priority + 
                  (options.dismissable ? ' alert-dismissable' : ''),
        $wrapper = $('<div/>', {'class': aClass}),
        title = options.titles[options.priority];
    if (options.dismissable) {
      $wrapper.append('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>');
    }
    $wrapper.append('<strong>' + title + '</strong> ' + options.message);
   return $wrapper;
  }

  // Default options.
  $.fn.bs3Alert.options = {
    dismissable: true,
    priority: 'danger',
    titles: {
      success: 'Success',
      info:    'Information',
      warning: 'Warning',
      danger:  'Error'
    }
  };

}(jQuery));
