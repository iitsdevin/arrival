// teachings.js — Five Roots framework, WTR Spiral, teachings, quotes

export const FIVE_ROOTS = [
  {
    id: 'stillness',
    name: 'Stillness & Presence',
    glyph: '◯',
    color: '#6B8F71',
    subtitle: 'just this',
    teachers: ['Charlotte Joko Beck', 'Thich Nhat Hanh', 'Shunryu Suzuki'],
    description: 'The practice of returning — not to silence, but to what is actually here. Zazen, walking meditation, the breath as anchor.',
    teaching: `Charlotte Joko Beck called attention "the most basic form of love." Not the romantic kind — the kind that stays with difficulty, that doesn't turn away when things get uncomfortable.\n\nZen practice isn't about achieving a special state. It's about meeting this moment, this breath, this body exactly as they are. The "practice" is simply the practice of return — from thought, from story, from the future and the past, back to just this.\n\nReturn is the practice. Not the rare moments of stillness, but the ten thousand returns from distraction — each one a small act of sovereignty.`,
    practices: ['Zazen', 'Walking Meditation', 'Breath Counting', 'Sky-Like Mind'],
    prompts: [
      'Where does your attention go most reliably when you are not guiding it? Just notice — no judgment.',
      'What would it mean to give this one breath your full, undivided attention?',
      'Thich Nhat Hanh taught that washing dishes can be as sacred as sitting in a temple — if you are truly there. What ordinary task could be your practice today?',
    ],
  },
  {
    id: 'embodiment',
    name: 'Embodiment & Soma',
    glyph: '◈',
    color: '#B07D62',
    subtitle: 'the body knows',
    teachers: ['Nkem Ndefo', 'Prentis Hemphill', 'Resmaa Menakem'],
    description: 'The body is not a vehicle for carrying the brain around. It is a landscape, a sensor, an ancestor. Somatic practice is learning to listen.',
    teaching: `Nkem Ndefo's Resilience Toolkit begins with a radical premise: your nervous system is not broken. It is doing exactly what it learned to do. "Too much, too fast, or too little for too long" — that's trauma. And the body holds the record.\n\nSomatic practice isn't about releasing or fixing. It's about building the capacity to be with what is — to titrate, to pendulate, to move from mobilisation toward a workable aliveness.\n\nPrentis Hemphill writes that "boundaries are the distance at which I can love you and me simultaneously." That is a somatic teaching. You feel the boundary in the body before you can articulate it in language.`,
    practices: ['Threshold Ritual', 'Body Scan', 'SNOELL Check-In', 'Shaking Practice', 'EFT Tapping'],
    prompts: [
      'Where in your body are you holding something you haven\'t named yet? You don\'t have to name it — just notice.',
      'Nkem Ndefo teaches that the body is always in communication. What is it saying right now, if you slow down enough to hear?',
      'What is the quality of your activation right now — mobilised, settled, collapsed, or somewhere between? Just orient.',
    ],
  },
  {
    id: 'ancestors',
    name: 'Ancestors & Lineage',
    glyph: '✦',
    color: '#8B7D6B',
    subtitle: 'you are not the first',
    teachers: ['Lama Rod Owens', 'Daniel Foor', 'Kimberly Rodriguez'],
    description: 'You are the living edge of a long line. The ancestors — human and more-than-human — hold the thread. Ancestral work is remembering you are held.',
    teaching: `Lama Rod Owens writes about "brokenheartedness" not as a problem but as a gateway. When the heart breaks open, it breaks open to the suffering of all beings — and to the chain of beings who held that suffering before us.\n\nDaniel Foor teaches that the ancestors are not passive. They want to help. Ancestral lineage work is learning to receive what has been trying to reach us all along — the resilience, the wisdom, the love that survived everything that tried to extinguish it.\n\nKimberly Rodriguez reminds us that the body holds ancestral memory — every cell a living archive.`,
    practices: ['Ancestral Evocation', 'Grief Offering', 'Seven Homecomings', 'Lineage Altar'],
    prompts: [
      'Who among your ancestors — biological, cultural, spiritual — survived something that made your existence possible? What did it cost them?',
      'What wisdom is trying to return through you? Not what you\'ve learned, but what wants to be remembered in your body.',
      'Lama Rod Owens asks: who loved you before you were born? Sit with that. Feel who is holding you.',
    ],
  },
  {
    id: 'ecology',
    name: 'Ecology & Place',
    glyph: '∿',
    color: '#5A8F85',
    subtitle: 'you belong to this place',
    teachers: ['Sophie Strand', 'Robin Wall Kimmerer', 'Joanna Macy', 'Josh Schrei'],
    description: 'The animist vision: everything is alive, everything is in relationship. You are not in nature — you are nature, temporarily walking around and believing otherwise.',
    teaching: `Sophie Strand writes that healing is not a return to some previous state — it is composting yourself into something new. The mycelium doesn't fix things; it transforms them. Death and decay are part of the cycle, not failures of the cycle.\n\nJoanna Macy calls this the Great Turning — the shift from a dying industrial civilisation to a life-sustaining one. It is happening now, in bodies, in gardens, in the courage it takes to feel grief for the living world and act anyway.\n\nRobin Wall Kimmerer teaches that gratitude is not a feeling — it is a practice, a way of returning the gifts that flow toward us.`,
    practices: ['Sit With a Tree', 'Walk Without Input', 'Deep Time Walk', 'Nature Altar'],
    prompts: [
      'Sophie Strand asks: what is the oldest living thing near you right now? Let your attention rest there, as an offering.',
      'The Noongar people have lived in relationship with this land for tens of thousands of years. What do you owe this place for receiving you?',
      'Where do you feel most at home in the non-human world? What is it about that place that recognises you?',
    ],
  },
  {
    id: 'liberation',
    name: 'Heart & Liberation',
    glyph: '◠',
    color: '#C4956A',
    subtitle: 'fierce & tender',
    teachers: ['Tara Brach', 'Audre Lorde', 'Octavia Butler', 'Norma Wong'],
    description: 'Liberation is not an escape from suffering. It is the capacity to be with what is — and to love fiercely, completely, from that ground.',
    teaching: `Tara Brach teaches RAIN: Recognise, Allow, Investigate, Nurture. The practice is not to transcend difficulty but to bring awareness to it — and find that awareness itself is already a kind of love.\n\nAudre Lorde knew that the erotic — the life-force, the fullness of feeling — is not a distraction from liberation work. It is the energy from which genuine action flows. Self-care as political warfare.\n\nNorma Wong speaks of seven-generation thinking — imagining the world you are building for those not yet born. What does that change about your decision today?`,
    practices: ['RAIN Practice', 'Tonglen', 'Fierce Compassion', 'Metta / Lovingkindness'],
    prompts: [
      'Tara Brach asks: what would it mean to meet yourself — this moment\'s version — with the same tenderness you\'d offer a frightened child?',
      'Audre Lorde taught that self-care is not self-indulgence — it is political warfare. What does genuine self-care look like for you right now, in your specific life?',
      'Norma Wong speaks of seven-generation thinking. What does that change about one decision you\'re facing today?',
    ],
  },
];

