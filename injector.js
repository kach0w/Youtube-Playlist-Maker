chrome.storage.local.get(['values',], function (result) {
    var channel_name = document.querySelectorAll('yt-formatted-string[class="style-scope ytd-channel-name"]')[0].innerText;
    var links = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-grid-video-renderer");
    var values = [].map.call(links, function (el) {
        return "youtube.com" + el.getAttribute("href");
    });

    console.log(channel_name);
    console.log(values);

    var return_array = [channel_name, values];
    return return_array;
});