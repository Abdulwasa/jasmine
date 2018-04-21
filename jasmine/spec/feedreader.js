/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // I use map methode to get inside each allFeeds object
        allFeeds.forEach(e => {
            it('url defined', function() {
                expect(e.url).toBeDefined(); // get url inside each allFeeds
                expect(typeof e.url).toBe("string");
                expect(e.url.length).toBeGreaterThan(0);
                expect(e.url).toMatch(/^(http|https):\/\//);
            });
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // I use map methode to get inside each allFeeds object
        allFeeds.forEach(e => {
            it('name defined', function() {
                expect(e.name).toBeDefined(); // get name inside each allFeeds
                expect(e.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    // created a new menu
    describe('the new menu', function() {
        var body = document.body;
        it('the menu is hidden by default', function() {
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // hidding the menu
        it('hidding and showing by click', function() {
            $('.menu-icon-link').click();
            expect(body.classList.contains("menu-hidden")).toEqual(false);
            /* TODO: Write a test that ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */
            // showing the menu

            $('.menu-icon-link').click();
            expect(body.classList.contains("menu-hidden")).toEqual(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it("intial Entries are done", function(done) {
            var feeds = document.querySelector('.feed').getElementsByClassName('entry');
            expect(feeds.length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('feed selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feed1;
        beforeEach(function(done) {
            loadFeed(1, function() {
                feed1 = $('.feed').html();
                loadFeed(2, done());
            });
        });

// check the content
        it("changs content", function(done) {
            var feed2 = $('.feed').html();
            expect(feed1).toBe(feed2);
            done();
        });
    });

}());
