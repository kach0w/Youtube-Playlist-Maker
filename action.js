document.getElementById('doAction').addEventListener('click', function(){
  chrome.tabs.executeScript({
    file: "injector.js"
  }, function (result) {
    
    document.getElementById("channel-name").innerHTML = result[0];
    console.log(result[0]);
  });
});

var channel = document.getElementById("channel-name");
var links = document.getElementById("links");
console.log(channel);
function returnArray(resultsArray){
  console.log(resultsArray);
  document.getElementById("channel_name").innerHTML = resultsArray[0];
  document.getElementById("links").innerHTML = resultsArray[1];
}