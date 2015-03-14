var seneca=require("seneca")()

seneca.client()

seneca.act('cmd:echo,value:"echo this"', function(err,result){
    console.log( result.value )
})
