let shipActions = {
    hit() {
        if (this.hit < this.length) {
        return this.hit += 1;
        }
    },
    isSunk() {
        if (this.hit == this.length) {
            this.sunk = true;
        }
        else if (this.hit < this.length) {
            this.sunk  = false;
        }
    }
 }

function Ship(length) {
    let realShip = Object.create(shipActions);
    realShip.length = length;
    realShip.sunk = false;
    realShip.hit = 0;
}