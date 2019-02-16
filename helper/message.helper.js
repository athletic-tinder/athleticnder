
module.exports = (hbs) => {

  hbs.registerHelper('whoSend', (me, from, options) => {
    if(from.toString() === me) return 'justify-content-end';
    else return 'justify-content-start';
  })
}