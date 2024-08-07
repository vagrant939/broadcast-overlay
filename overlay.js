// Simulating the $overlay object for local testing
const $overlay = {
    on: function(eventName, callback) {
        window.addEventListener('message', function(event) {
            if (event.data.type === eventName) {
                callback(event.data);
            }
        });
    }
};

$overlay.on("tip", (e) => {
    document.getElementById("title").textContent = `Tip of ${e.amount} from ${e.user}`;
    document.getElementById("msg").textContent = e.msg;
    document.body.animate([
        {opacity: 0},
        {opacity: 1, offset: 0.25},
        {opacity: 1, offset: 0.75},
        {opacity: 0},
    ], 2000);
});

// For testing purposes, you can simulate a tip event
setTimeout(() => {
    window.postMessage({
        type: 'tip',
        amount: 100,
        user: 'TestUser',
        msg: 'Thanks for the great stream!'
    }, '*');
}, 2000);

