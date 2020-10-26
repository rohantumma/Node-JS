


const users=[

    {
        firstName: "Rohan",
        lastName : "Tumma"
    }

     
]

//creating route for users
app.use('/user',(req,res)=>{
    console.log(users);

    res.send(users);
})

app.post('/user',(req,res)=> {});

app.listen(PORT,() => console.log(`Server at http://localhost:${PORT}`));

