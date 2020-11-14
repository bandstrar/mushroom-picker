const mushrooms = [
  {
    id: '1',
    name: 'Portobello',
    description: 'Thanks to their large size and meaty flavor, they can be swapped in for meat on pretty much anything—sandwiches, pizza, pasta sauces, omelettes, and more!',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portobello-1574790398.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '2',
    name: 'Cremini',
    description: 'Because of their age, their a bit browner and bit firmer, which means they are great for soups and stews.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cremini-1574790984.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '3',
    name: 'Maitake',
    description: 'Popular for centuries in Japanese and Chinese cuisine, the maitake generally grows at the base of oak trees.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maitake-mushroom-1574791272.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '4',
    name: 'Button',
    description: 'By far the most popular mushroom in the United States, thanks to their mild flavor and propensity to blend with whatever dish they are added to.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/button-mushroom-1574791178.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '5',
    name: 'Hedgehog',
    description: 'Easily identifiable thanks to its yellow or orange cap, toothy underside, and fruity odor.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pied-de-mouton-royalty-free-image-1575414668.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '6',
    name: 'Morel',
    description: 'Hard to find and, therefore, rather expensive.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/morrel-mushroom-1574791074.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '7',
    name: 'Shiitake',
    description: 'Have long stems, topped by a dark brown, umbrella-like cap.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shiitake-mushroom-1574790311.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '8',
    name: 'Porcini',
    description: 'They generally have a reddish-brown cap that sits atop a white stem.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/porcini-mushroom-1574790558.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '9',
    name: 'Lobster',
    description: 'Have a bright red color and seafood-like smell and taste when cooked.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lobster-mushroom-1574791406.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '10',
    name: 'Enoki',
    description: 'This long white mushroom works especially well in soups, noodle dishes, and salads.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enoki-mushroom-1574790673.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '11',
    name: 'Chanterelle',
    description: 'Known for their fan-like shape and come in a variety of colors ranging from orange to yellow to white.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chanterelle-1574790784.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '12',
    name: 'Clamshell',
    description: 'This variety of mushrooms grows in clumps and boasts quarter-size caps and a crunchy texture.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clamshell-mushroom-1574791832.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '13',
    name: 'Turkey Tail',
    description: 'Its shape and multiple colors are similar to those of a wild turkey.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Trametes_versicolor_G4_%281%29.JPG/1280px-Trametes_versicolor_G4_%281%29.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '14',
    name: 'Lions Mane',
    description: 'Can be identified by its long spines, its appearance on hardwoods and its tendency to grow a single clump of dangling spines.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Igelstachelbart_Nov_06.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '15',
    name: 'Chicken of the Woods',
    description: 'Named as such because many think they taste like chicken.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Laetiporus_sulphureus_JPG01.jpg/1280px-Laetiporus_sulphureus_JPG01.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: '16',
    name: 'Deadly Dapperling',
    description: 'Accidental consumption leads to severe liver toxicity and can have lethal consequences if immediate treatment is not received.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/53/201253-050-8DEDED86/mushrooms-Massy-France.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: '17',
    name: 'Destroying Angels',
    description: 'These incredibly toxic fungi are very similar in appearance to edible button mushrooms and the meadow mushrooms, and have been collected by mistake on numerous occassions.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/08/5508-004-E3F081AB/angel.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: '18',
    name: 'Autumn Skullcap',
    description: 'While it is not especially similar to edible species, several deaths and poisonings have been attributed to collectors mistaking it for hallucinogenic mushrooms.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/03/180803-050-11B5EAE5/skullcaps-mushrooms-autumn-skullcap.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: '19',
    name: 'Death Cap',
    description: 'Perhaps the deadliest of all mushrooms, the death cap is found throughout Europe and closely resembles edible straw mushrooms and caesar’s mushrooms.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: '20',
    name: 'Psilocybin',
    description: 'Have been and continue to be used in indigenous New World cultures in religious, divinatory, or spiritual contexts.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Psilocybe_semilanceata_6514.jpg/1024px-Psilocybe_semilanceata_6514.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const pickAMushroom = () => {
  if (mushrooms.length) {
    const randomShroom = Math.floor(Math.random() * Math.floor(mushrooms.length));
    const removedShroom = mushrooms.slice(randomShroom, randomShroom + 1);
    mushrooms.splice(randomShroom, 1);
    basket.push(removedShroom[0]);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
