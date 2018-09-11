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

  it('loadFeed completes', function (done) {
    const feed = document.querySelector('.feed');
    expect(feed.children.length > 0).toBe(true);
    done();
  });
});

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
