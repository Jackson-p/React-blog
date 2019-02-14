const axios = require('axios');
const getIssues = function({label = '', currentpage, pagesize, keyword}){
    let url;
    if (label && label.trim().length > 0) {
        label = `+label:${label}`;
    }
    url = encodeURI(`https://api.github.com/search/issues?q=${keyword}+state:open+repo:Jackson-p/Jackson-p.github.io${label}&sort=created&page=${currentpage}&per_page=${pagesize}`)
    //中文参数需要编码，否则后台是乱码，因为在vscode里面默认是utf-8的，网页里不会

    return axios.get(url,{
        header:{
            'Accept': 'application/vnd.github.v3.html'
        }
    });
}
const transTime = function(timel){
    var reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/i;
    //return timel.substring(0,10);
    return reg.exec(timel)[0];
};
const calcPagetotal = function(total, pagesize){
    return total % pagesize ? total/pagesize : Math.ceil(total/pagesize);
}
const interceptors = axios.interceptors;

export {getIssues, transTime, calcPagetotal, interceptors}