var subject = function(){
    console.log('Study multiple subjects')
}

const cbse = function(){
    console.log('cbse is the pattern of the education')
}
//module.exports.subject = subject
//module.exports.cbse = cbse

module.exports = {
    subject:subject,
    cbse:cbse
}