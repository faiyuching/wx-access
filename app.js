const app = require("express")();
const sha1 = require("sha1");

app.use((req, res, next) => {
    console.log(req.query)
    const { signature, timestamp, nonce, echostr } = req.query;
    const token = "wxfwh_Token";
    const arrSort = [token, timestamp, nonce];
    arrSort.sort();
    const str = arrSort.join("");
    const shaStr = sha1(str);
    if (shaStr === signature) {
        console.log("true")
        res.send(echostr);
    } else {
        console.log("false")
        res.send("no");
    }
});

app.listen(8000, () => console.log("8000端口号成功运行"));