import Calendar from "../module_version/calendar.js";

window.addEventListener("load", function(){
    const section = document.querySelector(".select-date");

    const calendar = new Calendar(document);

    section.onclick = (e)=>{
        e.preventDefault();

        if (e.target.nodeName != "INPUT")
            return;

        calendar.load();
    };
});