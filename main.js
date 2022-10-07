// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

let chassis = createChassis()
console.log(chassis)
const addBody = (whatever) => {
	whatever.body = "Fever"

	return whatever
}
addBody(chassis)
console.log(chassis)
const addWheels = (whatever) => {
    whatever.wheels = 4;
    return whatever;
  }
addWheels(chassis2)
console.log(chassis)
const addEngine = (whatever) => {
    whatever.engine = "4.8L";
    return whatever;
}
const addSteeringWheel = (chassisObject) => {
    chassisObject.wheel = "Tilting";
    return chassisObject;
}
const addDriveTrain = (chassisObject) => {
    chassisObject.drivetrain = "Two wheel drive ";
    return chassisObject;
}
