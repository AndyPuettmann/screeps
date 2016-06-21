/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.claimer');
 * mod.thing == 'a thing'; // true
 */

var roleClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.room.name !== Game.flags.Colony1.pos.roomName) {

            creep.moveTo(Game.flags.Colony1);
        }
        else {
            if(!creep.pos.isNearTo(creep.room.controller)) creep.moveTo(creep.room.controller);
            else creep.reserveController(creep.room.controller);
        }
    }
};

module.exports = roleClaimer;
