let express = require('express')
let film = require('./film.json')
let fs = require('fs')

let app = express()

app.get('/',(req,res)=>{
    res.send('This is project4 page')
});

app.get('/app/film',(req,res)=>{
    res.json(film)
})
app.get('/film', (req, res) => {

    let html = `
    <table border=1>
    ${film.map((f) => {
        return `
        <tr>
        <th>${f.userId}</th>
        <th>${f.title}</th>
        <th>${f.body}</th>
        <th>${f.link}</th>
        <th>${f.comment_count}</th>


        
        
        </tr>`
    }).join("")}
    </table>
    `;
    res.send(html)
    // console.log(film)
})
app.get('/film/:id', (req, res) => {
    let id = req.params.id
    let f = film.find((pic) => pic.id=== (+id))

    res.send(f)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/create_pic', (req, res) => {
    let body = req.body

    console.log(body)
    film.push(body)
    fs.writeFile('film.json', JSON.stringify(film),(err, res) => {

    })

    res.send('Create pic Record')
})
app.delete('/delete_pic/:id', (req, res) => {
    // res.send('delete pic Record')
    let filmsId = req.params.id;

    let index = film.findIndex(pic => (+pic.id) === (+filmsId));

    film.splice(index, 1);

    fs.writeFile('film.json', JSON.stringify(film), (err, res) => {

    })
    res.send('delete pic Record')

})
app.patch('/edit_pic/:id',(req,res)=>{
    let id = req.params.id
    let body = req.body
    let films = film.find((pic)=>pic.id ===(+id))
    // console.log(id)
    Object.assign(films,body)
    fs.writeFile('film.json',JSON.stringify(film, null ,2),(err,res)=>{})


})



app.listen(2040,()=>{console.log('server is start')})