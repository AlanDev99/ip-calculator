/**
 * Functions to get IP address in binary.
 */

const oct2Bin = _str  => {
    let res = parseInt(_str).toString(2);
    let zeros = '0'.repeat(8 - parseInt(res.length));
    return `${zeros}${res}`;
}

const ip2bin = _ip => {
    return _ip.split(".").map(oct2Bin);
}

/**
 * Function to get Mask Network in binary.
 */

const mask2Bin = _mask  => {
    let ones = '1'.repeat(parseInt(_mask));
    let zeros = '0'.repeat(32 - parseInt(_mask));
    return `${ones}${zeros}`.match(/.{8,8}/g);
}

/**
 * Function to get wildcard in binary.
 */

const wildcard2Bin = _mask  => {
    let zeros = '0'.repeat(parseInt(_mask));
    let ones = '1'.repeat(32 - parseInt(_mask));
    return `${zeros}${ones}`.match(/.{8,8}/g);
}

module.exports = {ip2bin, mask2Bin, wildcard2Bin};