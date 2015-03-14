var seneca = require('seneca')()

seneca.add( {cmd:"echo"}, function(args,callback){
    callback(null,{value:args.value})
})

seneca.listen()
