const express = require('express');
const sha1 = require('sha1');

const app = express();

const config = {
    token: 'wxfwh_Token',
    appID: 'wxa407d8ca09c9b93b',
    appsecret: '22be53fe70dcc16c0a49d7b49cf89fe7'
}

app.use((req, res, next) => {
    const { signature, echostr, timestamp, nonce } = req.query;
    const { token } = config;
    const arr = [timestamp, nonce, token];
    const arrSort = arr.sort();
    const str = arr.join('');
    const sha1Str = sha1(str);
    if (sha1Str === signature) {
        res.send(echostr);
    } else {
        res.send('error')
    }
})

app.listen(80, () => {
    console.log('server is running...');
})