const mesg = require('mesg-js').service()
var request = require('request');

const payInvoiceHandler = async (inputs, outputs) => {
  try {
     console.log('Attempting to pay invoice: ' + inputs.invoice || 'EMPTY INVOICE')
      //TODO: LN vlaidation
      request({
        method: 'POST',
        url: 'https://dev-api.opennode.co/v1/withdrawals',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': inputs.apikey
        },
        body: JSON.stringify({  type: "ln",  address: inputs.invoice})
      }, function (error, response, body) {
        if (error) { return console.log(error); }

        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
        if (response.statusCode === 201) {
          console.log('Success in paying InvoiceId: '+ inputs.invoiceId )
        } else {
          return response
        } 
      });
      return 1
  } catch (error) {
    // If an error occurs, return the failure output
    console.log('ERROR ' + error.toString() )
    return outputs.failure({
      message: error.toString()
    })
  }
}

mesg.listenTask({
  payInvoice: payInvoiceHandler
})
console.log('Listening tasks...');
