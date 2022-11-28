export const handler = async (event,context) => {
	const eventBody = JSON.parse(event.body)
	console.log(eventBody.postvar)
	return {
		statusCode: 200,
		headers : new Headers({'Access-Control-Allow-Origin': 'https://doyouspeakrowing.github.io/'}),
		body: JSON.stringify({       message: 'Hello World!;'+process.env.TESTVAR+';'+eventBody.postvar,
		}),
	}
}


