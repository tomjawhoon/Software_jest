
function converter(currency) {
    if(!isNaN(currency)) return `$${(currency/30.17).toFixed(2)}`
    else return 'error'  
}
module.exports = converter;