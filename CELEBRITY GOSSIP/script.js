const celebrities = [
    { name: 'Jennifer Stardom', profession: 'Actress' },
    { name: 'Alex Rockstar', profession: 'Singer' },
    {name :  'Stevie Wonder' ,profession: 'Singer' },
    // Add more celebrities here...
];

const gossipHeadlines = [
    'Did you hear that Jennifer Stardom adopted a unicorn?',
    'Alex Rockstar caught dancing in the rain!',
    'Rumor has it that Jennifer Stardom and Alex Rockstar are secretly collaborating on a new song!',
    'Alex Rockstar accidentally dyed their hair neon green—blaming it on a backstage mishap.',
    'Stevie Wonder spotted driving a race car! Witnesses say he navigated the track using echolocation.',
    
    
    // Add more gossip headlines here...
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateGossip() {
    const celebrity = getRandomItem(celebrities);
    const headline = getRandomItem(gossipHeadlines);
    document.getElementById('gossipHeadline').textContent = `${celebrity.name} (${celebrity.profession}): ${headline}`;
}

// Initial gossip generation
generateGossip();