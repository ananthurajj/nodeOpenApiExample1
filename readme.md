## 🌟 Node.js OpenAI Example

🚀 A simple Node.js project demonstrating the power of the OpenAI API! This example interacts with the GPT-4o-mini model to generate chatbot responses. Easily set up and run in just a few steps!


## 🛠️ Prerequisites

Before running this project, ensure you have the following:

  ✅ Node.js installed (v20.x or higher recommended)

  ✅ OpenAI API key from OpenAI
  

## 📦 Installation

Clone the repository or download the code to your local machine:

```bash
git clone https://github.com/ananthurajj/nodeOpenApiExample1.git
```

## Navigate into the project directory:

```bash
cd nodeOpenApiExample1
```
Install the required dependencies:

```bash 
npm install
```

Create a .env file in the root of the project and add your OpenAI API key (🔒 Make sure to keep this secure!):

```bash 
OPENAI_API_KEY=your-api-key-here
```

## 🚀 Usage

Run the project using the following command:

```bash 
npm start
```



When you run the script, it will send a request to OpenAI asking for a programming joke and display the response in the terminal. 🤖💬


## 🗂️ Project Structure

Here's a quick overview of the project structure:

```bash 
📦node-openai-example
 ┣ 📜example.mjs          # Main script to interact with OpenAI
 ┣ 📜package.json         # Project metadata and scripts
 ┣ 📜README.md            # You're reading it! ✨
 ┗ 📜.env                 # Environment variables (not included in repo)
 ```

## 🛠️ Dependencies

This project relies on the following packages:

    openai: Official OpenAI API client.
    dotenv: Loads environment variables from a .env file

To install them, use:

```bash 
npm install
```

## 💡 Example Output

Once you run the project, you’ll see a funny programming joke like this:


```bash 
{
  role: 'assistant',
  content: 'Why do programmers prefer dark mode?\n\nBecause light attracts bugs!',
  refusal: null
}
```



## 🔗 Useful Links

 - [🌐 OpenAI API Documentation](https://platform.openai.com)
 - [📦 npm: openai](https://www.npmjs.com/package/openai)
 - [📦 npm: dotenv](https://www.npmjs.com/package/dotenv)


## 📄 License

This project is licensed under the ISC License.

## 🎉 Happy Coding! 👨‍💻👩‍💻
Feel free to contribute or open issues if you find any bugs 🐞 or have suggestions. Contributions are always welcome! ✨