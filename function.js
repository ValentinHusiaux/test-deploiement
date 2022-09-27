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
}

function testAdd(a ,b) {
    let testResult = a + b 
    let calcule = new calculatrice(1,5)
    let result = calcule.add(1,4)

    if (result === testResult) {
    return console.log("c bon")
    } else  {
        return console.log("pas bon")
    }
    
}

testAdd(1,5)