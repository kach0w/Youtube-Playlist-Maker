chrome.storage.local.get(['values',], function (result) {
    
    var channel_img = document.querySelectorAll('img[class="style-scope yt-img-shadow"]')[9].src;
    console.log(channel_img);

    var channel_name = document.querySelectorAll('yt-formatted-string[class="style-scope ytd-channel-name"]')[2].innerHTML;
    var links = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-grid-video-renderer");
    var values = [].map.call(links, function (el) {
        return "https://" +  "youtube.com" + el.getAttribute("href") + "\n";
    });
    
    var outputArray = new Array(values.length);
    // console.log(outputArray);

    for(var i=0; i<values.length; i++)
        outputArray[i] = values[i];

    // console.log(channel_name);
    // console.log(values);
    // console.log(outputArray);

    var len = values.length;

    // chrome.storage.local.set({output0: channel_name}, function(){});
    // chrome.storage.local.set({output1: values}, function(){});
    chrome.storage.local.set({output_img: channel_img}, function(){});
    chrome.storage.local.set({output_name: channel_name}, function(){});
    chrome.storage.local.set({output: outputArray}, function(){});
    chrome.storage.local.set({output_length: len}, function(){});

});