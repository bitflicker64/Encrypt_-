<readme>
  <title>Real-Time Chat Application</title>

  <section heading="Description">
    Minimal real-time chat system using Node.js, Express, and Socket.IO.
    Frontend uses plain HTML, CSS, and JavaScript. Demonstrates WebSocket-based
    bidirectional communication without any frontend frameworks.
  </section>

  <section heading="Features">
    <item>Real-time message broadcasting</item>
    <item>Automatic reconnection (Socket.IO)</item>
    <item>Simple username prompt</item>
    <item>Lightweight UI, no build tools</item>
  </section>

  <section heading="Tech Stack">
    <backend>Node.js</backend>
    <backend>Express</backend>
    <backend>Socket.IO</backend>
    <frontend>HTML</frontend>
    <frontend>CSS</frontend>
    <frontend>JavaScript</frontend>
  </section>

  <section heading="Installation">
    <step>git clone &lt;repository-url&gt;</step>
    <step>cd chatroom</step>
    <step>npm install</step>
    <step>node server.js</step>
    <note>Open http://localhost:5000 in a browser.</note>
  </section>

  <section heading="Client Script Include">
    <code>&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;</code>
    <code>&lt;script src="client.js"&gt;&lt;/script&gt;</code>
  </section>

  <section heading="Basic Client Logic">
    <code>
      const socket = io();
      socket.emit("message", text);
      socket.on("message", handler);
    </code>
  </section>
</readme>
