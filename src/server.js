const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "11979850777",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1280]
    },
    {
        name: "Jama!",
        avatar: "https://avatars0.githubusercontent.com/u/61145881?s=460&u=c78376285d15e208b6adfd98a0fc9342de54fd6b&v=4",
        whatsapp: "11979850777",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1280]
    },
    {
        name: "Respiration Fuedase",
        avatar: "https://avatars1.githubusercontent.com/u/47800334?s=460&u=5428d4b5a12f2855349eb67af38ad0e758ab23bf&v=4",
        whatsapp: "11979850777",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1280]
    }


]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]



function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}





const express = require("express")
const server = express()

//configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
}

)
//================================//mudar de senFile para render e colocar apenas o nome do arquivo. O diretorio já foi especificado

server.use(express.static("public"))
.get("/", (req, res) => {
    
    return res.render("index.html")
})

.get("/study", (req, res) => {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})//dps do arquivo coloque o objeto
})

.get("/give-classes", (req, res) => {
    const datas = req.query


    



    const isNotEmpty = Object.keys(datas).length > 0
    //Adicionar dados à lista de proffys
    if (isNotEmpty) {
        datas.subjects = getSubject(datas.subjects)
        console.log("Dados Salvos!")
        proffys.push(datas)
        return res.redirect("/study")
    } 
    

    return res.render("give-classes.html", {subjects, weekdays})
})


.listen(5000)