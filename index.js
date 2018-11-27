function submitNumber () {
  $('#response').html("please wait...")
  var number = document.getElementById('number').value
  var data = JSON.stringify({ "number": number })
  var settings = {
    'url': 'http://fib-knative.default.bmv-mycluster.us-east.containers.appdomain.cloud/fib',
    'method': 'POST',
    'headers': {
      'content-type': 'application/json',
    },
    'processData': false,
    data
  }
  $.ajax(settings).done(function (response) {
    console.log(response)
    $('#response').html(JSON.stringify(response, null, 2))
    $('#response').show()
  })
}

$('#number').keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault()
    submitNumber()
  }
})
