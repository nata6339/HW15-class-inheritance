function Clock(elem) {
    this.isShort = false;
    this.elem = elem;
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
        //     return this.formatDate(this.shortFormat);
        // } else {
        //     return this.formatDate(this.fullFormat);
        // }
        this.elem = 'hh:mm';

        } else {
        this.elem = 'hh:mm:ss'
        }
    }

    this.toggle = function (){
        this.isShort = !this.isShort;
    }

    setInterval(() => this.render(), 1000);
}
document.getElementById('clock').addEventListener('click', function () {
    clock.toggle();
})

// function Short(){
//     this.shortFormat = 'hh:mm'
// }
//
// function Full() {
//     this.fullFormat = 'hh:mm:ss'
// }
// Short.prototype = new Clock();
// Full.prototype = new Clock();
let clock = new Clock();
document.getElementById('clock').innerHTML = clock.elem;