

{/*router.post('/user', (req,res) =>{
    res.json({msg:"This is a user route"});
});

router.post('/admin', (req,res) =>{
    res.json({msg:"This is an admin route"});
});
//will post new messages created by the user to the database
router.post('/chatmessages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })
  //will get all the message from database
  router.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
*/}