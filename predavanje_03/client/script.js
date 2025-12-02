$(() => {
    
    $("#myButton").on("click mouseover", (event) => {
        
        const type = event.type;
        const button = event.target;

        if (type === "click")
            button.innerText = "Clicked";
        else if (type === "mouseover")
            button.innerText = "Hovered";        
    });

    $("#hide-p").click((event) => {
        let p = $("p").first();
        const is_hidden = p.attr("hidden");
        let btn = $(event.target);

        p.attr("hidden", !is_hidden);

        /*
        if (is_hidden)
            btn.text("Hide");
        else
            btn.text("Show");
        */ 

        is_hidden ? btn.text("Hide") : btn.text("Show");
            

    });


    $("#myInput").blur((event) => {
        const userInput = $(event.target).val();
        alert(userInput);
    });


    const fillListDynamically = () => {
        const arr = ["tomato", "gold", "deepskyblue"];

        let body = $("body").first();

        let ul = $(`
            <ul>
            </ul>
        `);
        
        for (let c of arr) {
            let li = $(`
                <li>
                    ${c}
                </li>    
            `);
            li.attr("style", `color: ${c}`);

            ul.append(li);
        }

        // sami: dodati jedan element naknadno
        // korištenjem before

        body.append(ul);
    }
    fillListDynamically();

    const ani = () => {
        let body = $("body").first();
        let r1 = $("<div></div>").css({
            "width": "150px",
            "height": "150px",
            "background": "deeppink"
        });

        let r2 = $("<div></div>").css({
            "width": "200px",
            "height": "200px",
            "background": "springgreen"
        });        

        body.append([r1, r2]);

        const pulse = () => {
            r1.animate({ "border-radius": "50%" }, 500);
            setTimeout(() => {
                r1.animate({ "border-radius": "0%" }, 500);
            }, 500);
        }

        pulse();
        setInterval(pulse, 1000);

        const shrinkAndExpand = () => {
            r2.animate({ "width": "100px" }, 500);
            setTimeout(() => {
                r2.animate({ "height": "100px" }, 500);
            }, 500);
            setTimeout(() => {
                r2.animate({ "width": "200px" }, 500);
            }, 1000);
            setTimeout(() => {
                r2.animate({ "height": "200px" }, 500);
            }, 1500);   
        }
        shrinkAndExpand();
        setInterval(shrinkAndExpand, 2000);
     

    }

    ani();

    const getProducts = () => {
        $.get("/products", (data) => {
            console.log(data);
            // dinamički renderirati
        });
    }
    getProducts();
});