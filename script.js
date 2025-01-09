function buttonClicked() {
    changeButtonStyle();
    getResult();
}

function changeButtonStyle() {
    const button = document.getElementById("calcButton");

    
    button.addEventListener("mousedown", () => {
        button.style.borderBottom = "none";
    button.style.height = "calc(8vh - 5px)";
    button.style.marginTop = "calc(5vh + 5px)";
    });

    button.addEventListener("mouseup", () => {
        button.style.borderBottom = "#898 5px solid";
        button.style.height = "8vh";
        button.style.marginTop = "5vh";
    });

    button.addEventListener("mouseleave", () => {
        button.style.borderBottom = "#898 5px solid";
        button.style.height = "8vh";
        button.style.marginTop = "5vh";
    });
}
button.addEventListener("mouseup", () => {
    button.style.borderBottom = "#898 5px solid";
    button.style.height = "8vh";
    button.style.marginTop = "5vh";
});

function getResult() {
    var perc = document.getElementById("requiredPerc").value / 100;
    var total = document.getElementById("totalClasses").value;
    var missed = document.getElementById("missedClasses").value;

    const resultHead = document.getElementById("result");

    var curPerc = (total - missed)/total;
    
    if (perc <= curPerc) {
        resultHead.innerHTML = `
            You have sufficient attendance ${total - missed} / ${total} = <span class="fin-attend">${curPerc.toFixed(2)}</span>.
        `;
    } else {
        var result = Math.ceil((total - missed - (perc*total))/(perc - 1));
        var nume = (Number(result) + Number(total) - Number(missed));
        var denom = (Number(result) + Number(total));
        var finResult = (nume/denom).toFixed(2);
    
        resultHead.innerHTML = `
            You have insufficient attendance ${total - missed} / ${total} = <span class="insuf-attend">${curPerc.toFixed(2)}</span>!<br>
            You need attend <span class="needed-class">${result}</span> more classes to get <span class="fin-attend">${perc}%</span>.<br>
            ${nume} / ${denom} = <span class="fin-attend">${finResult}</span>.
        `;
    }

}
