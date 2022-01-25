function combineImage(pathTable){
    fetch(pathTable).then(a => a.json()).then(a => {
        // get canvas
        var canvas = document.getElementById('the-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext('2d');
        var w = canvas.getBoundingClientRect().width;
        var h = canvas.getBoundingClientRect().height;

        // Load each images
        a.forEach(img => {
            let i = new Image(128,128);
            i.src = img;
            i.addEventListener('load', () => {
                let x = Math.floor(Math.random() * (w-128));
                let y = Math.floor(Math.random() * (h-128));
                ctx.drawImage(i, x, y, 128, 128);
            });
        });      
    });
}

function combineImagePromise(pathTable) {
    fetch(pathTable).then(a => a.json()).then(a => {
        // get canvas
        var canvas = document.getElementById('the-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext('2d');
        var w = canvas.getBoundingClientRect().width;
        var h = canvas.getBoundingClientRect().height;

        // Load each images
        a.forEach(img => {
            let p = new Promise((resolve, reject) => {
                let i = new Image();
                i.src = img;
                i.addEventListener("load", () => {
                    resolve(i);
                });
            });
            p.then(i => {
                let x = Math.floor(Math.random() * (w-128));
                let y = Math.floor(Math.random() * (h-128));
                ctx.drawImage(i, x, y, 128, 128);
            });
        }); 
    })
}


combineImagePromise("table.json");