import '../style/common.css'
import '../style/record.scss'

import {httpUrl, decryption} from '../unit/public';

function getElevaInfo() {
	console.log(httpUrl,decryption)
}

window.onload = function() {
    getElevaInfo();
}