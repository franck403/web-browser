// proxy controler

function proxy_start(){
    console.log("[info] starting the api");
    fetch("https://proxy6.francoischouin1.repl.co/");
    console.log("[info] api is started")
    localStorage.setItem("proxy", "on");
}

function proxy_end(){
    console.log("[info] stoping the proxy");
    localStorage.setItem("proxy", "stop");
    console.log("[info] proxy stopped");
}