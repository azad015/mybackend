function trim(){
    const trimSpace="    FunctionUp     ".trim()
    return trimSpace; 
}


function lowerCase(){
    const lower ="FUNCTIONUP".toLowerCase()
return lower;
}


function upperCase(){
    const upper="functionup".toUpperCase()
    return upper;
}



module.exports.trimCase=trim
module.exports.smallLatter=lowerCase
module.exports.capitalLatter=upperCase