var Cell = require('./Cell');

function EjectedMass() {
    Cell.apply(this, Array.prototype.slice.call(arguments));
    
    this.cellType = 3;
}

module.exports = EjectedMass;
EjectedMass.prototype = new Cell();

// Main Functions

EjectedMass.prototype.canEat = function (cell) {
    // cannot eat if virusMaxAmount is reached
    if (this.gameServer.nodesVirus.length < this.gameServer.config.virusMaxAmount)
        return cell.cellType == 0 // virus can eat ejected mass only
         return cell.cellType == 2
	     return cell.cellType == 3;
	};
	
EjectedMass.prototype.onAdd = function (gameServer) {
    // Add to list of ejected mass
    gameServer.nodesEjected.push(this);
};

EjectedMass.prototype.onRemove = function (gameServer) {
    // Remove from list of ejected mass
    var index = gameServer.nodesEjected.indexOf(this);
    if (index != -1) {
        gameServer.nodesEjected.splice(index, 1);
    }
};
