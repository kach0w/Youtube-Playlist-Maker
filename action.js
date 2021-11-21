document.getElementById('fillForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: "injector.js"
    });
    var test = document.getElementById("text").value;
    var test2 = document.getElementById("text2").value;
    var test3 = document.getElementById("text3").value;
    var test4 = document.getElementById("text4").value;
    var test5 = document.getElementById("text5").value;
    var test6 = document.getElementById("text6").value;
    var test7 = document.getElementById("text7").value;
    var test8 = document.getElementById("text8").value;
    var year = new Date();
    var age = year.getFullYear();
    
    var ageCalculated = age - test7;
    chrome.storage.local.set({yourValue: test}, function(){});
    chrome.storage.local.set({yourValue2: test2}, function(){});
    chrome.storage.local.set({yourValue3: test3}, function(){});
    chrome.storage.local.set({yourValue4: test4}, function(){});
    chrome.storage.local.set({yourValue5: test5}, function(){});
    chrome.storage.local.set({yourValue6: test6}, function(){});
    chrome.storage.local.set({yourValue7: test7}, function(){});
   chrome.storage.local.set({yourValue8: test8}, function(){});
   chrome.storage.local.set({ageCalculated: ageCalculated}, function(){});
  });



var a = document.getElementById('media');
a.addEventListener('change', function() {
 var media = this.value;
 chrome.storage.local.set({Media: media}, function(){});

}, false);
  
  