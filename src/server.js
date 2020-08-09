//server
const express = require("express")
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages");

//configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
}
)
//================================//mudar de senFile para render e colocar apenas o nome do arquivo. O diretorio já foi especificado


//incio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor na porta 5000. IP é o localhost
.listen(5000)