import CryptoJS from 'crypto-js/crypto-js'
import {host, nextPageDomain} from '../../host.js'

const httpUrl = host['qrcode'][process.env.NODE_ENV];

const domain = nextPageDomain['qrcode'][process.env.NODE_ENV]; //页面域名

//获取地址栏参数 @param name 参数名称
const GetQueryString = function (name) {
	let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

const decryption = function (data) {
	let key = CryptoJS.enc.Utf8.parse("a449e506f74f4db891caac2a665567a6");
	let iv = CryptoJS.enc.Utf8.parse("4a3089695ca64b34b32d0ec9957dc96b");
	let baseResult=CryptoJS.enc.Base64.parse(data);
	let ciphertext=CryptoJS.enc.Base64.stringify(baseResult);
	let decryptResult = CryptoJS.AES.decrypt(ciphertext,key, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decryptResult)
}

export { httpUrl, domain, GetQueryString, decryption }