// practices.js — core data for the Coming Home devotional practice companion

export const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const DAY_DATA = {
  Monday: { theme: "building the container", practices: ["zazen","threshold","weights"], note: "Start the week in the body. Strength as devotion." },
  Tuesday: { theme: "listening", practices: ["zazen","threshold","walk"], note: "Walk slowly. Let the marri and tuart speak first." },
  Wednesday: { theme: "strength & fire", practices: ["zazen","threshold","weights"], note: "Midweek. The body wants to move. Let it." },
  Thursday: { theme: "tending", practices: ["zazen","threshold","walk"], note: "Softer day. Notice what your body is holding." },
  Friday: { theme: "completion", practices: ["zazen","threshold","weights"], note: "The last strong practice of the week. Finish what the body started." },
  Saturday: { theme: "earth time", practices: ["zazen","tree","walk-long"], note: "Your Sophie Strand day. No agenda. Just proximity to the living world." },
  Sunday: { theme: "rest as resistance", practices: ["zazen","rest","threshold"], note: "Self-preservation is political warfare. Rest is the practice today." },
};

export const PRACTICE_DETAIL = {
  zazen: { label: "Zazen", icon: "◯", duration: "10 min", color: "#6B8F71", time: "morning", description: "Sit. Spine long. Cosmic mudra. Label thoughts. Return to body. Not special — just this." },
  threshold: { label: "Threshold Ritual", icon: "◈", duration: "5 min", color: "#8B7D6B", time: "evening", description: "Break the trance between work and home. Qi gong shaking, EFT tapping, or barefoot earth standing. Same modality for 2 weeks before changing." },
  weights: { label: "Weights", icon: "△", duration: "30–45 min", color: "#B07D62", time: "evening", description: "Kara Duval Range or similar. Reclaim your body as yours. On migraine days: do half, or just the warm-up." },
  walk: { label: "Walk Without Input", icon: "∿", duration: "15–30 min", color: "#6B8FA0", time: "evening", description: "No earbuds. Just you, the trees, and Whadjuk Noongar boodja. Notice one thing each walk." },
  "walk-long": { label: "Longer Nature Walk", icon: "∿", duration: "30–60 min", color: "#6B8FA0", time: "any", description: "Unhurried. Let the season teach you. No agenda, no destination." },
  tree: { label: "Sit With a Tree", icon: "⌘", duration: "10+ min", color: "#6B8F71", time: "any", description: "Same tree each week. Back against bark. Do nothing. Relationship is built through return." },
  rest: { label: "Rest", icon: "○", duration: "as needed", color: "#A09080", time: "any", description: "Not earned. Not lazy. Radical. Audre Lorde called self-care political warfare." },
};

export const STATES = [
  { id: "activated", label: "Activated / Anxious", emoji: "⚡", color: "#B07D62", suggestion: "Try the threshold ritual early — shaking for 3 min, then stillness. Let the charge move through. Your nervous system knows how to discharge this." },
  { id: "flat", label: "Flat / Depleted", emoji: "〰", color: "#6B8FA0", suggestion: "Gentle is the word today. Even 5 min of zazen counts. Or skip to the walk — let the air wake you. You don't have to earn the day." },
  { id: "pain", label: "In Pain", emoji: "◇", color: "#A09080", suggestion: "Modified everything. Sit if you can. Walk gently if you can. Rest if that's what's true. No shame. The practice holds you even on days like this." },
  { id: "foggy", label: "Foggy / Scattered", emoji: "≋", color: "#8B7D6B", suggestion: "Body first. Stand up and shake for 60 seconds. Then decide. The fog lifts when you move. Your ADHD brain needs the body to lead." },
  { id: "grounded", label: "Grounded / Clear", emoji: "●", color: "#6B8F71", suggestion: "Beautiful. Follow the rhythm as written. This is the day your practice deepens. Trust the structure." },
  { id: "tender", label: "Tender / Raw", emoji: "◠", color: "#8BAF91", suggestion: "Be very gentle. Zazen can hold tenderness. Tapping can help it move. Don't push into weights today. Tenderness is not weakness." },
];

export const TIMER_PRESETS = [
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
  { label: "15 min", seconds: 900 },
  { label: "20 min", seconds: 1200 },
];