// Work That Reconnects — Joanna Macy's Four-Stage Spiral
export const WTR_SPIRAL = [
  {
    id: 'gratitude',
    step: 0,
    title: 'Coming from Gratitude',
    subtitle: 'what loves life in you',
    glyph: '◇',
    color: '#6B8F71',
    description: 'Gratitude is not a performance of positivity. It grounds the nervous system and returns us to what is actually true — that life, in this moment, contains something worth loving.',
    teaching: 'Joanna Macy teaches that the spiral always begins with gratitude because our grief for the world is proportional to our love of it. We cannot feel pain for what we do not love. Gratitude is the first acknowledgment of that love.',
    journalPrompts: [
      { id: 'g1', question: 'Some things I love about being alive on Earth right now are...', placeholder: 'The smell of rain on limestone. The way light changes at 4pm in Djeran. The intelligence of trees.' },
      { id: 'g2', question: 'A place that was magical or wonderful to me as a child was...', placeholder: 'Let the body remember. What was alive there? Who were you becoming?' },
      { id: 'g3', question: 'Something I appreciate about myself right now is...', placeholder: 'Small is enough. Specific is better.' },
    ],
  },
  {
    id: 'pain',
    step: 1,
    title: 'Honouring Our Pain',
    subtitle: 'the body\'s evidence of love',
    glyph: '◈',
    color: '#6B8FA0',
    description: 'Your grief for the world is not a problem to be solved. It is evidence of your interconnection with it. This stage is permission to feel what is actually true.',
    teaching: 'Macy writes: "The greatest danger facing us is not the overwhelming scale of the problems, but our numbness to them." The Truth Mandala is a practice of unlocking that numbness — by naming what we are actually carrying.',
    mandala: [
      { id: 'stone', symbol: '◇', name: 'The Stone', emotion: 'Fear', color: '#A09080', prompt: 'Hold the heaviness of the stone. What terrifies you right now — about the state of the world, your life, the future? Let it be specific.' },
      { id: 'leaves', symbol: '∿', name: 'Dry Leaves', emotion: 'Grief', color: '#6B8FA0', prompt: 'Hold the dry leaves. What specific loss or destruction are you grieving — in the world, in your own life? Let the grief be real.' },
      { id: 'stick', symbol: '|', name: 'The Stick', emotion: 'Anger', color: '#B07D62', prompt: 'Grasp the stick. What injustice fuels your rage? Let the anger be clean, honest — a form of care for what matters.' },
      { id: 'bowl', symbol: '○', name: 'Empty Bowl', emotion: 'Emptiness', color: '#8B7D6B', prompt: 'Hold the empty bowl. Where do you feel numb, exhausted, disconnected? The emptiness is also welcome here. Nothing to fix.' },
    ],
  },
  {
    id: 'new-eyes',
    step: 2,
    title: 'Seeing with New Eyes',
    subtitle: 'deep time & the seventh generation',
    glyph: '◉',
    color: '#C4956A',
    description: 'Shift perspective from the isolated self to the vast web. You are a biological entity backed by 4.5 billion years of evolutionary intelligence. You are a link in a chain that continues.',
    teaching: 'Norma Wong teaches seven-generation thinking — making decisions not for the next quarter, but for those who will live with the consequences. The "Voices of the Future" practice invites those descendants to speak back to us.',
    journalPrompts: [
      { id: 'ne1', question: 'Imagine a descendant living 200 years from now, sitting across from you. They want to know what you did during the Great Unraveling. What do you want them to know about your efforts today?', placeholder: 'Speak directly to the future. Don\'t perform. Just be honest about what you\'re trying to do and who you\'re trying to be.' },
    ],
  },
  {
    id: 'going-forth',
    step: 3,
    title: 'Going Forth',
    subtitle: 'the holding action',
    glyph: '→',
    color: '#8B7D6B',
    description: 'Active hope is not optimism. It is the practice of identifying what you can do, specifically, today — and doing it anyway, regardless of outcome certainty.',
    teaching: 'Joanna Macy distinguishes "holding actions" (protecting what remains), "creating new structures" (building alternatives), and "shifting consciousness" (changing how we think). Your contribution may be small. It is still necessary.',
    journalPrompts: [
      { id: 'gf1', question: 'What specific, localized action will you take today — or this week — in service of the Great Turning?', placeholder: 'Be specific. "Call someone." "Plant something." "Write." "Rest." Small counts. Grounded in your actual body and life.' },
    ],
    vows: [
      'I vow to draw strength from the living Earth, the ancestors, and the future beings — even when I cannot feel them.',
      'I vow to seek liberation from the systems that diminish all of us — in my inner world and my actions.',
      'I vow to practice at a pace I can sustain — rest as resistance, presence as offering.',
      'I vow to return, when I am knocked off course, again and again, to what matters.',
    ],
  },
];

