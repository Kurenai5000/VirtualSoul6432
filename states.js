// STATE = what they are experiencing right now. Volatile; rewritten every frame.

// null = unknown to the character; "unset" = not yet determined by the engine.


const state = {
  //Focus is awareness/consciousness, what you are focusing on
  focus:null,
  //mind is complex imaginations and thoughts
  mind:null,
  //innerVoice is purely your internal monologue
  innerVoice:null,
  currentAction:null,

  //perception
  visual:null,
  audio:null,
  smell:null,
  taste:null,
  //touch means directly what they are touching or feeling on their body
  touch:null,

  //0 to 100. 0 being nothing, 100 being full intensity. 
  emotion:{type:null, intensity:0},
  //feeling is more physical compared to emotion like pain or aggitation
  feeling:{type:null, intensity:0},

  //impressions on current situation/person talking to
  impressions:null,
//where they currently are/current scene
  location:null,

  facialExpression:null,
  bodyLanguage:null,
  //Hunger, thirst, arousal, health conditions, etc
  health:{},
  
  //clothes and accessories
  currentClothing:null,
  //meaning pockets, bags, what is inside them
  inventory:null, 
};

//physicalForm is their current body. Semi volatile
const physicalForm = {
  hairColor:null,
  hairStyle:null,
  eyeColor:null,
  skinColor:null,

  build:null,
  height:null,
  weight:null,

  species:null,
  subspecies:null,
  gender:null,
  age:null,

};

//mentalForm is a kind of mental body or major characteristics of their soul. Semi volatile
const mentalForm = {
  //most can work in a form of {form, intensity, what it effects, sideNotes}
  morals:[],
  ambitions:[],
  desires:[],
  drives:[],
  goals:[],
  majorLifeEvents[],

  name:null,
  personality:[],
  relationships:[
    //{who, type, intensity:0-100, notes:}
  ],
  sexualPreference:[],

  //these would signify restriction
  traumas:[],

};

//memory is whatever they want to log to memory. Short term is volatile, long is fixed.
const memory = {
 //format is {when, where, what, why}
 shortTermMemory:[],
 longTermMemory:[],
 
};

//misc is anything else the ai wishes to log. Volatile
const misc = {

};

//notes for me








