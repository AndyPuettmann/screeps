var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRemoteHarvester = require('role.remote.harvester');
var roleRemoteUpgrader = require('role.remote.upgrader');
var roleClaimer = require('role.claimer');

module.exports.loop = function () {
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    // Count Creeps
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteharvester');
     var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteupgrader');
     var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
     
    // Harvester-lvl1 x 1
    if(harvesters.length < 1) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], {role: 'harvester'});
        console.log('Spawning new harvester lvl1: ' + newName + ' - H:' + harvesters.length + '+1/U:' + upgraders.length + '+1/B:' + builders.length + '/RH:' + harvesters2.length);
    }

    // Upgrader-lvl1 x 1
    else if (upgraders.length < 1) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], {role: 'upgrader'});
        console.log('Spawning new upgrader lvl1: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '+1/B:' + builders.length + '/RH:' + harvesters2.length);
    }

    // Builder-lvl1 x 1
    else if (builders.length < 1) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], {role: 'builder'});
        console.log('Spawning new builder lvl1: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '+1/RH:' + harvesters2.length);
    }
    
    // Harvester-lvl2 x 2
    else if (harvesters.length < 2) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], {role: 'harvester'});
        console.log('Spawning new harvester lvl2: ' + newName + ' - H:' + harvesters.length + '+1/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length);
    }
    
    // Builder-lvl2 x 2
    else if (builders.length < 2) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE], {role: 'builder'});
        console.log('Spawning new builder lvl2: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '+1/RH:' + harvesters2.length);
    }

    // Harvester-lvl3 x 9
     else if (harvesters.length < 9) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], {role: 'harvester'});
        console.log('Spawning new harvester lvl3: ' + newName + ' - H:' + harvesters.length + '+1/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length);
    }
    
    // Builder-lvl3 x 3
    else if(builders.length < 3) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], {role: 'builder'});
        console.log('Spawning new builder lvl3: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '+1/RH:' + harvesters2.length);
    }
    
    // Upgrader-lvl3 x 3
    else if(upgraders.length < 3) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], {role: 'upgrader'});
        console.log('Spawning new upgrader lvl3: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '+1/B:' + builders.length + '/RH:' + harvesters2.length);
    }
        // Claimer-lvl1 x 1
    else if(claimers.length < 1) {
        var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE], {role: 'claimer'});
        console.log('Spawning new claimer: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length);
    }
    // Remharvester-lvl2 x 3
     else if(harvesters2.length < 3) {
         var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], {role: 'remoteharvester'});
         console.log('Spawning new RemoteHarvester lvl1: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length + '+1');
     }
    // Claimer-lvl1 x 2
    else if(claimers.length < 2) {
        var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE], {role: 'claimer'});
        console.log('Spawning new claimer: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length);
    }
    // Remharvester-lvl2 x 8
     else if(harvesters2.length < 8) {
         var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], {role: 'remoteharvester'});
         console.log('Spawning new RemoteHarvester lvl2: ' + newName + ' - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length + '+1');
     }
    // Step 12 - Idle
    else {
        // console.log('Evolution Finished - H:' + harvesters.length + '/U:' + upgraders.length + '/B:' + builders.length + '/RH:' + harvesters2.length);
    }
    

    var tower = Game.getObjectById('5751ea7a3474a1650d34d412');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure && tower.energy > (tower.energyCapacity / 2) ) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'remoteharvester') {
            roleRemoteHarvester.run(creep);
        }
        if(creep.memory.role == 'remoteupgrader') {
            roleRemoteUpgrader.run(creep);
        }
    }
}
