function buttonClicked() {
    changeButtonStyle();
    getResult();
}

function changeButtonStyle() {
    const button = document.getElementById("calcButton");

    button.addEventListener("mousedown", () => {
        button.style.borderBottomWidth = "0";
        button.style.maxHeight = "8vh";
        button.style.marginTop = "calc(2vh + 5px)";
        button.style.marginBottom = "7vh";
        button.style.boxShadow = "#1117 0px 6px 10px";
    });

    button.addEventListener("mouseup", () => {
        button.style.borderBottomWidth = "5px";
        button.style.maxHeight = "8vh";
        button.style.marginTop = "2vh";
        button.style.marginBottom = "7vh";
        button.style.boxShadow = "#1117 0px 10px 10px";
    });

    button.addEventListener("mouseleave", () => {
        button.style.borderBottomWidth = "5px";
        button.style.maxHeight = "8vh";
        button.style.marginTop = "2vh";
        button.style.marginBottom = "7vh";
        button.style.boxShadow = "#1117 0px 10px 10px";
    });
}

function getResult() {
    var perc = parseInt(document.getElementById("requiredPerc").value) / 100;
    var total = parseInt(document.getElementById("totalClasses").value);
    var missed = parseInt(document.getElementById("missedClasses").value);

    const resultHead = document.getElementById("result");

    const calcbtn = document.getElementById("calcButton");

    var curPerc = (total - missed)/total;
    if (missed > total || isNaN(total) || isNaN(missed) || isNaN(perc)) {
        
        calcbtn.style.background = "#b66";
        calcbtn.style.borderBottomColor = "#944";
        calcbtn.style.outlineColor = "#944";

        resultHead.innerHTML = `
            Enter valid values.
        `;
    } else {
        if (perc <= curPerc) {
            var result = Math.floor((total - missed - (perc*total))/(perc + 1));
            
            if (result > 0) {

                calcbtn.style.background = "#6b6";
                calcbtn.style.borderBottomColor = "#494";
                calcbtn.style.outlineColor = "#494";

                var nume = (Number(total) - Number(missed));
                var denom = (Number(total) + Number(result));
                var finResult = (nume/denom).toFixed(2);

                resultHead.innerHTML = `
                    You have sufficient attendance ${total - missed} / ${total} = <span class="fin-attend">${curPerc.toFixed(2)}%</span>.<br>
                    You can skip <span class="needed-class">${result}</span> more classes.<br>
                    ${nume} / ${denom} = <span class="fin-attend">${finResult}%</span>.

                `;
            } else {

                calcbtn.style.background = "#6b6";
                calcbtn.style.borderBottomColor = "#494";
                calcbtn.style.outlineColor = "#494";

                resultHead.innerHTML = `
                    You have sufficient attendance ${total - missed} / ${total} = <span class="fin-attend">${curPerc.toFixed(2)}%</span>.<br>
                    You <span class="fin-attend"><u>CAN'T</u></span> skip any more classes.
                `;
            }
        } else {
            var result = Math.ceil((total - missed - (perc*total))/(perc - 1));
            var nume = (Number(result) + Number(total) - Number(missed));
            var denom = (Number(result) + Number(total));
            var finResult = (nume/denom).toFixed(2);

            calcbtn.style.background = "#b66";
            calcbtn.style.borderBottomColor = "#944";
            calcbtn.style.outlineColor = "#944";
        
            resultHead.innerHTML = `
                You have insufficient attendance ${total - missed} / ${total} = <span class="insuf-attend">${curPerc.toFixed(2)}%</span>!<br>
                You need to attend <span class="needed-class">${result}</span> more classes to get <span class="fin-attend">${perc}%</span>.<br>
                ${nume} / ${denom} = <span class="fin-attend">${finResult}%</span>.
            `;
        }
    }

}
