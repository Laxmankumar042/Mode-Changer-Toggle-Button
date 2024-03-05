let box = document.querySelector(".box");
      let ball = document.querySelector(".ball");
      let body = document.querySelector("body");
      let heading = document.querySelector("h1");
      let para = document.querySelector("p");
      let btn = "notChecked";
      let image = document.querySelector(".img");
      box.addEventListener("click", () => {
        if (btn == "notChecked") {
          body.style.backgroundColor = "rgba(0,0,0,0.8)";
          ball.style.translate = "65px";
          box.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
          heading.style.color = "white";
          heading.innerText = "DARK MODE";
          para.style.color = "white";
          image.src = "/images/moon.png";
          console.log("button is clicked");
          btn = "checked";
        } else {
          ball.style.translate = "0px";
          box.style.justifyContent = "start";
          body.style.backgroundColor = "rgb(248, 248, 216)";
          box.style.backgroundColor = "#f8f8d8";
          heading.style.color = "black";
          heading.innerText = "LIGHT MODE";
          para.style.color = "black";
          image.src = "/images/sun.png";
          console.log("button is clicked");
          btn = "notChecked";
        }
      });