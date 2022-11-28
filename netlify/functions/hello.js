import fetch from 'node-fetch'
export const handler = async (event,context) => {
	const eventBody = JSON.parse(event.body)
	console.log(eventBody.postvar)
	const body = {
		sender: { name: "DoYouSpeakRowing",email:"doyouspeakrowing@gmail.com"},
		to:[{email:process.env.TO_EMAIL}],
		subject:"Message from "+eventBody.postvar,
		htmlContent:"<html><head></head><body><p>Hello,</p>This is . message from "+eventBody.postvar+"</p></body></html>"
		};
	const response = await fetch('https://api.sendinblue.com/v3/smtp/email',
			{  	method: 'post',
				body: JSON.stringify(body),
				headers: {      'acccept': 'application/json',
						'content-type':'application/json',
						'api-key':process.env.SENDINBLUE_KEY
					}
			});
	const data = await response.json();
	console.log(data); 
	return {
		statusCode: 200,
		headers : {'Access-Control-Allow-Origin': 'https://doyouspeakrowing.github.io'},
		body: JSON.stringify({       message: 'Hello World!;'+process.env.TESTVAR+';'+eventBody.postvar,
		}),
	}
}


