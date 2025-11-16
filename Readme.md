# Chatroom — Real-Time WebSocket Messaging

Lightweight real-time chat application built with Node.js, Express, and Socket.IO.
No frontend frameworks. No build tools. Browser connects through WebSockets. Messages propagate instantly across all connected clients. Works across devices on the same network.

---

## Key Features

* Real-time two-way communication using WebSockets
* Join screen with username selection
* Live chat interface with auto-scroll
* Broadcast messages and status updates
* Simple, readable code intended for beginners
* Zero frontend dependencies (HTML, CSS, Vanilla JS)

---

## Tech Stack

| Layer               | Technology                                   |
| ------------------- | -------------------------------------------- |
| Runtime             | Node.js                                      |
| Backend Server      | Express                                      |
| Real-Time Transport | Socket.IO                                    |
| Frontend            | HTML, CSS, Vanilla JavaScript                |
| Protocol            | WebSockets (fallback supported by Socket.IO) |

---

## Project Structure

```
chatroom/
├── public/
│   ├── index.html
│   ├── style.css
│   └── code.js
├── server.js
└── package.json
```

---

## Requirements

* Node.js installed
* Devices on same network if you want multi-device chat
* Port 5001 available

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd chatroom
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

Server starts on:

```
http://localhost:5001
```

---

## Accessing From Other Devices on Same Wi-Fi

Find your local IP:

Windows:

```bash
ipconfig
```

macOS/Linux:

```bash
ifconfig
```

or

```bash
ip a
```

Example IP: `192.168.1.24`

Then open on second device:

```
http://192.168.1.24:5001
```

---

## How It Works (High Level)

### Server Events

* `newuser` — broadcast join message
* `chat` — broadcast chat message

### Client Events

* Emit username when joining
* Emit and render chat messages
* Auto scroll message area

WebSocket connection stays open for entire session. No page refresh required.

---

## Scripts Overview

### Run server in development mode (optional, if nodemon installed):

```bash
nodemon server.js
```

---

## Example Code Snippet (Client Event)

```js
socket.emit("chat", { username: name, text: message });
```

### Example Server Listener

```js
socket.on("chat", (data) => {
  socket.broadcast.emit("chat", data);
});
```

---

## Future Extensions (Optional)

* Private messaging & rooms
* Typing indicators
* Message persistence (database)
* Authentication & user accounts
* UI/UX improvements, themes, avatars

---

## License

MIT License. Free to modify and use for learning or production.

---

## Author

Built for learning purposes and real-time network experimentation.