// Paraphrased and attributed — never direct quotes longer than a sentence.
export const QUOTES = [
  { text: "Attention is the most basic form of love.", author: "after Charlotte Joko Beck" },
  { text: "The practice is simply to return — not to get it right, but to begin again.", author: "after Charlotte Joko Beck" },
  { text: "Someone I loved once gave me a box full of darkness. It took years to understand that this too was a gift.", author: "after Mary Oliver" },
  { text: "Pay attention. Be astonished. Tell about it.", author: "after Mary Oliver" },
  { text: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", author: "after Audre Lorde" },
  { text: "Your silence will not protect you. But your rest might sustain you.", author: "after Audre Lorde" },
  { text: "Walk as if you are kissing the Earth with your feet.", author: "after Thich Nhat Hanh" },
  { text: "We are here to awaken from the illusion of our separateness.", author: "after Thich Nhat Hanh" },
  { text: "You are not a separate self. You are the mycelium dreaming it is a mushroom.", author: "after Sophie Strand" },
  { text: "Healing is not a return to some previous state. It is composting yourself into something new.", author: "after Sophie Strand" },
  { text: "The moment you can recognise what is true, that is the moment of freedom.", author: "after Tara Brach" },
  { text: "Radical acceptance does not mean approving of what is. It means letting reality be reality so you can respond from wholeness.", author: "after Tara Brach" },
  { text: "All flourishing is mutual. The land gives to us and asks us to give in return.", author: "after Robin Wall Kimmerer" },
  { text: "Gratitude is the thread that connects us to the living world. It is not a feeling — it is a practice.", author: "after Robin Wall Kimmerer" },
  { text: "Liberation is not an escape from suffering. It is the capacity to be with what is.", author: "after Lama Rod Owens" },
  { text: "The body holds what the mind cannot yet speak. Practice is learning the body's language.", author: "after Lama Rod Owens" },
  { text: "In the beginner's mind there are many possibilities; in the expert's mind there are few.", author: "after Shunryu Suzuki" },
  { text: "When you do something, you should do it with your whole body and mind.", author: "after Shunryu Suzuki" },
  { text: "Rest is not a reward. It is a right. It is a radical refusal to be ground down.", author: "after Tricia Hersey" },
  { text: "You were not born to be exhausted. You were born to be whole.", author: "after Tricia Hersey" },
];

// Extended practice guides — detailed instructions for every named practice
export const PRACTICE_GUIDES = {
  // ── Stillness ──
  'Zazen': {
    duration: '10–25 min', root: 'stillness', icon: '◯',
    description: 'The foundational sitting practice of Zen. Not a technique for achieving a special state — simply the practice of being here.',
    instructions: 'Find your seat — cushion, bench, or chair. Spine upright but not rigid. Hands in cosmic mudra (left hand resting in right, thumbs lightly touching). Eyes soft, gaze lowered at 45 degrees. Breathe naturally. When thoughts arise, notice them without judgment and return to the breath. The practice is the return — ten thousand returns, each one complete.',
    whenToUse: 'Daily, ideally morning. This is the spine of everything else.',
  },
  'Walking Meditation': {
    duration: '10–20 min', root: 'stillness', icon: '◯',
    description: 'Kinhin — the walking that is also sitting. Attention meets the feet meeting the earth.',
    instructions: 'Stand. Feel the weight shift as you begin to move. Walk very slowly — one step per full breath. Feel the heel lift, the foot swing, the placement. Hands can rest at the belly (shashu position) or hang naturally. Eyes soft, gaze a few feet ahead. When the mind wanders, return to the sensation of the sole touching the ground. Outdoors is ideal — barefoot on grass if possible.',
    whenToUse: 'When sitting feels too still or the body is restless. After long periods of desk work.',
  },
  'Breath Counting': {
    duration: '10 min', root: 'stillness', icon: '◯',
    description: 'A concentration practice. Count each exhale from one to ten, then begin again. Simple — but humbling.',
    instructions: 'Sit as for zazen. On each exhale, silently count: one... two... three... up to ten. If you lose count or go past ten, simply return to one. No frustration — the return IS the practice. The counting is a scaffolding for attention, nothing more. When concentration deepens, you can drop the counting and rest in the breath itself.',
    whenToUse: 'When the mind is scattered, as a warm-up for zazen, or when new to meditation.',
  },
  'Sky-Like Mind': {
    duration: '15–20 min', root: 'stillness', icon: '◯',
    description: 'Open awareness meditation — thoughts are clouds, awareness is the sky. Nothing to fix, nothing to follow.',
    instructions: 'Sit comfortably. Begin with a few minutes of breath awareness to settle. Then let go of focusing on the breath. Open your awareness to everything — sounds, sensations, thoughts, emotions — without following or rejecting any of it. Imagine your mind as a vast sky. Thoughts arise like clouds and pass. Sounds appear and fade. You are the sky, not the weather. Rest in that spaciousness.',
    whenToUse: 'When you need expansion rather than focus. When feeling constricted or over-identified with thoughts.',
  },

  // ── Embodiment ──
  'Threshold Ritual': {
    duration: '5 min', root: 'embodiment', icon: '◈',
    description: 'A somatic practice to mark the transition between states — from work to home, from doing to being. Breaks the trance of momentum.',
    instructions: 'Choose one modality and stick with it for two weeks: qi gong shaking (shake the whole body for 3 minutes, then stand still for 2), EFT tapping (tap through the standard points while breathing deeply), or barefoot earth standing (feet on soil or grass, eyes closed, feel the ground hold you). The key is consistency — same practice, same threshold, same intention to arrive.',
    whenToUse: 'At transitions: arriving home, before practice, after intense work.',
  },
  'Body Scan': {
    duration: '15–20 min', root: 'embodiment', icon: '◈',
    description: 'Systematic attention through the body. Not fixing, not relaxing on demand — just noticing what is actually here.',
    instructions: 'Lie down or sit comfortably. Begin at the top of the head. Move your attention slowly downward — forehead, eyes, jaw, throat, shoulders, arms, hands, chest, belly, hips, legs, feet. At each area, simply notice what is present: tension, warmth, numbness, tingling, nothing at all. Spend 3–5 breaths at each station. Where you find tension, breathe into it gently. Where you find numbness, offer gentle curiosity. No need to change anything.',
    whenToUse: 'Before sleep, when dissociated or "in the head," when you need to come back to the body.',
  },
  'SNOELL Check-In': {
    duration: '5 min', root: 'embodiment', icon: '◈',
    description: 'A quick somatic inventory from Nkem Ndefo\'s Resilience Toolkit. SNOELL: Sensation, Nervous system, Orientation, Emotion, Language, Landscape.',
    instructions: 'Pause and check in with each layer: SENSATION — what physical sensations are present right now? NERVOUS SYSTEM — am I mobilised (fight/flight), immobilised (freeze), or in a regulated window? ORIENTATION — where am I in space? Look around slowly. EMOTION — what feeling is here, even faintly? LANGUAGE — what words or phrases is my inner voice repeating? LANDSCAPE — what is the quality of my inner terrain right now?',
    whenToUse: 'Start of practice, during moments of overwhelm, as a daily check-in.',
  },
  'Shaking Practice': {
    duration: '3–7 min', root: 'embodiment', icon: '◈',
    description: 'Therapeutic shaking to discharge held tension and mobilise the body. Animals do this instinctively after threat — we need to remember how.',
    instructions: 'Stand with knees slightly bent, feet hip-width apart. Begin shaking — start with the hands, let it move up through the arms, shoulders, torso, hips, legs. The whole body trembles. Breathe through the mouth. Let sound come if it wants to. Shake for 3–5 minutes. Then stop suddenly. Stand completely still for 1–2 minutes. Feel what is happening in the body now. Notice the aliveness.',
    whenToUse: 'When activated/anxious, before sitting meditation, when feeling frozen or stuck.',
  },
  'EFT Tapping': {
    duration: '5–10 min', root: 'embodiment', icon: '◈',
    description: 'Emotional Freedom Technique — tapping on meridian endpoints while acknowledging what is present. Simple, portable, surprisingly effective.',
    instructions: 'Identify what you are feeling (anxiety, grief, frustration). Rate its intensity 0–10. Tap firmly with two fingers on each point in sequence while stating what is true: "Even though I feel this [name it], I accept myself." Points: side of hand, top of head, eyebrow, side of eye, under eye, under nose, chin, collarbone, under arm. Repeat 2–3 rounds. Re-rate the intensity. Notice what shifted.',
    whenToUse: 'Acute emotional distress, anxiety spikes, before difficult conversations.',
  },

  // ── Ancestors ──
  'Ancestral Evocation': {
    duration: '10–15 min', root: 'ancestors', icon: '✦',
    description: 'Calling on the well ancestors — those in your lineage who completed their healing and want to support you.',
    instructions: 'Sit quietly. Close your eyes. Begin by grounding — feel your feet, your seat, your breath. Then imagine yourself standing at the edge of a vast landscape. Behind you stretches a long line of beings — your ancestors, going back and back. Focus on those who are well, healed, vibrant. You may see faces, or just feel a quality of presence. Ask: "What do you want me to know today?" Listen with the body, not the mind. Stay for 10 minutes. Close by thanking them.',
    whenToUse: 'Weekly, or when feeling alone, unmoored, or unsupported.',
  },
  'Grief Offering': {
    duration: '15–20 min', root: 'ancestors', icon: '✦',
    description: 'A practice of offering your grief — not processing it, not fixing it, but placing it consciously in the hands of the ancestors and the earth.',
    instructions: 'Find a quiet outdoor spot if possible. Sit or kneel. Place your hands on the earth. Name what you are grieving — aloud or silently. Be specific. "I grieve the loss of..." Repeat as many times as needed. Imagine the grief flowing through your hands into the earth, where it is received, composted, transformed. The earth is not burdened by your grief — it knows how to hold it. End by placing a small offering: a leaf, a stone, some water.',
    whenToUse: 'When grief feels too large to hold alone. At turning points. After loss.',
  },
  'Seven Homecomings': {
    duration: '20–30 min', root: 'ancestors', icon: '✦',
    description: 'A Lama Rod Owens practice of returning — seven layers of coming home to yourself, moving from the outer world to the innermost refuge.',
    instructions: 'Sit comfortably. Move through seven thresholds of homecoming, spending 2–3 minutes at each: 1) Coming home to the BODY — feel it, all of it. 2) Coming home to the BREATH — let it be natural. 3) Coming home to the HEART — notice what emotion lives here. 4) Coming home to AWARENESS — the open space that holds everything. 5) Coming home to ANCESTORS — feel who stands behind you. 6) Coming home to COMMUNITY — feel who stands beside you. 7) Coming home to the EARTH — feel what holds you from below. Rest in the fullness of all seven.',
    whenToUse: 'When feeling fragmented, exiled from self, after difficult experiences.',
  },
  'Lineage Altar': {
    duration: '15 min + ongoing', root: 'ancestors', icon: '✦',
    description: 'Creating and tending a physical altar as a practice of relationship with your lineage — biological, chosen, spiritual.',
    instructions: 'Choose a small surface — a shelf, a corner of a table. Place items that represent your lineage: photos, objects, natural materials, written names. Include something for the well ancestors specifically — those whose healing is complete. Tend the altar regularly: light a candle, offer water, speak to the beings represented there. The altar is a portal, not a decoration. It works by being attended to consistently. Add to it as your relationship with lineage deepens.',
    whenToUse: 'Set up once, tend daily or weekly. Especially at transitions, anniversaries, and turning points.',
  },

  // ── Ecology ──
  'Sit With a Tree': {
    duration: '10+ min', root: 'ecology', icon: '∿',
    description: 'Same tree, regularly. Back against bark. Relationship is built through return, not novelty.',
    instructions: 'Choose a tree — ideally one you pass often. Sit with your back against its trunk. Close your eyes or soften your gaze. Feel the bark against your spine. Breathe. Notice the sounds the tree attracts — birds, insects, wind through leaves. Don\'t try to "connect" — just be present. Return to this same tree regularly. Over weeks and months, something shifts. You begin to notice its seasonal changes, its moods, its companions.',
    whenToUse: 'Weekly on earth days. When needing grounding. When feeling separate from the living world.',
  },
  'Walk Without Input': {
    duration: '15–30 min', root: 'ecology', icon: '∿',
    description: 'Walking with no earbuds, no phone, no agenda. Just you and the sensory world.',
    instructions: 'Leave the phone at home or in your pocket on silent. No music, no podcasts, no audiobooks. Walk at whatever pace feels natural. Let your senses lead — follow what catches your eye, your ear, your nose. Notice one thing each walk that you haven\'t noticed before. The practice is being available to what is actually here, without the mediation of content. You are the content.',
    whenToUse: 'Several times per week. This is the simplest nature practice and one of the most powerful.',
  },
  'Deep Time Walk': {
    duration: '45–60 min', root: 'ecology', icon: '∿',
    description: 'Walking through geological time — each step represents millions of years. A practice of perspective from Joanna Macy\'s Deep Time work.',
    instructions: 'Find a long path — ideally 4.6 km (one meter per million years of Earth\'s history). Walk slowly. At the beginning, you are at the formation of the Earth. As you walk, contemplate what was happening: the cooling of the crust, the first oceans, single-celled life, photosynthesis, complex life, dinosaurs, mammals. Human history arrives in the last millimeter. Feel the scale. Feel how held you are by this vast story. You are the universe\'s latest experiment in awareness.',
    whenToUse: 'Monthly or at transitions. When feeling small — to remember that small is also ancient.',
  },
  'Nature Altar': {
    duration: '15 min + ongoing', root: 'ecology', icon: '∿',
    description: 'A seasonal practice of collecting and arranging natural materials as an act of attention and gratitude.',
    instructions: 'Collect materials from your walks — feathers, stones, seed pods, leaves, bark. Arrange them on a surface with care and attention. Let the arrangement reflect the current season. Change it as the season changes. This is not decoration — it is a practice of noticing what the land is offering right now. Spend a few minutes each week simply looking at what you\'ve gathered. Notice what is drying, changing, returning to dust.',
    whenToUse: 'Ongoing, tended weekly. Especially powerful when paired with seasonal awareness.',
  },

  // ── Liberation ──
  'RAIN Practice': {
    duration: '10–15 min', root: 'liberation', icon: '◠',
    description: 'Tara Brach\'s four-step practice for meeting difficult emotions with awareness and compassion.',
    instructions: 'When a difficult emotion arises: RECOGNISE — name what is happening ("This is anxiety," "This is grief"). ALLOW — let it be here without trying to fix or push it away. Say "This belongs" or "This too." INVESTIGATE — with gentleness, feel where this emotion lives in the body. What does it need? What is it protecting? NURTURE — offer yourself what you would offer a dear friend. Place a hand on your heart. Speak kindly. "It\'s okay." "I\'m here." Rest in the awareness that noticed all of this.',
    whenToUse: 'When triggered, when emotions feel overwhelming, as a regular self-compassion practice.',
  },
  'Tonglen': {
    duration: '10–20 min', root: 'liberation', icon: '◠',
    description: 'The Tibetan practice of "sending and taking" — breathing in suffering, breathing out relief. Counterintuitive and profound.',
    instructions: 'Sit quietly. Bring to mind someone who is suffering — a loved one, a stranger, a community. On the in-breath, breathe in their suffering as dark, heavy smoke. Feel yourself taking it on. On the out-breath, send relief, ease, and light back to them. Start with someone you love. Then expand: someone neutral, someone difficult, all beings everywhere. The practice reverses our instinct to avoid pain and hoard comfort. It builds the heart\'s capacity.',
    whenToUse: 'When feeling helpless about others\' suffering. When the heart feels closed. Weekly.',
  },
  'Fierce Compassion': {
    duration: '10 min', root: 'liberation', icon: '◠',
    description: 'Not all compassion is soft. Sometimes love says no. Sometimes care has edges. This is the practice of loving boundaries.',
    instructions: 'Sit and bring to mind a situation where fierceness is needed — where you\'ve been too accommodating, where harm is happening, where a boundary needs setting. Feel the energy of fierce care in the body — it often lives in the belly, the jaw, the hands. Don\'t soften it. Let it be strong. Now direct that fierceness with precision: "I will not participate in this." "This stops here." "I love you AND I will not allow this." Feel the combination of love and strength. This is awakened care.',
    whenToUse: 'When facing injustice, when boundaries keep getting crossed, when softness alone is not enough.',
  },
  'Metta / Lovingkindness': {
    duration: '15–20 min', root: 'liberation', icon: '◠',
    description: 'The ancient practice of sending well-wishes — to yourself, to loved ones, to all beings. Warms what has gone cold.',
    instructions: 'Sit comfortably. Begin with yourself: "May I be safe. May I be healthy. May I be happy. May I live with ease." Repeat slowly, feeling each phrase. Then extend to someone you love, using their name. Then to a neutral person. Then to someone difficult. Then to all beings everywhere. The words are a vehicle — what matters is the intention behind them. If the phrases feel hollow, try: "May I begin to wish myself well." Start where you actually are.',
    whenToUse: 'When feeling disconnected, self-critical, or when the heart feels dry. Weekly.',
  },

  // ── Nature Mindfulness (Mark Coleman & Rochelle Calvert) ──
  'Sensory Grounding': {
    duration: '5–10 min', root: 'ecology', icon: '∿',
    description: 'A nature-based mindfulness practice of fully arriving through the senses. Mark Coleman teaches that nature wakes us up because it speaks directly to the body.',
    instructions: 'Step outside. Stand still for a moment. Now move through each sense deliberately: SIGHT — let your eyes soften and receive whatever is in front of you without naming it. SOUND — close your eyes and listen to the furthest sound, then the nearest. TOUCH — feel the air on your skin, the ground under your feet, the temperature. SMELL — breathe deeply through the nose. What is the land offering? TASTE — open your mouth slightly, taste the air. Spend 1–2 minutes per sense. You are not observing nature — you are participating in it.',
    whenToUse: 'At the start of any outdoor practice. When feeling disconnected or "in the head."',
  },
  'Healing with Nature': {
    duration: '20–30 min', root: 'ecology', icon: '∿',
    description: 'Rochelle Calvert\'s integration of somatic experiencing with nature-based meditation — letting the natural world support nervous system regulation.',
    instructions: 'Find a place outdoors where you feel safe enough. Sit or stand. Begin with orientation — slowly scan the environment with soft eyes. Let your gaze rest on anything that feels calming, beautiful, or interesting. Stay with it. Notice what happens in your body as you attend to natural beauty — perhaps a softening, a deeper breath, a settling. If difficult sensations arise, pendulate: move attention between the difficult sensation and the natural resource (the tree, the sky, the sound of water). Let nature be your co-regulator.',
    whenToUse: 'When the nervous system is activated. When indoor practice feels too contained. After difficult experiences.',
  },
  'Four Elements Meditation': {
    duration: '15–20 min', root: 'ecology', icon: '∿',
    description: 'Contemplating the four elements within and around you — recognising that you are made of the same stuff as the earth, the rivers, the wind, and the sun.',
    instructions: 'Sit outdoors. Move through each element: EARTH — feel the solidity of your body, your bones, your seat on the ground. You are earth. WATER — feel the moisture in your mouth, your blood, your tears. You are water. FIRE — feel the warmth of your body, your metabolism, the heat of digestion. You are fire. AIR — feel the breath moving in and out. Feel the air on your skin. You are air. Rest in the recognition: there is no boundary where you end and the elements begin. You are the earth, conscious of itself.',
    whenToUse: 'Weekly outdoors. When feeling separate from the natural world.',
  },
};

export const NOONGAR_SEASONS = [
  { name: "Birak", months: [12, 1], description: "Hot, dry — fire, cicadas, heat on skin", theme: "fire and stillness" },
  { name: "Bunuru", months: [2, 3], description: "Hottest — seeking shade, dry earth, afternoon storms", theme: "shade and surrender" },
  { name: "Djeran", months: [4, 5], description: "Cooling — leaves turning, morning dew, first rains", theme: "cooling and turning" },
  { name: "Makuru", months: [6, 7], description: "Cold, wet — rain, grey sky, water on bark, fungi emerging", theme: "water and darkness" },
  { name: "Djilba", months: [8, 9], description: "Transitional — wildflowers, wind shifts, cold mornings/warm afternoons", theme: "wind and wildflowers" },
  { name: "Kambarang", months: [10, 11], description: "Warming — baby birds, longer light, flowering", theme: "light and blooming" },
];

export function getCurrentSeason() {
  const month = new Date().getMonth() + 1; // 1-12
  return NOONGAR_SEASONS.find(season => season.months.includes(month)) ?? NOONGAR_SEASONS[0];
}
