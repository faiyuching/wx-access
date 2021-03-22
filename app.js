const app = require("express")();
const sha1 = require("sha1");

app.get((req, res, next) => {
    const { signature, timestamp, nonce, echostr } = req.query;
    const token = "wxfwh_Token";
    const arrSort = [token, timestamp, nonce];
    arrSort.sort();
    const str = arrSort.join("");
    const shaStr = sha1(str);
    if (shaStr === signature) {
        res.send(echostr);
    } else {
        console.log("false")
        res.send("no");
    }
});

app.listen(80, () => console.log("80端口号成功运行"));