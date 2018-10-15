import '../style/common.css'
import '../style/index.css'

import {httpUrl, domain, decryption} from '../unit/public'

function getRecord(e) {
    e.target.style.opacity = '0.7';
    setTimeout(function() {
        e.target.style.opacity = '1';
    },200);
    location.href = domain + '/pageOne/record.html';
}

function getElevaInfo() {
    console.log(httpUrl, decryption)
}
window.onload = function() {
    $('.record-btn').click(function (event) {
        getRecord(event);
    });
    getElevaInfo();
}