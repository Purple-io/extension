document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('myButton');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
        var newURL = "https://purple-io.github.io/new-chat/";
  		chrome.tabs.create({ url: newURL });
      });
    }, false);
  }, false);