function Clock(elem) {
    this.isShort = false;
    this.elem = elem;
    this.shortFormat = 'hh:mm'
    this.fullFormat = 'hh:mm:ss'
    this.start = function () {
        this.render();
        setInterval(() => this.render(), 500);
        this.elem.addEventListener('click',() => this.toggle());
    }
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
    };

    this.fixNumber = function (num) {
        if (num < 10)
            return '0' + num;
        return num;
    };

    this.render = function () {
        if (this.isShort) {
            this.elem.innerHTML = this.formatDate(this.shortFormat);
        } else {
            this.elem.innerHTML = this.formatDate(this.fullFormat);
        }
    };

    this.toggle = function () {
        this.isShort = !this.isShort;
    };
}

function Star(elem) {
    this.elem = elem;
    this.shortFormat = 'hh*mm';
    this.fullFormat = 'hh*mm*ss';
}

function Slash(elem) {
    this.elem = elem;
    this.shortFormat = 'hh/mm';
    this.fullFormat = 'hh/mm/ss';
}

Star.prototype = new Clock();
Slash.prototype = new Clock();

let clock = new Clock(document.getElementById('clock'));
let star = new Star(document.getElementById('star'));
let slash = new Slash(document.getElementById('slash'));

clock.start();
star.start();
slash.start();

