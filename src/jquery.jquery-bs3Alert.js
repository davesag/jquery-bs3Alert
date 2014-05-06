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
    var opts = $.extend(true, {}, $.fn.bs3Alert.options);
    if (typeof options === 'object') {
      opts = $.extend(true, opts, options);
    }
    
    return this.each(function(i) {
      var $this = $(this);
      $this.hide(); // it must start out hidden
      $this.on('show', null, opts, function(evt){
        var options = evt.data;
        console.debug('show alert for element', i, $this, 'with options', options);
      });
    });
  };

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
