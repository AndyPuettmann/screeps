/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.remote.upgrader');
 * mod.thing == 'a thing'; // true
 */

var roleRemoteUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.room.name !== Game.flags.Colony1.pos.roomName) {
            creep.moveTo(Game.flags.Colony1);
        }
        else {
            if(creep.memory.upgrading && creep.carry.energy == 0) {
               creep.memory.upgrading = false;
	        }
	        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	            creep.memory.upgrading = true;
	        }
        
	        if(!creep.memory.upgrading) {
                var sources = creep.room.find(FIND_SOURCES_ACTIVE);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }
            else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }

    }
};


module.exports = roleRemoteUpgrader;

