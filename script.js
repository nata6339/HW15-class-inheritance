function Clock(elem) {
    this.isShort = false;
    this.elem = elem;
    this.shortFormat = 'hh:mm'
    this.fullFormat = 'hh:mm:ss'
    this.start = function (){
        this.render();
        setInterval(() => this.render(), 500);
    };
    this.formatDate = function (format) {
        let fullDate = new Date();
        let hours = this.fixNumber(fullDate.getHours());
        let minutes = this.fixNumber(fullDate.getMinutes());
        let seconds = this.fixNumber(fullDate.getSeconds());
        this.fixNumber()
        let ren = format
            .replace('hh', hours)
            .replace('mm', minutes)
            .replace('ss', seconds)
        return ren;
    }

    this.fixNumber = function (num) {
        if (num < 10)
            return '0' + num;
            return num;
    }

    this.render = function (){
        if(this.isShort){
            this.elem.innerHTML = this.formatDate(this.shortFormat);
        } else {
            this.elem.innerHTML = this.formatDate(this.fullFormat);
        }

    }

    this.toggle = function (){
        this.isShort = !this.isShort;
    }


}

document.getElementById('clock').addEventListener('click', function () {
    clock.toggle();
})

function Short(elem){
    this.elem = elem;
this.shortFormat = 'hh:mm'
}

function Full(elem) {
    this.elem = elem;
this.fullFormat = 'hh:mm:ss'
}

Short.prototype = new Clock(document.getElementById('clock'));
Full.prototype = new Clock(document.getElementById('clock'));

let clock = new Clock(document.getElementById('clock'));
let shortClock = new Short(document.getElementById('short'));
let fullClock = new Full(document.getElementById('full'))

clock.start();
shortClock.start();
fullClock.start()
