const fetch = require('node-fetch');

const quotesUrl = "https://type.fit/api/quotes";

const getQuotes = async () => {
    try {
        const response = await fetch(quotesUrl);
        if (response.ok) {
            const jsonResponse = await response.json();
            const randomisedResponse = jsonResponse[Math.floor(Math.random() * (jsonResponse.length + 1))];
            console.log(`${randomisedResponse.author}: ${randomisedResponse.text}`);
        }
    } catch (error) {
        console.log(error);
    }
}

getQuotes();