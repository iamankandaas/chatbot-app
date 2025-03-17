const OpenAI = require('openai');

// Load environment variables (Create a .env file to store API keys securely)
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in a .env file
});

async function generateResponse(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Use the latest model
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 150,
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        return "Sorry, I'm having trouble responding right now.";
    }
}

module.exports = { generateResponse };
