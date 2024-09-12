let num = 1 
try {
    num.toUpperCase();
}
catch (err){
    alert(err.name)
}
finally {
    console.log("terminei o cócidgo")
}