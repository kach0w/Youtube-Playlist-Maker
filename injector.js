chrome.storage.local.get(['yourValue', 'yourValue2', 'yourValue3', 'yourValue4', 'yourValue5', 'yourValue6', 'yourValue7', 'Media', 'yourValue8', 'ageCalculated'], function (result) {
    // your value is in result.yourValue

    if (result.Media === "Facebook") {
        document.querySelector('[name="firstname"]').value = result.yourValue;
        document.querySelector('[name="lastname"]').value = result.yourValue2;
        document.querySelector('[name="reg_email__"]').value = result.yourValue3;
        document.querySelector('[name="reg_passwd__"]').value = result.yourValue4;
        document.querySelector('[name="birthday_month"]').value = result.yourValue5;
        document.querySelector('[name="birthday_day"]').value = result.yourValue6;
        document.querySelector('[name="birthday_year"]').value = result.yourValue7;
    }

    if (result.Media === "Instagram") {

        document.querySelector('[name="emailOrPhone"]').value = result.yourValue3;
        document.querySelector('[name="fullName"]').value = result.yourValue + " " + result.yourValue2;
        document.querySelector('[name="username"]').value = result.yourValue8;
        document.querySelector('[name="password"]').value = result.yourValue4;
    }

    if (result.Media === "Twitter") {


        document.querySelector('[name="name"]').value = result.yourValue + " " + result.yourValue2;
        document.querySelector('[name="email"]').value = result.yourValue3;
        document.getElementById("SELECTOR_1").value = result.yourValue5;
        document.getElementById("SELECTOR_2").value = result.yourValue6;
        document.getElementById("SELECTOR_3").value = result.yourValue7;
    }

    if (result.Media === "LinkedIn") {
        document.querySelector('[name="email-address"]').value = result.yourValue3;
        document.querySelector('[name="password"]').value = result.yourValue4;
    }

    if (result.Media === "Pinterest") {
      
        document.querySelector('[name="id"]').value = result.yourValue3;
        document.querySelector('[name="password"]').value = result.yourValue4;

        document.querySelector('[name="age"]').value = result.ageCalculated;
    }










});