const square = function(x) {
    return x * x
}

const square1 = (x) => {
    return x * x
}

const square2 = (x) => x * x

//console.log(square(2))

const event = {
    name : 'Birthday Party',
    guest : ['Abhishek', 'Suraj', 'Sumit', 'Mukesh'],
    /* printGuest : function() { 
        const name1 = 'Stripper party'
        console.log("This is " + this.name)
        this.guest.forEach(function(gues){
            console.log(gues + ' is attending ' + name1)
        })
    } */

    printGuest() { 
        //const name1 = 'Stripper party'
        console.log("This is " + this.name)
        this.guest.forEach((gues) => {
            console.log(gues + ' is attending ' + this.name)
        })
    }
}

event.printGuest()