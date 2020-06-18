     function checkIsPhone() {
         var u = navigator.userAgent;
         var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
         var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
         return isiOS;
     }
     $(function() {
         if (checkIsPhone()) { //苹果
             //========
             $('#js_1_topUp1' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a420729%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp2' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a369948%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp3' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a409841%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp4' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a466161%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp5' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a474213%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp6' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a510809%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp7' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a311764%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp8' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a531821%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp9' ).attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a483027%2c%22sportType%22%3a1%7d");
             $('#js_1_topUp10').attr('href', "sevenmmobile://%7b%22__cls__%22%3a%22SMExpertPageViewController%22%2c%22userID%22%3a561946%2c%22sportType%22%3a1%7d");
             //========
            //  $('#js_2_topUp1' ).attr('href', "");
         } else {
             //========
             $('#js_1_topUp1' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=420729&kindNeed=0')");
             $('#js_1_topUp2' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=369948&kindNeed=0')");
             $('#js_1_topUp3' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=409841&kindNeed=0')");
             $('#js_1_topUp4' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=466161&kindNeed=0')");
             $('#js_1_topUp5' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=474213&kindNeed=0')");
             $('#js_1_topUp6' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=510809&kindNeed=0')");
             $('#js_1_topUp7' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=311764&kindNeed=0')");
             $('#js_1_topUp8' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=531821&kindNeed=0')");
             $('#js_1_topUp9' ).attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=483027&kindNeed=0')");
             $('#js_1_topUp10').attr('onclick', "JsPhone.jumpPageUrl('sevenmmobile://com.sevenm.view.guess.ExpertHomePage?expert_id=561946&kindNeed=0')");
             //========
             //  $('#js_2_topUp1' ).attr('onclick', "JsPhone.jumpPageUrl('')");
         }
     })