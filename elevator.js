function elevator(numberOfFloors) {
    this.currentFloorIndex = 0;
    this.numberOfFloors = numberOfFloors;
    this.doorOpen = false;
    this.occupied = false;
    this.totalFloorCount = 0;
    this.totalTripCount = 0;
    this.inMaintenance = false;
}

elevator.prototype.MoveToFloor = function(floorNumber){
    let currentFloorIndex = floorNumber - 1;
    if(currentFloorIndex > this.numberOfFloors || currentFloorIndex < 0){
        return false;
    }

    this.occupied = true;

    while(true){
        if(this.currentFloorIndex == currentFloorIndex){
            return true;
        }
        sleep(3000);

        if(this.currentFloorIndex < currentFloorIndex){
            this.totalFloorCount++;
            currentFloorIndex++;
        }else{
            this.totalFloorCount++;
            currentFloorIndex--;
        }
    }
    
    this.occupied = false;
    this.totalTripCount++;

    if(this.totalTripCount == 99){
        this.inMaintenance = true;
    }
};

elevator.prototype.getCurrentFloor = function(){
    return this.currentFloorIndex+ 1;
};

elevator.prototype.getDoorOpen = function(){
    return this.doorOpen;
};

elevator.prototype.occupied = function(){
    return this.occupied;
};

elevator.prototype.inMaintenance = function(){
    return this.inMaintenance;
};

elevator.prototype.service = function(){
    this.inMaintenance = 0;
    this.totalFloorCount = 0;
    this.totalTripCount = 0
};

module.exports = elevator;