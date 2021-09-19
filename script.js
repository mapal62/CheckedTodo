// jQuery Todo lista haladó
let superB
let todoSor = 0;
let melyiket

function ujSor() {
    superB = $('input').val();
    if (superB !== "") {
        todoSor = todoSor + 1;
        $('.lista').append(`
        <div class="row">  
        <p class="aktiv">${superB}</p>
                    <div class="icons">
                        <i class="fas fa-trash delete-btn" data-sor="${todoSor}"></i>
                        <i class="far fa-check-circle check-btn" data-sor="${todoSor}"></i>
                    </div>
        </div>
        `)
    }
    superB = $('input').val("");

}
$('button').click(() => {
    // console.log('GOMB');
    ujSor();
})
$('.lista').on('click', '.check-btn', (event) => {
    // console.log(event);
    melyiket = $(event.target).attr('data-sor');
    $(`.row:nth-of-type(${melyiket}`).children('p').toggleClass('aktiv');
    $(`.row:nth-of-type(${melyiket}`).find('.check-btn').toggleClass(['far', 'fas', 'selected']);
})
$('.lista').on('click', '.delete-btn', (e) => {
    melyiket = $(e.target).attr('data-sor');
    // console.log(melyiket);
    $(`.row:nth-of-type(${melyiket}`).hide();
})


let textarea = document.getElementById('test-target'),
    consoleLog = document.getElementById('console-log');

function logMessage(message) {
    consoleLog.innerHTML += message + "<br>";
}

textarea.addEventListener('keydown', (e) => {
    if (!e.repeat)
        logMessage(`"${e.key}" pressed  [event: keydown]`);
    else
        logMessage(`"${e.key}" repeating  [event: keydown]`);
});

textarea.addEventListener('beforeinput', (e) => {
    logMessage(`"${e.data}" about to be input  [event: beforeinput]`);
});

textarea.addEventListener('input', (e) => {
    logMessage(`"${e.data}" input  [event: input]`);
});

textarea.addEventListener('keyup', (e) => {
    logMessage(`"${e.key}" released  [event: keyup]`);
    if (e.key === "Enter") {
        ujSor();
    }
});