// New Saints 8-Week journey (Lama Rod Owens framework)
export const NEW_SAINTS_WEEKS = [
  { week: 1, title: 'Awakening', theme: 'What is your work?', color: '#6B8F71', teaching: 'A New Saint is not a perfect being — they are an ordinary human who takes the suffering of all beings personally and returns to their work again and again. What is uniquely yours to do?', practices: 'SNOELL Check-In (5 min daily), Sky-Like Mind Meditation (15 min, 3x), Ancestral Evocation (10 min, 2x)', reflection: 'What keeps calling you back, even when it\'s hard?' },
  { week: 2, title: 'Brokenheartedness', theme: 'The gateway of grief', color: '#6B8FA0', teaching: 'Brokenheartedness is not a failure. It is the very place where we break open to the suffering of all beings. Sit with the grief. Do not try to fix it — simply be present to it with patience and grace.', practices: 'Seven Homecomings (20 min, 3x), Grief Evocation (15 min, 2x), Tonglen (10 min, 4x)', reflection: 'What have you been carrying that needs to be held rather than fixed?' },
  { week: 3, title: 'Finding Your Work', theme: 'What keeps calling you?', color: '#C4956A', teaching: 'Your work is not abstract. It is rooted in your specific body, skills, community. The question is not "what should I do?" but "what keeps calling me, even when it\'s hard?" The work that is hard and worthy is usually the work that is yours.', practices: 'Daily Work Question (5 min morning), SNOELL with your work (15 min, 3x), Work Inventory (30 min, 2x)', reflection: 'If you fully committed to your work, what would change in your life?' },
  { week: 4, title: 'Awakened Care', theme: 'Caring without bypassing', color: '#B07D62', teaching: 'Awakened care means taking others\' suffering seriously without losing yourself in it. It is the practice of holding without fixing, witnessing without enmeshment. Like Harriet Tubman returning again and again to sites of harm.', practices: 'Tonglen (15 min, 4x), Compassion with Boundaries (ongoing), Practice of Returning', reflection: 'Where have you been looking away because it\'s too painful to stay present?' },
  { week: 5, title: 'Spiritual Abolition', theme: 'Dismantling from the inside', color: '#8B7D6B', teaching: 'Spiritual abolition is the inner work — dismantling the internalized systems that keep us complicit in violence. What have you taken on that was never yours to carry? Where do you police yourself or others?', practices: 'Noticing Internalized Oppression (daily), Heart Sutra Contemplation (20 min, 3x), Direct Relationship practice', reflection: 'What needs to be abolished from the inside — in your relationship with yourself?' },
  { week: 6, title: 'Radical Interconnection', theme: 'The web of liberation', color: '#5A8F85', teaching: 'Your liberation and mine are not separate. When we free ourselves, we participate in the freedom of all beings. The unseen allies — ancestors, guides, future beings — are real and willing to help. You are not alone in this work.', practices: 'Interdependence Meditation (20 min, 4x), Calling on Unseen Support (5 min daily), Collective Offering (one act of collective service)', reflection: 'Who makes your existence possible? Name as many as you can — seen and unseen.' },
  { week: 7, title: 'Fierceness & Prayer', theme: 'Soft and strong, both', color: '#C4956A', teaching: 'Fierceness is not anger without wisdom. It is awakened care that refuses to be complicit in harm. You can be loving AND fierce. These are not opposites — they are the same love, expressed at different temperatures.', practices: 'Fierce Compassion practice (ongoing), Daily Prayer & Ritual (15 min), Tara Practice (20 min, 3x)', reflection: 'Where do you need to practice fierce compassion right now — with yourself or others?' },
  { week: 8, title: 'Recommitment', theme: 'Begin again, always', color: '#6B8F71', teaching: 'You will be knocked off course. This is guaranteed. The work is not to avoid falling — it is to develop the capacity to return. Again and again. This IS the entire practice. The return is not a failure. The return is the practice.', practices: 'Integration Meditation (30 min, 3x), Recommitment Ceremony (60 min), Create your Practice Plan', reflection: 'What practices will you carry forward? Who will hold you accountable when you lose the thread?' },
];

