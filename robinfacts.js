// ==UserScript==
// @name         RobinCatFacts
// @version      0.1
// @author       Viktor Sec
// @match        https://www.reddit.com/robin*
// ==/UserScript==

function sendMessage(message){
  $("#robinSendMessage > input[type='text']").val(message);
  $("#robinSendMessage > input[type='submit']").click();
}

var catfacts = [
  "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
  "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
  "A group of cats is called a clowder.",
  "Cats have over 20 muscles that control their ears.",
  "Much like college students, cats sleep 70% of their lives.",
  "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
  "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
  "When cats grimace, they are usually “taste-scenting.” They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
  "Cats can’t taste sweetness.",
  "Owning a cat can reduce the risk of stroke and heart attack by a third.",
  "The world’s largest cat measured 48.5 inches long.",
  "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt’s pharaohs.",
  "A cat’s purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.",
  "Adult cats only meow to communicate with humans.",
  "The world’s richest cat is worth $13 million after his human passed away and left her fortune to him.",
  "The oldest cat video on YouTube dates back to 1894 (when it was made, not when it was uploaded, duh).",
  "In the 1960s, the CIA tried to turn a cat into a bonafide spy by implanting a microphone into her ear and a radio transmitter at the base of her skull. She somehow survived the surgery but got hit by a taxi",
  "Female cats are typically right-pawed while male cats are typically left-pawed.",
  "Cats make more than 100 different sounds whereas dogs make around 10.",
  "A cat’s brain is 90% similar to a human’s — more similar than to a dog’s.",
  "Cats and humans have nearly identical sections of the brain that control emotion.",
  "A cat’s cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog’s 160 million.",
  "Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing.",
  "Cats have a lower social IQ than dogs but can solve more difficult cognitive problems when they feel like it.",
  "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
  "A cat has five toes on his front paws, and four on the back, unless he’s a polydactyl.",
  "Polydactyl cats are also referred to as 'Hemingway cats' because the author was so fond of them.",
  "There are 45 Hemingway cats living at the author’s former home in Key West, Fla.",
  "Original kitty litter was made out of sand but it was replaced by more absorbent clay in 1948.",
  "Abraham Lincoln kept four cats in the White House.",
  "Isaac Newton is credited with inventing the cat door.",
  "One legend claims that cats were created when a lion on Noah’s Ark sneezed and two kittens came out.",
  "A cat can jump up to six times its length.",
  "A house cat is faster than Usain Bolt.",
  "When cats leave their poop uncovered, it is a sign of aggression to let you know they don’t fear you.",
  "Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example.",
  "Cats use their whiskers to detect if they can fit through a space.",
  "Cats only sweat through their foot pads.",
  "Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.",
  "Hearing is the strongest of cat’s senses: They can hear sounds as high as 64 kHz — compared with humans, who can hear only as high as 20 kHz.",
  "Cats can move their ears 180 degrees.",
  "They can also move their ears separately.",
  "A cat has detected his human’s breast cancer.",
  "A cat’s nose is ridged with a unique pattern, just like a human fingerprint.",
  "Cats have scent glands along their tail, their forehead, lips, chin, and the underside of their front paws.",
  "A cat rubs against people to mark its territory.",
  "Cats lick themselves to get your scent off.",
  "Cats were mythic symbols of divinity in ancient Egypt.",
  "Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia.",
  "The Egyptian Mau is the oldest breed of cat.",
  "Every year, nearly four million cats are eaten in Asia.",
  "On average, cats spend 66% of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
  "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
  "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
  "The technical term for a cat’s hairball is a bezoar.",
  "A group of cats is called a clowder.",
  "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.",
  "A cat cannot climb head first down a tree because its claws are curved the wrong way A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
  "Cats make about 100 different sounds. Dogs make only about 10.",
  "A cat’s brain is biologically more similar to a human brain than it is to a dog’s. Both humans and cats have identical regions in their brains that are responsible for emotions.",
  "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
  "Approximately 24 cat skins can make a coat.",
  "During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.",
  "During the Middle Ages, cats were associated with withcraft, and on St. John’s Day, people all over Europe would stuff them into sacks and toss the cats into bonfires. On holy days, people celebrated by tossing cats from church towers.",
  "Cats are the most popular pet in North American Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs.",
  "Over 30% of households in North America own a cat.",
  "The first cat in space was a French cat named Felicette (a.k.a. Astrocat)",
  "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.",
  "The term puss is the root of the principal word for cat in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus.",
  "Some scholars suggest that puss could be imitative of the hissing sound used to get a cat’s attention.",
  "Approximately 40,000 people are bitten by cats in the U.S. annually.",
  "According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.",
  "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.",
  "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.",
  "A cat can jump up to five times its own height in a single bound.",
  "Some cats have survived falls of over 65 feet (20 meters), due largely to their righting reflex."
];

window.setInterval(function(){
  var message = "";
  if(Math.random() < 0.5){
    message = catfacts[Math.floor(Math.random()*catfacts.length)];
    sendMessage("🐱  " + message);
  }
}, 10000);
