let express = require('express')
let film = require('./film.json')
let fs = require('fs')

let app = express()

app.get('/', (req, res) => {
    res.send("This is Project5 Page")
})
app.get('/app/film', (req, res) => {
    res.json(film)
})
app.get('/', (req, res) => {
    res.send('This is project2 page')
});

app.get('/app/film', (req, res) => {
    res.json(film)
})

app.get('/film', (req, res) => {

    let html = `<table border=1>
    ${film.map((f) => {
        return `
        <tr>
        <th>${f.quote}</th>
        <th>${f.author}</th>
        <th>${f.date}</th>
        <th>${f.category}</th>
        <th>${f.popularityIndex}</th>


        
        
        </tr>`
    }).join("")}
    </table>
    `;
    res.send(html)
    // console.log(film)
})
app.get('/film/:id', (req, res) => {
    let id = req.params.id
    let f = film.find((stud) => stud.id === (+id))
    res.send(f)
})

app.use(express.urlencoded({ extended: false }))

app.post('/create_stud', (req, res) => {
    let body = req.body
    film.push(body)
    fs.writeFile('film.json', JSON.stringify(film), (err, res) => { })

    res.send('create stud succes')
})
app.delete('/del_stud/:id', (req, res) => {
    let films = req.params.id
    let index = film.findIndex(stud => (+stud.id) === (+films))

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    film.splice(index, 1)
    fs.writeFile('film.json', JSON.stringify(film), (err, res) => {


    })
    res.send("record delete sucess")
})

app.patch('/edit_stud/:id', (req, res) => {
    let id = req.params.id
    let body = req.body

    let films = film.find((stud) => stud.id === (+id))

    Object.assign(films, body)
    fs.writeFileSync('film.json', JSON.stringify(film), (err, res) => {

    })
    res.send('edit complete')
})



app.listen(2050, () => { console.log('Server is start') })