// Deep teaching articles for Wellspring
export const TEACHINGS = [
  {
    id: 'attention',
    title: 'Attention as Birthright',
    root: 'stillness',
    author: 'after Charlotte Joko Beck',
    body: `In an economy of distraction, your attention is the most valuable thing you possess — and the thing most systematically harvested from you.\n\nCharlotte Joko Beck taught that attention is the most basic form of love. Not the romantic kind — the kind that stays, that doesn't look away, that accompanies rather than fixes.\n\nPractice begins when you notice where your attention actually is — not where you think it should be, but where it actually goes. The thought about lunch. The rehearsed conversation. The subtle anxiety about the afternoon. These are not failures of practice. They are the practice.\n\nReturn is the practice. Not the rare moments of stillness, but the ten thousand returns from distraction — each one a small act of sovereignty over a mind that has been trained to scatter.`,
    practice: 'Spend one minute noticing where your attention goes without trying to redirect it. Then spend one minute returning to the breath whenever it wanders. Notice the difference between these two qualities of attention.',
  },
  {
    id: 'freeze',
    title: 'Meeting the Freeze',
    root: 'embodiment',
    author: 'after Nkem Ndefo',
    body: `What we call procrastination, the body calls protection.\n\nThe dorsal vagal freeze response — the "playing dead" of the nervous system — is not laziness or weakness. It is an ancient survival mechanism. When the nervous system perceives that neither fight nor flight is possible, it immobilises. This is the depression that makes getting out of bed feel like lifting a continent. The paralysis in front of the blank page.\n\nNkem Ndefo teaches "titration" — approaching difficult territory in small doses, with plenty of return to safety between. You cannot think or will your way out of freeze. You move through it, with the body, gently.\n\nThings that actually help: slow, large movements (shaking, swinging arms), contact with a surface (feet on floor, back against a tree), temperature sensation (cold water, warm mug), orientation (slowly scanning the room with soft eyes).`,
    practice: 'If you are in freeze: stand up. Shake your hands for 30 seconds. Place both feet firmly on the floor. Slowly turn your head to look over each shoulder. Notice three specific things in the room. Then return.',
  },
  {
    id: 'grief',
    title: 'Brokenheartedness as Gateway',
    root: 'ancestors',
    author: 'after Lama Rod Owens & Joanna Macy',
    body: `We live in a world that pathologises grief. Feel it briefly, then move on. Process efficiently. Return to productivity.\n\nBut grief for the living world — for what is being lost, has been lost, will be lost — is not pathology. Joanna Macy calls it "the sorrow of the world," and teaches that our capacity to feel it is directly proportional to our love for what is passing.\n\nLama Rod Owens writes about brokenheartedness not as an obstacle to awakening but as the very path through it. When the heart breaks, it breaks open. What floods in is not more pain — it is the suffering of all beings, and with it, a quality of compassion that would not have been possible with a closed heart.\n\nThe instruction is: feel it without fixing it. Stay with the grief long enough for it to become something — not happiness, not resolution, but a more accurate relationship with what is true.`,
    practice: 'Write about one specific loss — a species, a place, a person, a version of yourself. Not to process it into a lesson, but simply to name it. Then read what you wrote aloud, slowly.',
  },
  {
    id: 'animism',
    title: 'The Animist Vision',
    root: 'ecology',
    author: 'after Sophie Strand & Josh Schrei',
    body: `Before "religion" as institution, before "spirituality" as identity, there was simply the perception that everything is alive.\n\nRocks have their own mode of awareness. Rivers remember. Trees communicate through mycorrhizal networks at a pace we can't perceive. The animist worldview is not primitive superstition — it is a form of attentiveness that recognises agency where Western modernity trained us to see only objects.\n\nSophie Strand writes that the body is a doorway, not a destination. We are not brains piloting bodies. We are organisms, entangled with everything around us — breathing the same air, drinking the same water, built from the same cosmic dust.\n\nJosh Schrei speaks of "the re-enchantment of the world" — not as nostalgia for an imagined past, but as the necessary corrective to a worldview that has given us ecological catastrophe.`,
    practice: 'Find one non-human being in your immediate environment — a plant, an insect, a piece of wood, a patch of sky. Spend five minutes simply attending to it, as if it might have something to communicate. Notice what shifts.',
  },
  {
    id: 'composting',
    title: 'Composting the Self',
    root: 'ecology',
    author: 'after Sophie Strand',
    body: `"The compost pile does not mourn the apple. It transforms the apple into something the apple could never have become on its own."\n\nSophie Strand's vision of healing is ecological rather than therapeutic. We are not restoring a damaged original — we are in constant transformation, decay and growth inseparable, the fungal threads moving through everything, including us.\n\nThis is a different relationship with "getting better." It does not presume a fixed destination. It does not position the past self as something to return to. It asks: what is being composted in me right now? What wants to be transformed rather than fixed?\n\nDeath and difficulty are not failures of the process. They are the process. What in you is falling, and what might it be feeding?`,
    practice: 'Identify something in your life that is in a process of ending or dissolution. Instead of trying to fix or reverse it, ask: what might this be composting into? What wants to come through this decay?',
  },
  {
    id: 'liberation',
    title: 'The Fierceness of Love',
    root: 'liberation',
    author: 'after Audre Lorde & Lama Rod Owens',
    body: `Audre Lorde wrote about the erotic as power — not sexuality specifically, but the life-force itself. The fullness of feeling. The knowing that comes from deep sensation rather than detached intellect. In a world that trains us to mistrust our bodies, reclaiming this knowing is a radical act.\n\nLama Rod Owens teaches that fierceness and love are not opposites. The fierceness of a parent protecting a child. The fierceness of a community refusing to let one of its members be erased. This is awakened care — love that refuses to be complicit in harm.\n\nYou can be loving AND fierce. Soft AND strong. Open AND boundaried. These are not contradictions — they are the complementary qualities of a person who has learned to love from a full, grounded place rather than a depleted one.`,
    practice: 'Notice where you have been choosing softness when fierceness was called for — or fierceness when softness was needed. What would it mean to practice the one you tend to avoid?',
  },
];

