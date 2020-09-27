

var metadata = { title: "In the Woods", author: "Michelle Luo", date: "2020",
examples: [ "narrator=teller",
"order=retrograde,narratee=robber,narrator=guard,event_numbers",
"speaking=after,narrator=teller,order=random,event_numbers,expression_numbers" ] };

// PLACES first
place.forest = new Place("a", "forest clearing");
place.trail = new Place("the", "trail");

place.trail.addView(place.trail,"on the trail");

// ACTORS next
actor.camper = new Actor("the", "camper", spatial.in, place.forest, pronoun.masculine);
actor.buddy = new Actor("", "Buddy", spatial.in, place.forest, pronoun.masculine);
actor.squirrel = new Actor("a", "squirrel", spatial.in, place.trail, pronoun.neuter);

// THINGS next
thing.leash = new Thing("the", "leash", spatial.of, actor.buddy);
thing.tent = new Thing("a", "tent", spatial.in, place.forest);
thing.ears = new Thing("the","ears",spatial.of, actor.buddy);
thing.ears.owner = actor.buddy;
thing.tree = new Thing("a", "tree", spatial.in, place.forest);

// Finally, EVENTS
var SET_UP = new Event(actor.camper,"set", thing.tent, "up in", place.forest);
var HIKE = new Event([actor.camper, actor.buddy], "hike", place.trail);
var FREEZE1 = new Event(actor.buddy, "freeze");
var EARS = new Event(actor.buddy, "perk up", thing.ears);
var GROWL = new Event(actor.buddy, "growl");
var FREEZE2 = new Event(actor.camper, "freeze");
var LEASH = new Event(actor.buddy, "pull", thing.leash);
LEASH.setTemplate("[agent/s] [pull/v] on [object/o]");
var SQUIRREL = new Event(actor.squirrel, "climb", thing.tree);
SQUIRREL.setTemplate("[agent/s] [climb/v] up [object/o]");
var DISAPPEAR = new Event(actor.squirrel, "disappear");
var BARK = new Event(actor.buddy, "bark", thing.tree);
BARK.setTemplate("[agent/s] [bark/v] at [object/o]");
var CHUCKLES = new Event(actor.camper, "chuckle");
var PET = new Event(actor.camper, "pet", actor.buddy);
var RETURN = new Event([actor.camper, actor.buddy], "return", place.forest);
RETURN.setTemplate("[agent/s] [return/v] to [object/o]");

var world = new World(place, actor, thing, eventSeq);

function run() {
    var spin = getParameters(world.actor);
    narrate(metadata, spin, world);
};
