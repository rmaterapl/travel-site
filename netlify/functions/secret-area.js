exports.handler = function (event, context, callback) {
  const secretContent = `
    <h3>Welcome to the secret area</h3>
    <p>Here we can tell you that the sky is <strong>blue</strong>, and 2 + 2 = 4</p>
  `

  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}