// All wisdom quotes — the full treasury
export const ALL_QUOTES = [
  { text: "Attention is the most basic form of love.", author: "after Charlotte Joko Beck", root: 'stillness', teacher: 'Charlotte Joko Beck' },
  { text: "The practice is simply to return — not to get it right, but to begin again.", author: "after Charlotte Joko Beck", root: 'stillness', teacher: 'Charlotte Joko Beck' },
  { text: "Fifty percent unstuck is fifty percent free.", author: "after Charlotte Joko Beck", root: 'stillness', teacher: 'Charlotte Joko Beck' },
  { text: "Rest on that icy couch. Whatever is here is workable.", author: "after Charlotte Joko Beck", root: 'stillness', teacher: 'Charlotte Joko Beck' },
  { text: "Walk as if you are kissing the Earth with your feet.", author: "after Thich Nhat Hanh", root: 'ecology', teacher: 'Thich Nhat Hanh' },
  { text: "We are here to awaken from the illusion of our separateness.", author: "after Thich Nhat Hanh", root: 'stillness', teacher: 'Thich Nhat Hanh' },
  { text: "The Earth is not just the environment. The Earth is us.", author: "after Thich Nhat Hanh", root: 'ecology', teacher: 'Thich Nhat Hanh' },
  { text: "Being peace is more important than making peace.", author: "after Thich Nhat Hanh", root: 'liberation', teacher: 'Thich Nhat Hanh' },
  { text: "Interbeing: look deeply, and you will see yourself in everything.", author: "after Thich Nhat Hanh", root: 'ecology', teacher: 'Thich Nhat Hanh' },
  { text: "You are not a separate self. You are the mycelium dreaming it is a mushroom.", author: "after Sophie Strand", root: 'ecology', teacher: 'Sophie Strand' },
  { text: "Healing is not a return to some previous state. It is composting yourself into something new.", author: "after Sophie Strand", root: 'ecology', teacher: 'Sophie Strand' },
  { text: "You are already in the web. You just need to slow down enough to feel the threads.", author: "after Sophie Strand", root: 'ecology', teacher: 'Sophie Strand' },
  { text: "The body is a doorway, not a destination.", author: "after Sophie Strand", root: 'embodiment', teacher: 'Sophie Strand' },
  { text: "The moment you can recognise what is true, that is the moment of freedom.", author: "after Tara Brach", root: 'liberation', teacher: 'Tara Brach' },
  { text: "Radical acceptance means letting reality be reality so you can respond from wholeness.", author: "after Tara Brach", root: 'liberation', teacher: 'Tara Brach' },
  { text: "You are not broken. You are broken open.", author: "after Tara Brach", root: 'liberation', teacher: 'Tara Brach' },
  { text: "Liberation is not an escape from suffering. It is the capacity to be with what is.", author: "after Lama Rod Owens", root: 'liberation', teacher: 'Lama Rod Owens' },
  { text: "The body holds what the mind cannot yet speak. Practice is learning the body's language.", author: "after Lama Rod Owens", root: 'embodiment', teacher: 'Lama Rod Owens' },
  { text: "Brokenheartedness is not the obstacle to awakening. It is the path.", author: "after Lama Rod Owens", root: 'ancestors', teacher: 'Lama Rod Owens' },
  { text: "You are a New Saint — ordinary, human, and called.", author: "after Lama Rod Owens", root: 'liberation', teacher: 'Lama Rod Owens' },
  { text: "Caring for myself is not self-indulgence — it is self-preservation, and that is an act of political warfare.", author: "after Audre Lorde", root: 'liberation', teacher: 'Audre Lorde' },
  { text: "Your silence will not protect you. But your rest might sustain you.", author: "after Audre Lorde", root: 'liberation', teacher: 'Audre Lorde' },
  { text: "All flourishing is mutual. The land gives to us and asks us to give in return.", author: "after Robin Wall Kimmerer", root: 'ecology', teacher: 'Robin Wall Kimmerer' },
  { text: "Gratitude is the thread that connects us to the living world. It is not a feeling — it is a practice.", author: "after Robin Wall Kimmerer", root: 'ecology', teacher: 'Robin Wall Kimmerer' },
  { text: "The most radical thing we can do is be present — awake to the beauty and pain of our world.", author: "after Joanna Macy", root: 'ecology', teacher: 'Joanna Macy' },
  { text: "The grief is not a sign that something is wrong with us. It is a sign that we love this world.", author: "after Joanna Macy", root: 'liberation', teacher: 'Joanna Macy' },
  { text: "Active hope is not about wishful thinking. It is about what we choose to do with our energy.", author: "after Joanna Macy", root: 'liberation', teacher: 'Joanna Macy' },
  { text: "The pain you feel for the world is the world feeling its own pain through you.", author: "after Joanna Macy", root: 'ecology', teacher: 'Joanna Macy' },
  { text: "Seven-generation thinking is not a strategy — it is a form of love.", author: "after Norma Wong", root: 'ancestors', teacher: 'Norma Wong' },
  { text: "Healing selves and communities is the foundation for planetary work. These are not separate.", author: "after Norma Wong", root: 'liberation', teacher: 'Norma Wong' },
  { text: "Your nervous system is not broken. It is doing exactly what it learned to do.", author: "after Nkem Ndefo", root: 'embodiment', teacher: 'Nkem Ndefo' },
  { text: "Stabilisation before processing. The body cannot heal what it cannot first tolerate.", author: "after Nkem Ndefo", root: 'embodiment', teacher: 'Nkem Ndefo' },
  { text: "Alchemical resilience is not returning to baseline. It is becoming something that can hold more.", author: "after Nkem Ndefo", root: 'embodiment', teacher: 'Nkem Ndefo' },
  { text: "The body is where culture lives. Liberation must happen in the body or it doesn't happen at all.", author: "after Resmaa Menakem", root: 'embodiment', teacher: 'Resmaa Menakem' },
  { text: "In the beginner's mind there are many possibilities; in the expert's mind there are few.", author: "after Shunryu Suzuki", root: 'stillness', teacher: 'Shunryu Suzuki' },
  { text: "When you do something, you should do it with your whole body and mind.", author: "after Shunryu Suzuki", root: 'stillness', teacher: 'Shunryu Suzuki' },
  { text: "Rest is not a reward. It is a right. It is a radical refusal to be ground down.", author: "after Tricia Hersey", root: 'liberation', teacher: 'Tricia Hersey' },
  { text: "You were not born to be exhausted. You were born to be whole.", author: "after Tricia Hersey", root: 'liberation', teacher: 'Tricia Hersey' },
  { text: "Pay attention. Be astonished. Tell about it.", author: "after Mary Oliver", root: 'ecology', teacher: 'Mary Oliver' },
  { text: "Someone I loved once gave me a box full of darkness. It took years to understand that this too was a gift.", author: "after Mary Oliver", root: 'ancestors', teacher: 'Mary Oliver' },
  { text: "Tell me, what is it you plan to do with your one wild and precious life?", author: "after Mary Oliver", root: 'liberation', teacher: 'Mary Oliver' },
  { text: "The ancestors want to help. They have been trying to reach you. You just need to learn to receive.", author: "after Daniel Foor", root: 'ancestors', teacher: 'Daniel Foor' },
  { text: "There is power in existing when you live with purpose and on purpose.", author: "after Kimberly Rodriguez", root: 'liberation', teacher: 'Kimberly Rodriguez' },
  { text: "Your body holds ancestral memory — every cell a living archive of those who came before.", author: "after Kimberly Rodriguez", root: 'ancestors', teacher: 'Kimberly Rodriguez' },
  { text: "The only lasting truth is change. God is change.", author: "after Octavia Butler", root: 'ecology', teacher: 'Octavia Butler' },
  { text: "In order to rise from its own ashes, a Phoenix first must burn.", author: "after Octavia Butler", root: 'ancestors', teacher: 'Octavia Butler' },
  { text: "Loneliness is a nervous system response to separation. Belonging heals this wound.", author: "after Becca Piastrelli", root: 'ancestors', teacher: 'Becca Piastrelli' },
  { text: "Boundaries are the distance at which I can love you and me simultaneously.", author: "after Prentis Hemphill", root: 'embodiment', teacher: 'Prentis Hemphill' },
];

