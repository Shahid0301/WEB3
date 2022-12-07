

let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let mainCont = document.querySelector(".main-cont");
let modalCont = document.querySelector(".mode");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let toolboxColor = document.querySelectorAll(".color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;
let removeFlag = false;

let lockClass = "fa fa-lock";
let unlockClass = "fa fa-lock-open";

let ticketArr = [];

if(localStorage.getItem("jira_tickets")){
  
    ticketArr = JSON.parse(localStorage.getItem("jira_tickets"));
    ticketArr.forEach((ticketObj) =>{
        createTicket(ticketObj.ticketColor , ticketObj.ticketTask , ticketObj.ticketID);
    })
}

for(let i = 0 ;  i < toolboxColor.length ; i++){
    toolboxColor[i].addEventListener("click" , (e) =>{
        let currentToolboxColor = toolboxColor[i].classList[0];

        let filteredTickets = ticketArr.filter((ticketObj , idx) =>{
            return currentToolboxColor === ticketObj.ticketColor;
        })
        
        //Remove previous tickets
        let allTicketsCont = document.querySelectorAll(".ticket-cont");
        for(let i=0 ; i < allTicketsCont.length ; i++){
            allTicketsCont[i].remove();
        }
        // Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @Shahid0301 
// Shahid0301
// /
// WEB3
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// Settings
// Quick setup — if you’ve done this kind of thing before
// or	
// https://github.com/Shahid0301/WEB3.git
// Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

// …or create a new repository on the command line
// echo "# WEB3" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git push -u origin master
// …or push an existing repository from the command line
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git branch -M master
// git push -u origin master
// …or import code from another repository
// You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

//  ProTip! Use the URL for this page when adding GitHub as a remote.
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About

        
        //Display new filtered tickets
        filteredTickets.forEach((ticketObj, idx) =>{
            createTicket(ticketObj.ticketColor, ticketObj.ticketTask , ticketObj.ticketID);
        })

    })
    toolboxColor[i].addEventListener("dblclick" , (e) =>{
        let allTicketsCont = document.querySelectorAll(".ticket-cont");
        for(let i=0 ; i < allTicketsCont.length ; i++){
            allTicketsCont[i].remove();
        }
        ticketArr.forEach((ticketObj , idx) =>{
            createTicket(ticketObj.ticketColor , ticketObj.ticketTask , ticketObj.ticketID);
        })
    })
}

//Listener for modal priority coloring
allPriorityColor.forEach((ColorElem, idx) => {
    ColorElem.addEventListener("click", (e) => {
        allPriorityColor.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        ColorElem.classList.add("border");

        modalPriorityColor = ColorElem.classList[0];
    })
})

addBtn.addEventListener("click", (e) => {
    //Display Modal
    //Generate ticket
    console.log("Vibhu");
    //Addflag , true -> Modal Display
    //Addflag , false -> Modal None;
    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
})

removeBtn.addEventListener("click", (e) => {
    removeFlag = !removeFlag;

})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Enter") {
        createTicket(modalPriorityColor, textareaCont.value);
        addFlag = false;
        setModalToDefault();
    }
})

function createTicket(ticketColor, ticketTask, ticketID) {
    let id = ticketID || shortid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
    <div class = "ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    `;
    mainCont.appendChild(ticketCont);

    // create Object of ticket and add to array 
    if(!ticketID) {
        
        ticketArr.push({ticketColor , ticketTask , ticketID : id});
        localStorage.setItem("jira_tickets",JSON.stringify(ticketArr));
    }

    handleRemoval(ticketCont ,id);
    handleLock(ticketCont , id);
    handleColor(ticketCont , id);
}
// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @Shahid0301 
// Shahid0301
// /
// WEB3
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// Settings
// Quick setup — if you’ve done this kind of thing before
// or	
// https://github.com/Shahid0301/WEB3.git
// Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

// …or create a new repository on the command line
// echo "# WEB3" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git push -u origin master
// …or push an existing repository from the command line
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git branch -M master
// git push -u origin master
// …or import code from another repository
// You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

//  ProTip! Use the URL for this page when adding GitHub as a remote.
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About

// 
function handleRemoval(ticket , id) {
    //removeFlag -> true -> remove
    ticket.addEventListener("click" , (e) =>{
        if(!removeFlag) return ;
        
        let idx = getTicketIdx(id);
        //DB removal
        ticketArr.splice(idx , 1);
        let strTicketArr = JSON.stringify(ticketArr);
        localStorage.setItem("jira_tickets", strTicketArr);
        ticket.remove(); // UI removal
    })
}


function handleLock(ticket , id) {
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockElem.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area");
    ticketLock.addEventListener("click", (e) => {
        let ticketIdx = getTicketIdx(id);
        if (ticketLock.classList.contains(lockClass)) {
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            ticketTaskArea.setAttribute("contenteditable", "true");
        } else {
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            ticketTaskArea.setAttribute("contentedittable", "true");
        }
        //Modify data in localStorage (Ticket Task)
        ticketArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
        localStorag.setItem("jira_tickets",JSON.stringify(ticketArr));
    })
}

function handleColor(ticket ,id) {
    let ticketColor = ticket.querySelector(".ticket-color");
    ticketColor.addEventListener("click", (e) => {
        // Get ticket index from the ticket array
        let ticketIdx = getTicketIdx(id);
        
        let currentTicketColor = ticketColor.classList[1];
        // get ticket color idx
        let currentTicketColorIdx = colors.findIndex((color) => {
            return currentTicketColor === color;
        })
        // 
        // Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @Shahid0301 
// Shahid0301
// /
// WEB3
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// Settings
// Quick setup — if you’ve done this kind of thing before
// or	
// https://github.com/Shahid0301/WEB3.git
// Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

// …or create a new repository on the command line
// echo "# WEB3" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git push -u origin master
// …or push an existing repository from the command line
// git remote add origin https://github.com/Shahid0301/WEB3.git
// git branch -M master
// git push -u origin master
// …or import code from another repository
// You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

//  ProTip! Use the URL for this page when adding GitHub as a remote.
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About

        // 
        currentTicketColorIdx++;
        let newTicketColorIdx = currentTicketColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);

        //Modify data in localStorage  (priority color change)
        ticketArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("jira_tickets" , JSON.stringify(ticketArr));
    })  
}

function getTicketIdx(id) {
    let ticketIdx = ticketArr.findIndex((ticketObj) =>{
        return ticketObj.ticketID == id;
    })
    return ticketIdx;
}

function setModalToDefault(){
    modalCont.style.display = "none";
    textareaCont.value = "";
    allPriorityColor.forEach((priorityColorElem, idx) => {
        priorityColorElem.classList.remove("border");
    })
    allPriorityColor[allPriorityColor.length - 1].classList.add("border");

}