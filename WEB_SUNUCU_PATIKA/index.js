const http = require("http");

const server = http.createServer((req,res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>ANASAYFAYA HOŞGELDİNİZ</h2>");
    }

    else if (url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>");
    }

    else if (url === "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2>");
    }

    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("SAYFA BULUNAMIYOR");
    }

    res.end(); 
})

const port = 5000;

server.listen(port,()=> {
    console.log("server oluşturuldu");
})