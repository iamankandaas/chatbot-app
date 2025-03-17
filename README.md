# 🤖 Chatbot Application

This is a simple chatbot application that interacts with users through a web interface and provides responses using the **OpenAI API**. The chatbot is built using **Node.js**, **Express.js**, and **JavaScript**, with an API integration to fetch AI-generated responses.

## 📌 Features

- 🗣️ **User-friendly chat interface**  
- 🔗 **Backend powered by Express.js**  
- 🤖 **Integration with OpenAI API for responses**  
- 🎨 **Styled with CSS for an interactive experience**  
- 🚀 **Deployed and tested locally**  

## 📁 Project Structure

software-dev-chatbot/ │── public/ # Contains frontend files │ ├── index.html # Main HTML page │ ├── main.js # JavaScript for frontend interaction │ ├── style.css # CSS styling │── openai.js # Handles OpenAI API interaction │── server.js # Express.js server file │── .env # Environment variables (API keys, etc.) │── package.json # Project dependencies and scripts │── README.md # Project documentation

## 🚀 Installation & Setup

Follow these steps to set up and run the chatbot locally:

### 1️⃣ Clone the Repository

git clone https://github.com/iamankandaas/chatbot-app.git
cd chatbot-app

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Configure API Key
Create a .env file in the root directory.
Add the following line (replace YOUR_OPENAI_API_KEY with your actual key):

OPENAI_API_KEY=YOUR_OPENAI_API_KEY


###4️⃣ Run the Application
Start the Express server:

node server.js


###5️⃣ Open in Browser
If the server is running on port 3000, open:

http://localhost:3000



##🎉 Output Screenshots
Here are some screenshots of the chatbot in action:
![Chatbot UI](https://imgur.com/RWnz8zS)
![Chatbot UI](https://imgur.com/SwSX2x1)

