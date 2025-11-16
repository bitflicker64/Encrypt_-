(function(){
    const app = document.querySelector(".app");
    const socket = io();
    let uname;

    app.querySelector(".join-screen #join-user").addEventListener("click", function(){
        let username = app.querySelector(".join-screen #username").value;
        if(!username) return;

        uname = username;
        socket.emit("newuser", username);

        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    app.querySelector(".chat-screen #send-message").addEventListener("click", function(){
        let message = app.querySelector(".chat-screen #message-input").value;
        if(!message) return;

        renderMessage("my", { username: uname, text: message });
        socket.emit("chat", { username: uname, text: message });
        app.querySelector(".chat-screen #message-input").value = "";
    });

    socket.on("update", function(msg){
        renderMessage("update", msg);
    });

    socket.on("chat", function(data){
        renderMessage("other", data);
    });

    app.querySelector(".chat-screen #exit-chat").addEventListener("click", function(){
        socket.emit("exituser",uname);
        window.location.href = window.location.href;
    });

    function renderMessage(type, message){
        let container = app.querySelector(".chat-screen .messages");
        let el = document.createElement("div");

        if(type === "my"){
            el.setAttribute("class", "message my-message");
            el.innerHTML = `
            <div>
                <div class="name">You</div>
                <div class="text">${message.text}</div>
            </div>`;
        } else if(type === "other"){
            el.setAttribute("class", "message other-message");
            el.innerHTML = `
            <div>
                <div class="name">${message.username}</div>
                <div class="text">${message.text}</div>
            </div>`;
        } else if(type === "update"){
            el.setAttribute("class", "update");
            el.innerText = message;
        }

        container.appendChild(el);
        container.scrollTop = container.scrollHeight - container.clientHeight;
    }
})();
