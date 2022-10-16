
function printDate(){
  const date=new Date()
  return date;
    
} 

function printMonth(){
  const d = new Date()
    const month =d.getMonth()+1
    return month;
}

function getBatchInfo(){
  console.log("Lithium, W3D5, the topic for today is Nodejs module system")
  return ""
}

module.exports.currentDate=printDate
module.exports.currentMonth=printMonth
module.exports.batch=getBatchInfo


