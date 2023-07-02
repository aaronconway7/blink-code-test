# Blink Code Test 💬

![Screenshot](/files/screenshot.png)

> We would like you to build a basic chat application. You are free to use any library, framework or tool to help you scaffold or build the application, ideally using React. We are looking for good quality code, but equally are interested to see how you structure your code and files. When complete, please forward us a link to the Github repo, or a zip file with the files.

> Here are the areas we will be focusing on; a rich solution, structured code, consideration for accessibility; (h1 tag, semantic elements, form tag, a11y)​, use of libraries (SWR, date-fns), loading states & error handling, Readme, tests, edit message functionality.​

## Requirements 📏

- Spend around 2 hours and try and get as much done as possible
- Parse the JSON in to memory, the entire application should run off in-memory state, how you structure this state is up to you. You are also free to use any state-management library/tool/technique to make the application work. The JSON consists of an Array of conversations, each containing an Array of messages.

```js
[{
	"id": ID,
	"name": "lorem ipsum" // Conversation name
	"last_updated": "Date" // Use to sort conversation list
    "messages": [{
	    "id": ID,
		"text": "lorem ipsum" // Message content
		"last_updated": "Date" // Use to sort messages
	}]
}] // Conversations
```

- Render a sorted list of the conversations on the left of the screen (sorted by last_updated, newest at the top)
- When clicking on a conversation → Render a sorted list of messages on the right of the screen (sorted by last_updated, oldest at the top)
- Show a basic 'reply' section at the bottom with a text field and 'Send' button to add a new message to the conversation
- On typing a message in the textfield and clicking 'Send', the textfield should be cleared and the message should be added to the bottom of the list of messages along with the correct date
- For each message, show the date (formatted however you prefer) and the text of the message on a second line

### Optional Extra:

- "Editing a message": When clicking on a message → Add the text of the message into the textfield in the 'reply' section and change the button from 'Send' to 'Edit'. On clicking 'Edit', edit the message that was selected and change the button back to 'Send'.
- Apply some styles with CSS

### Wireframe

![Wireframe](/files/wireframe.jpeg)

## Getting Started 🎬

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack 🍔

- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [SWR](https://swr.vercel.app/)

## Notes 🎶

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Spent ~ 2-3 hours completing all requirements + optional
- The project was probably small enough to to just scaffold a react app via vite but wanted to try out Next.js 13 so thought this would be a nice oppurtunity
- Initally considered loading the JSON directly into the intial state of a global state container such as Redux or use the React Context API but ended up deciding to just handle this all with via SWR's caching capabilites
- Also considered using [JSON Server](https://github.com/typicode/json-server) but thought it would have been out of scope for this task
- If I had more time I would:
  - Make the app mobile responsive (normally I work mobile first but given the time and the wireframe I decided just to build it primarily with desktop in mind)
  - Write more tests potentially even introduce an E2E framework like cypress of playwright
  - Design some nicer looking loading states rather than just printing "loading..."
  - Accessibility improvements