// TEACHERS for settings toggle
export const TEACHERS_LIST = [
  { id: 'Charlotte Joko Beck', tradition: 'Soto Zen', root: 'stillness' },
  { id: 'Thich Nhat Hanh', tradition: 'Engaged Buddhism', root: 'stillness' },
  { id: 'Sophie Strand', tradition: 'Animism / Ecology', root: 'ecology' },
  { id: 'Tara Brach', tradition: 'RAIN / Western Buddhism', root: 'liberation' },
  { id: 'Lama Rod Owens', tradition: 'Tibetan Buddhism', root: 'liberation' },
  { id: 'Audre Lorde', tradition: 'Black Feminism', root: 'liberation' },
  { id: 'Robin Wall Kimmerer', tradition: 'Indigenous Botany', root: 'ecology' },
  { id: 'Joanna Macy', tradition: 'Work That Reconnects', root: 'ecology' },
  { id: 'Norma Wong', tradition: 'Zen / Strategic Vision', root: 'ancestors' },
  { id: 'Nkem Ndefo', tradition: 'Resilience Toolkit', root: 'embodiment' },
  { id: 'Prentis Hemphill', tradition: 'Generative Somatics', root: 'embodiment' },
  { id: 'Octavia Butler', tradition: 'Afrofuturism', root: 'liberation' },
  { id: 'Mary Oliver', tradition: 'Poetry / Nature', root: 'ecology' },
  { id: 'Daniel Foor', tradition: 'Ancestral Healing', root: 'ancestors' },
  { id: 'Kimberly Rodriguez', tradition: 'Embodied Ancestral Magic', root: 'ancestors' },
  { id: 'Tricia Hersey', tradition: 'Rest as Resistance', root: 'liberation' },
  { id: 'Resmaa Menakem', tradition: 'Somatic Abolitionism', root: 'embodiment' },
  { id: 'Shunryu Suzuki', tradition: 'Soto Zen', root: 'stillness' },
  { id: 'Becca Piastrelli', tradition: 'Ancestral Belonging', root: 'ancestors' },
];

export function getFilteredQuotes(activeTeachers) {
  if (!activeTeachers || activeTeachers.length === 0) return ALL_QUOTES;
  return ALL_QUOTES.filter(q => activeTeachers.includes(q.teacher));
}

export function getDailyQuote(activeTeachers) {
  const pool = getFilteredQuotes(activeTeachers);
  if (pool.length === 0) return ALL_QUOTES[0];
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return pool[dayOfYear % pool.length];
}
