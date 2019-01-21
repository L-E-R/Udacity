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
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have a URL defined', () => {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('should have a name defined', () => {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', () => {

        it('should be hidden by default', () => {
            const bodyEl = document.body;
            expect(bodyEl.classList.contains('menu-hidden')).toBe(true);
        });


         it('should toggle menu visibility on click', () => {
            const bodyEl = document.body;
            const menuIconEl = document.querySelector('.menu-icon-link');

            // click to display menu slide-in
            menuIconEl.click();
            expect(bodyEl.classList.contains('menu-hidden')).not.toBe(true);

            // click to hide menu slide-in
            menuIconEl.click();
            expect(bodyEl.classList.contains('menu-hidden')).toBe(true);

         });
    });

    describe('Initial Entries', () => {

        beforeEach((done) => {
            loadFeed(0, done);
        });

        it('should have element on async completion', (done) => {
            const feedEntryEls = document.querySelector('.feed .entry');
            expect(feedEntryEls.length).not.toBe(0);
            done();
        })
    });

    describe('New Feed Selection', () => {

        let initialFeedContent,
            currentFeedContent;

        beforeEach((done) => {

            // initial load to get initial data
            loadFeed(0, () => {
                initialFeedContent = document.querySelector('.feed').innerHTML;

                // update load to get data change
                loadFeed(1, () => {
                    currentFeedContent = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('should update content on async completion', (done) => {
            expect(currentFeedContent).not.toEqual(initialFeedContent);
            done();
        });
    });

}());
