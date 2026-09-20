const prompt = require('prompt-sync')();
const { exec } = require('child_process');

let age = prompt ('Сколько вам лет?');


if (age >= 18) {
    exec('xdg-open https://rt.pornhub.com'); 
} else {
    exec('xdg-open https://smeshariki.ru');
}