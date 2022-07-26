document.getElementById('doAction').addEventListener('click', function(){
    document.getElementById('doAction').style = "display:none";
    chrome.tabs.executeScript({
      file: "content-script.js"
    });
    chrome.storage.local.get(['output_img', 'output_name', 'output', 'output_length'], function (result) {

      var channel = document.getElementById("channel-name");  
      var links = document.getElementById("links");

      var imgs = document.getElementById('imgs');
      var pic = document.createElement('img');
      var picsrc = result.output_img;
      pic.src = picsrc;
      console.log(picsrc);
      imgs.appendChild(pic);

      channel.innerHTML = result.output_name;
      console.log(result.output_length);
      for(var i=0; i<result.output_length; i+=1){
        var currLink = result.output[i];
        // console.log(currLink)
        var a = document.createElement('a');
        a.href = currLink;
        a.innerHTML = currLink;
        links.appendChild(a);
        // console.log(a);
      }


      // console.log(channel);
      // console.log(links);
    });
});

// var links = document.getElementById("links");

