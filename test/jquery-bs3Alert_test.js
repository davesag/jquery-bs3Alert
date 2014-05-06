(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#bs3Alert', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.bs3Alert(), this.elems, 'should be chainable');
  });

  asyncTest('produces a default alert', function() {
    expect(8);
    this.elems.bs3Alert();
    $(document).trigger('show-alert', {message: 'hi there'});
    var base = this;
    setTimeout(function() {
      start();
      var alerts = $('DIV.alert'),
          firstAlert = alerts.first(),
          button = firstAlert.find('button'),
          title = firstAlert.find('strong').text(),
          html = firstAlert.html();
      strictEqual( alerts.length, base.elems.length, "There should be one alert for each element" );
      strictEqual( button.length, 1, 'expetced a close button');
      equal( title, 'Error', 'expetced the title to be "Error"');      
      ok( html.indexOf('hi there') > 0, 'expetced the text to contain "hi there"');
      ok( firstAlert.hasClass('alert-danger'), 'Expected the alert to have class "alert-danger"');
      ok( firstAlert.hasClass('fade'), 'Expected the alert to have class "fade"');
      ok( firstAlert.hasClass('in'), 'Expected the alert to have class "in"');
      ok( firstAlert.hasClass('alert-dismissable'), 'Expected the alert to have class "alert-dismissable"');
    }, 50);
  });

  asyncTest('produces a non-dismissible alert', function() {
    expect(7);
    this.elems.bs3Alert({dismissable: false});
    $(document).trigger('show-alert', {priority: 'warning', message: 'yo, way to go'});
    setTimeout(function() {
      var firstAlert = $('DIV.alert').first(),
          button = firstAlert.find('button'),
          title = firstAlert.find('strong').text(),
          html = firstAlert.html();
      strictEqual( button.length, 0, 'expetced no close button');
      equal( title, 'Warning', 'expetced the title to be "Warning"');      
      ok( html.indexOf('yo, way to go') > 0, 'expetced the text to contain "yo, way to go"');
      ok( firstAlert.hasClass('alert-warning'), 'Expected the alert to have class "alert-warning"');
      ok( !firstAlert.hasClass('alert-dismissable'), 'Expected the alert not to have class "alert-dismissable"');
      ok( !firstAlert.hasClass('fade'), 'Expected the alert not to have class "fade"');
      ok( !firstAlert.hasClass('fade'), 'Expected the alert not to have class "in"');
      start();
    }, 50);
  });

  asyncTest('produces a customised alert', function() {
    expect(7);
    this.elems.bs3Alert({fade: false, priority: 'success'});
    $(document).trigger('show-alert', {message: 'yo, way to go'});
    setTimeout(function() {
      var firstAlert = $('DIV.alert').first(),
          button = firstAlert.find('button'),
          title = firstAlert.find('strong').text(),
          html = firstAlert.html();
      strictEqual( button.length, 1, 'expetced a close button');
      equal( title, 'Success', 'expetced the title to be "Success"');      
      ok( html.indexOf('yo, way to go') > 0, 'expetced the text to contain "yo, way to go"');
      ok( firstAlert.hasClass('alert-success'), 'Expected the alert to have class "alert-success"');
      ok( firstAlert.hasClass('alert-dismissable'), 'Expected the alert to have class "alert-dismissable"');
      ok( !firstAlert.hasClass('fade'), 'Expected the alert not to have class "fade"');
      ok( !firstAlert.hasClass('fade'), 'Expected the alert not to have class "in"');
      start();
    }, 50);
  });

}(jQuery));
