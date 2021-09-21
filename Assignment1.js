var capitalize = (name)=>{
    return name.toUpperCase();
}

var greeting = (capital)=>{
    console.log(capital);
    console.log('HELLO '+capital("ranadheer"));
}

greeting(capitalize)

