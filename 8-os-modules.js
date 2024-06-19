
const os = require("os");

// info about current user

const user = os.userInfo()
console.log(user);


// methods to return the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds `)

// check current os methods

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
 console.log(currentOs);