//write first method

//write eleventh problem
function firstLast6(array){
    if(array[0] == 6 || array[array.length - 1] == 6){
        return true;
    }else{
        return false;
    }

}

//write twelveth problem
function has23(array){
    var is23 = false;
    for(var i = 0; i<2; i++){
        if(array[i] == 2 || array[i] == 3){
            is23 = true;
            i++;
        }else{
            is23 = false;
        }
    }
    return is23;

}

//problem 13
function fix23(array) {
    for(var i = 0; i< arry.length - 1; i++){
        if(array[i] == 2 && array[i + 1] == 3){
            array[i + 1] = 0;
        }
    }

}

//problem 14
function countYZ(string) {
    var result = 0;
    for(var i = 0; i< string.length - 1; i++){
        if((string[i] == "y" || string[i]== "z" || string[i]== "Z" || string[i]== "Y") && string[i+ 1] == " "){
            result ++;
        }

    }
    if((string[i] == "y" || string[i]== "z" || string[i]== "Z" ||
            string[i]== "Y") && (i == string.length - 1)){
        result ++;
    }
    return result;
}

//problem 15
function endOther(x, y){
    var lengthX = x.length;
    var lengthy = y.length;
    var X = x.toLowerCase();
    var Y = y.toLowerCase();
    if(lengthX > lengthy){
        var newx = X.substring(lengthX - lengthy, lengthX);
    }else{
        if(lengthy > lengthX){
            var newy = Y.substring(lengthy - lengthX, lengthy);
        }else{
            if(lengthy == lengthX){
                var newx = X;
                var newy = Y;
            }
        }
    }
    if(newx == Y || newy == X){
        return true;
    }else{
        return false;
    }
}
//problem 16
function starOut(X) {
    var newString = '';
    for (var i = 0; i < X.length; i++) {
        if (X[i] != "*") {
            if (X[i - 1] != "*") {
                if (X[i + 1] != "*") {
                    newString+= X[i];
                }
            }
        }
    }
    return newString;
}


function getSandwich(X) {
    var first = 0;
    var end = 0;
    for(var i=X.length ; i>= 0; i -- ){
        if(X[i] == "d" && X[i-1] == "a" && X[i-2] == "e" && X[i-3] == "r" && X[i-4] == "b") {
            first = i + 1;
        }
    }
    for(var j = 0; j< X.length; j++ ){
        if(X[j]== "b" && X[j+1] == "r" && X[j+2] == "e" && X[j+3] == "a" &&X[j+4] == "d"){
            end = j;
        }
    }
    return X.slice(first, end);
}

function canBalance(X) {
    var result = false;
    var sum1 = 0;
    for (var i = 0; i<X.length ; i ++){
        var sum2 = 0;
        sum1 += X[i];
        for(var j = i+1; j<X.length ; j++){
            sum2 += X[j];
        }
        if (sum1 == sum2) {
            result = true;
        }
    }
    return result;
}

function countClumps(X) {
    var count = 0;
    for (var i = 0; i < X.length; i++) {
        if(X[i] == X[i+1] && X[i] != X[i+2]){
            count++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c) {
    if(b!=c && a!=b && a!=c){
        var result = true;
    }else if(a-b==b-c || a-c == c-b || a-c==a-b || b-a==c-b|| c-a==b-c || c-a==b-c ){
        result = false;


    }
    return result;
}
//function runs on click and outputs test cases you create to page
function tester() {
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    //document.getElementById("output").innerHTML += nextOne(true, false);
    document.getElementById("output").innerHTML += countClumps([2,2,1,1,1,2,1,1,2,2]);
    //test third method, etc
}
