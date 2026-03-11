const returnRandomStr =()=>{
const randSentences = [
    "I've got soul but I'm not a soldier."
    ,"Have you ever stopped to watch a bluebird drop from a tree, and take to the air? Me Neither Have you ever stopped to finish out a rhyme but the right words just weren't there? Meat Cleaver"
    ,"If the world were an ocean, then I'd be a deep and handsome fish. A fish that's drowning."
    ,"The more you know, the less you understand."
    ,"Tomorrow is the first day of the rest of your life"
    ,"How can my feet smell if they don't have a nose?"
    ,"Imagine how is touch the sky"
    ,"The shadow of a door is just a wall that hasn't decided yet."
    ,"You cannot cross the same river twice, but you can get equally wet."
    ,"A man who carries a cat by the tail learns something he can learn no other way, but mostly about cats."
    ,"The cup is only empty if you forget that it is full of air."
    ,"Time is a flat circle, but circles are just zeros with ambition."
    ,"He who asks a question is a fool for a minute. He who never asks is just quieter."
    ,"The fish does not know it is wet until it is dry, and by then it is too late."
    ,"A candle that burns twice as bright burns twice as fast, but a candle that doesn't burn is just wax."
    ,"The map is not the territory, but it is much easier to fold."
    ,"To understand the river, you must first become slightly damp."
    ,"Every mirror is just a window that gave up."
    ,"The wise man speaks because he has something to say. The fool speaks because the silence was getting weird."
    ,"If you stare into the void long enough, the void begins to wonder why you keep staring."
    ,"A tree that falls in the forest still has to deal with the consequences."
    ,"The door you do not open is just a wall with commitment issues."
    ,"We are all just stars that learned to feel bad about themselves."
    ,"The ocean does not apologize for its depth, mostly because it cannot speak."
    ,'“The silence of the stars is louder than the voice of the ocean’s heartbeat.” – Unknown'
    ,'“A broken mirror reflects the soul of a shadow.” – Anonymous'
    ,'“Truth is the wind that never forgets to fold the mountains.” – Unnamed Philosopher'
    ,'“To understand the void, you must first fill the cup with echoes.” – Sage of the Abyss'
    ,'“When the horizon burns, the sky remembers the taste of gravity.” – Etheric Poet'
    ,'“Only the blind can see the light trapped in a tear of glass.” – VisionLess Seer'
    ,'“The storm’s tears wash away the footprints of the clouds.” – Silent Wanderer'
    ,'“Knowledge is the flower that blooms in the garden of unspoken dreams.” – Wise Gardener'
    ,'“In the reflection of time, eternity wears no face.” – Temporal Monk'
    ,'“To swim in the river of doubt is to drink the fire of truth.” – Unknown'
    ,'“The tree of wisdom grows roots in the ashes of forgotten wings.” – Lost Scholar'
    ,'“Darkness is the lover that embraces the moon’s hidden laughter.” – Celestial Bard'
    ,'“A candle burns brightest when its flame has learned to sleep.” – Mystic Flame'
    ,'“The mountain kneels when the sky’s weight becomes a feather.” – Cloud Climber'
    ,'“In the silence of absence, the echoes of presence remain deafening.” – Philosopher of Shadows'
    ,'“The sand holds the memory of every footprint, even those that never walked.” – Desert Whisperer'
    ,'“The river flows backward when the stones learn the language of flight.” – Ancient Traveler'
    ,'“The moment you grasp the sun, you’ll feel the weight of its shadow.” – Fire’s Reflection'
    ,'“Only those who listen to silence can hear the symphony of colors.” – The Silent Musician'
    ,'“The key to the heart’s door is hidden in the lock of the mind’s window.” – Mindful Architect'
    ,'“The moon dances with the ocean, but its footsteps leave no ripples.” – Nighttime Philosopher'
    ,'“An empty cup holds more weight than a full one when filled with thought.” – Thoughtful Vessel'
    ,'“The rain never falls on the earth that refuses to look up.” – Water Dreamer'
    ,'“The spider weaves truth from lies, but its web catches only dreams.” – Web Weaver'
    ,'“A silent scream can echo longer than a thunderclap.” – Quiet Storm'
    ,'“A mountain’s tears carve valleys, but its smile remains unseen.” – Earth’s Guardian'
    ,'“The bird of wisdom flies only when the wind forgets its name.” – Feathered Sage'
    ,'“The light in the cave is not the same as the light outside, yet both illuminate nothing.” – Dark Explorer'
    ,'“When the ocean sleeps, the fish remember the land.” – Submerged Philosopher'
    ,'“A compass that points inward will never find the North Star.” – Navigator of the Mind'
    ,'“The wings of time are weighed down by the feathers of eternity.” – Temporal Voyager'
    ,'“A seed planted in stone will bloom only when the sun sets forever.” – Mountain Gardener'
    ,'“The horizon is a mirror that breaks when touched by truth.” – Edge Walker'
    ,'“The universe whispers, but only silence can answer its questions.” – Cosmic Listener'
    ,'“An open hand can hold more than a clenched fist, yet it carries nothing.” – Grasp of Wisdom'
    ,'“The shadows in the sunlight are deeper than those in the dark.” – Twilight Seeker'
    ,'“A dream remembered is a path never taken, yet always walked.” – Night’s Wanderer'
    ,'“To climb the mountain of doubt, you must first descend into certainty.” – Unknown Sage'
    ,'“The waves break, not on the shore, but on the edge of time.” – Eternal Surfer'
    ,'“A mirror never tells the truth, only the story of the one who’s lost it.” – Reflection’s Muse'
    ,'“The fire burns brighter when fed by the cold of forgotten memories.” – Frozen Flame'
    ,'“In the shadow of light, the darkness breathes, but never sleeps.” – Night Watcher'
    ,'“The forest sings only when the trees forget to listen.” – Woodland Philosopher'
    ,'“A bridge built over silence connects two hearts that never met.” – Architect of Longing'
    ,'“The road to nowhere is paved with footsteps of everywhere.” – Traveler of Infinity'
    ,'“The sky holds the earth’s dreams, yet the ground never sleeps.” – Star Gazer'
    ,'“A single drop of rain can drown the desert, but only if the sky wills it.” – Rainmaker'
    ,'“In the eye of the storm, the calm sees more than the wind.” – Cyclone’s Soul'
    ,'“The wind carries no name, yet it whispers to every leaf.” – Whispered Leaf'
    ,'“The sun never sets on the mind that forgets the dawn.” – DreamCatcher'
    ,'“The deepest ocean can’t hide the shallows of a forgotten tear.” – Oceanic Poet'
    ,'“A shadow that bends carries more light than one that stands still.” – Shadow Walker'
    ,'“The stars only shine when no one is looking.” – Night’s Philosopher'
    ,'“An hourglass filled with memories runs faster than one filled with sand.” – Time’s Keeper'
    ,'“The river’s flow remembers the stone that forgot the water.” – Stream of Thought'
    ,'“The tree of hope grows tallest when planted in a sky of doubt.” – Dream Seeder'
    ,'“The horizon bends when the moon learns to fly.” – Sky Navigator'
    ,'“The fire in the heart burns coldest in the absence of ashes.” – Flame Keeper'
    ,'“The future is a shadow of the past that dances in the light of now.” – Temporal Dreamer'
    ,'“In the void, even echoes forget their origins.” – Abyss Philosopher'
]
    let int = Math.floor(Math.random()*randSentences.length);
    return randSentences[int];
}
console.log(returnRandomStr());