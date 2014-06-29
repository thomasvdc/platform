/**
 * Created by yannbuydens on 29/06/14.
 */
Meteor.startup(function(){


    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        appId: "1475199082717973",
        secret: "aef7fa78d191744549f864af4b45f96a"
    });

});