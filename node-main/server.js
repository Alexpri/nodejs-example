var user = require('./user');


function run () {
    var vasya = new user.User("����");
    var petya = new user.User("����");

    vasya.hello(petya);
}


if (module.parent) {
    exports.run = run;
} else {
    run();
}