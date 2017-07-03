(function ($) {

  const tweetContainer = $('#tweetContainer');
  const tweetSearchContainer = $('#tweetSearchContainer');

  const initTweetContainer = function initTweetContainer() {
    tweetContainer.empty();
    const header = $('<a href="#" class="list-group-item active">Tweets Timeline</a>');
    header.appendTo(tweetContainer);
  };

  const initTweetSearchContainer = function initTweetContainer() {
    tweetSearchContainer.empty();
    const header = $('<a href="#" class="list-group-item active">Tweets Search</a>');
    header.appendTo(tweetSearchContainer);
  };

  const getTimeLine = function getTimeLine() {
    $.ajax({
      url: '/tweets',
      success(data) {
        const tweets = JSON.parse(data);
        initTweetContainer();
        // console.log(data);
        for (let i = 0; i < tweets.length; i += 1) {
          const tweet = tweets[i];
          const tweetElement = $(`<a href="#" class="list-group-item">${tweet.text}</a>`);
          tweetElement.appendTo(tweetContainer);
        }
      },
    });
  };

  const tweetSearch = function tweetSearch(searchString) {
    $.ajax({
      url: `/tweets/search?search=${searchString}`,
      success(data) {
        const tweets = JSON.parse(data).statuses;
        initTweetSearchContainer();
        // console.log(data);
        for (let i = 0; i < tweets.length; i += 1) {
          const tweet = tweets[i];
          const tweetElement = $(`<a href="#" class="list-group-item">${tweet.text}</a>`);
          tweetElement.appendTo(tweetSearchContainer);
        }
      },
    });
  };

  const initSpinner = function(element) {
    const target = document.getElementById(element);
    const spinner = new Spinner({ top: '120%' }).spin(target);
  }

  initTweetContainer();
  initTweetSearchContainer();
  initSpinner('tweetContainer');
  getTimeLine();

  $('#refreshButton').click(function(e) {
    initTweetContainer();
    initSpinner('tweetContainer');
    getTimeLine();
  });

  $('#searchButton').click(function(e) {
    initTweetSearchContainer();
    initSpinner('tweetSearchContainer');
    tweetSearch($('#searchText').val());
  });

})(jQuery)
