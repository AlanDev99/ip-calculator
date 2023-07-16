const { program } = require('commander');
const { ip2bin, mask2Bin, wildcard2Bin} = require('./netFunctions');
program
  .name('ip-calculator')
  .description('ip calculator for quick solutions')
  .version('0.1.0')
  .option('-i, --ip <type>', 'Ip Address', '192.168.0.1')
  .option('-m, --mask <type>', 'Mask', '24')
  .option('-d, --debug', 'Debug program');


program.parse();

const options = program.opts();


const bin2dec = bin => parseInt(bin, 2).toString(10);

if (options.ip){
  const addresBinary = ip2bin(options.ip);
  console.log(`Address: ${options.ip}          ${addresBinary.join('.')}`);
}

if (options.mask){
  const maskBinary = mask2Bin(options.mask);
  const netmask = maskBinary.map(bin2dec);
  const wildcardBinary = wildcard2Bin(options.mask);
  const wildcard = wildcardBinary.map(bin2dec);
  
  console.log(`Netmask: ${netmask.join('.')} = ${options.mask}    ${maskBinary.join('.')}`);
  console.log(`Wildcard: ${wildcard.join('.')}            ${wildcardBinary.join('.')}`)
}

//console.log(module)

// Network
// Hosts min
// Hosts max
// Broadcast
// Number of Usable Hosts