export const handler = async (event,context) => {
	const eventBody = JSON.parse(event.body)
	console.log(eventBody.postvar)
	console.log({event})
	console.log({context})
	return {
		statusCode: 200,
		headers : {'Access-Control-Allow-Origin': 'https://doyouspeakrowing.github.io/'},
		body: JSON.stringify({       message: 'Hello World!;'+process.env.TESTVAR+';'+eventBody.postvar,
		}),
	}
}


