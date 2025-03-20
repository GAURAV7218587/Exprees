let express= require('express')
let app = express()
let dbConnect = require('./dbConnect')

app.get('/',(req,res)=>{
  res.end('<h1>Home Page</h1>')
})

//All students
app.get('/students', async (req,res)=>{
    // res.end('<h1>Students Page</h1>')
    let data = await dbConnect()
    let students = await data.find().toArray()
    res.json(students)
})

//Student by ID
app.get('/students/:id', async (req,res)=>{
  // res.end('<h1>Students Page</h1>')
  let id =req.params.id;
  let data = await dbConnect()
  let student = await data.find({"id":(+id)}).toArray()
  // console.log(student)
  res.json(student)

})

app.delete('/del_stud/:id', async (req,res)=>{
  // res.end('<h1>Students Page</h1>')
  let id =req.params.id;
  let data = await dbConnect()
  let student = await data.deleteOne({"id":(+id)}).toArray()
  // console.log(student)
  res.json(student)

})

app.use(express.urlencoded({extended:false}))

app.patch('/edit_stud/:id', async (req,res)=>{
  // res.end('<h1>Students Page</h1>')
  let id =req.params.id;
  let body = req.body
  // console.log(body)
  let data = await dbConnect()
  let student = await data.updateOne({"id":(+id)},{$set :body})
  console.log(student)
  res.json(student)

})


app.post('/create_stud/', async (req,res)=>{
  // res.end('<h1>Students Page</h1>')
  
  let body = req.body
  // console.log(body)
  let data = await dbConnect()
  let student = await data.insertOne(body)
  console.log(student)
  res.json(student)

})


 app.listen(9000,()=> console.log('server started'))





