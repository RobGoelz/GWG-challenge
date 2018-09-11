/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function, since some of these tests may require DOM elements. We want to ensure they don't run until the DOM is ready. */
$(function () {
  /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
  describe('RSS Feeds', function () {

    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('has valid URLs', function () {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe(0);
      }
    });

    it('has names defined', function () {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe(0);
      }
    });
  });

  describe('The menu', function () {

    it('has menu element hidden', function () {
      expect($('.menu-hidden')).toBeDefined(true);
    });

    it('menu changes visibility on click', function () {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function () {
    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });

    // found that Matthew Cranford had an excellent solution to
    // contain .feed class in a variable
    // but liked the toBeGreaterThan matcher used by
    // Benjamin Cunningham, and refactored with it
    // see the following for details:
    // https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/
    // https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
    it('loadFeed completes', function (done) {
      const feed = document.querySelector('.feed');
      expect(feed.children.length).toBeGreaterThan(0);
      done();
    });
  });

  describe('New Feed Selection', function () {
    let feed0Entries;
    let feed1Entries;

    // found the advice from Benjamin Cunningham to be most
    // effective for this, see:
    // https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
    beforeEach(function (done) {
      loadFeed(0, function () {
        feed0Entries = $('.feed.children.text');
        done();
      });
      loadFeed(1, function () {
        feed1Entries = $('.feed.children.text');
        done();
      });
    });

    it('content changes', function() {
      const feed = document.querySelector('.feed');
      expect(feed0Entries).not.toBe(feed1Entries);
    });
  });
}());
