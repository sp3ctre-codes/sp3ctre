function speedDetector(speed){
    //constants
    const speedLimit = 70;
    const kmPerPoint = 5;

    //if condition (making sure the speed is less than the speedLimit)
    if (speed <= speedLimit ){
        return "Ok";
    }else{
        const points = Math.floor((speed - speedLimit )/ kmPerPoint);
        //license suspension check
        if(points > 12) {
            return "License Suspended";
        }else{
            //string interpolation - the backsticks " `...` " let us insert value inside strings using "${...}"
            return `Points: ${points}`;
        }
    }
}

console.log(speedDetector(90));
console.log(speedDetector(65));
