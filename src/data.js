const data = {
  faction: ['Alliance', 'Horde'],
  race: {
    Alliance: ['Dwarf', 'Gnome', 'Human', 'Night Elf'],
    Horde: ['Orc', 'Troll', 'Tauren', 'Undead'],
  },
  class: {
    Dwarf: ['Hunter', 'Paladin', 'Priest', 'Rogue', 'Warrior', 'DK'],
    Gnome: ['Mage', 'Rogue', 'Warlock', 'Warrior', 'DK'],
    Dranei: ['Mage', 'Shaman', 'Priest', 'Warrior', 'DK', 'Hunter', 'Paladin'],
    Human: ['Mage', 'Paladin', 'Priest', 'Rogue', 'Warlock', 'Warrior', 'DK'],
    'Night Elf': ['Druid', 'Hunter', 'Priest', 'Rogue', 'Warrior', 'DK'],
    Undead: ['Mage', 'Priest', 'Rogue', 'Warlock', 'Warrior', 'DK'],
    Orc: ['Hunter', 'Rogue', 'Shaman', 'Warlock', 'Warrior', 'DK'],
    Tauren: ['Druid', 'Hunter', 'Shaman', 'Warrior', 'DK'],
    Troll: ['Hunter', 'Mage', 'Priest', 'Rogue', 'Shaman', 'Warrior', 'DK'],
    'Blood Elf': [
      'Paladin',
      'Hunter',
      'Mage',
      'Rogue',
      'Priest',
      'DK',
      'Warlock',
    ],
  },
  spec: {
    Druid: ['Balance', 'Feral', 'Restoration'],
    Hunter: ['Beastmaster', 'Marksmanship', 'Survival'],
    Mage: ['Arcane', 'Fire', 'Frost'],
    Paladin: ['Holy', 'Protection', 'Retribution'],
    Priest: ['Discipline', 'Holy', 'Shadow'],
    Rogue: ['Assassination', 'Combat', 'Subtlety'],
    Shaman: ['Elemental', 'Enhancement', 'Restoration'],
    Warlock: ['Affliction', 'Demonology', 'Destruction'],
    Warrior: ['Arms', 'Fury', 'Protection'],
    DK: ['Frost', 'Blood', 'Unholy'],
  },
};

export function getData() {
  return data;
}
