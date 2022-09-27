class calculatrice {
    a
    b


    constructor (a,b) {
        this.a = a
        this.b = b
    }


    add(a,b) {
        let result
        result = a + b 
        return result
    }

    soustraction(a,b){
        let result
        result = a - b 
        return result
    }

    div(a,b) {
        let result
        result = a / b 
        return result
    }

    multi(a,b)
    {
        let result
        result = a * b 
        return result
    }
}

function testAdd(a ,b) {
    let testResult = a + b 
    let calcule = new calculatrice(1,5)
    let result = calcule.add(1,5)

    if (result === testResult) {
    return console.log("c bon")
    } else  {
        return console.log("pas bon")
    }
    
}

testAdd(1,5)


function testSoustraction(a ,b) {
    let testResult = a - b 
    let calcule = new calculatrice(1,5)
    let result = calcule.soustraction(1,5)

    if (result === testResult) {
    return console.log("c bon")
    } else  {
        return console.log("pas bon")
    }
    
}

 testSoustraction(1,5)


 function testDiv(a ,b) {
    let testResult = a / b 
    let calcule = new calculatrice(1,5)
    let result = calcule.div(1,5)

    if (result === testResult) {
    return console.log("c bon")
    } else  {
        return console.log("pas bon")
    }
    
}

testDiv(1,5)

function testMulti(a ,b) {
    let testResult = a * b 
    let calcule = new calculatrice(1,5)
    let result = calcule.multi(1,5)

    if (result === testResult) {
    return console.log("c bon")
    } else  {
        return console.log("pas bon")
    }
    
}

testMulti(1,5)