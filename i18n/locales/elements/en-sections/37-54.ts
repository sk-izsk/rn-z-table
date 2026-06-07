import type { ElementLocaleRecord } from '../../../types'

const section: Record<string, ElementLocaleRecord> = {
  '37': {
    ions: 'Rb⁺ (Rubidium)',
    history: {
      discoveryYear: '1861',
      discoveredBy: 'Robert Bunsen & Gustav Kirchhoff',
      namedBy: 'From Latin rubidius (deep red, from spectrum)',
    },
    stse: ['Geochronology (Dating of rocks/minerals)', 'Atomic clocks'],
    uses: ['Vacuum tube getters', 'Photocells', 'Atomic clocks'],
    hazards: ['Reacts violently with water (ignites spontaneously)'],
  },
  '38': {
    ions: 'Sr²⁺ (Strontium)',
    history: {
      discoveryYear: '1790 (identified); 1808 (isolated)',
      discoveredBy: 'Adair Crawford (Id.); Humphry Davy (Iso.)',
      namedBy: 'From Strontian, Scotland',
    },
    stse: ['Nuclear fallout tracking (Sr-90 mimics Calcium in bones)', 'Fireworks'],
    uses: ['Red fireworks/flares', 'Glow-in-the-dark paints (SrAl₂O₄)'],
    hazards: ['Sr-90 is a dangerous radiotoxin', 'elemental Sr reacts with water'],
  },
  '39': {
    ions: 'Y³⁺ (Yttrium)',
    history: {
      discoveryYear: '1794',
      discoveredBy: 'Johan Gadolin',
      namedBy: 'From Ytterby, Sweden',
    },
    stse: ['Superconductors (YBCO)', 'LEDs'],
    uses: ['Red phosphors (CRTs/LEDs)', 'Laser crystals (Nd:YAG)', 'Superconductors'],
    hazards: ['Compounds can be toxic', 'dust is flammable'],
  },
  '40': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1789',
      discoveredBy: 'Martin Heinrich Klaproth',
      namedBy: 'From Persian zargun (gold-colored)',
    },
    stse: ['Nuclear energy (Fuel rod cladding due to low neutron absorption)', 'Gemstones'],
    uses: ['Nuclear fuel cladding', 'Chemical piping', 'Fake diamonds (CZ)'],
    hazards: ['Powder is highly flammable/explosive', 'biologically inert'],
  },
  '41': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1801',
      discoveredBy: 'Charles Hatchett',
      namedBy: 'Niobe (daughter of Tantalus)',
    },
    stse: ['MRI Technology (Superconducting magnets)', 'Steel production'],
    uses: ['Superconducting magnets (MRI)', 'Pipelines', 'Hypoallergenic jewelry'],
    hazards: ['Dust causes eye/skin irritation'],
  },
  '42': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1778',
      discoveredBy: 'Carl Wilhelm Scheele',
      namedBy: 'From Greek molybdos (lead-like)',
    },
    stse: ['Enzymatic function (Essential for nitrogen fixation in plants)'],
    uses: ['High-strength steel alloys', 'Lubricants (MoS₂)', 'Nuclear imaging (Mo-99 precursor)'],
    hazards: ['Toxic in high doses', 'essential trace element'],
  },
  '43': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1937',
      discoveredBy: 'Carlo Perrier & Emilio Segrè',
      namedBy: 'From Greek technetos (artificial)',
    },
    stse: ["Nuclear Medicine (Tc-99m is the world's most used medical radiotracer)"],
    uses: ['Medical imaging (Bone scans, heart scans)', 'Research'],
    hazards: ['Radioactive (radiotoxicity depends on isotope)'],
  },
  '44': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1844',
      discoveredBy: 'Karl Ernst Claus',
      namedBy: 'From Ruthenia (Latin for Russia)',
    },
    stse: ['Green Chemistry (Catalysts)', 'Electronics (Chip resistors)'],
    uses: ['Electrical contacts', 'Hard disk drives', 'Solar energy'],
    hazards: ['RuO₄ is highly toxic and volatile'],
  },
  '45': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1803',
      discoveredBy: 'William Hyde Wollaston',
      namedBy: 'From Greek rhodon (rose, due to salt color)',
    },
    stse: ['Automotive Industry (Catalytic converters for NOx reduction)'],
    uses: ['Catalytic converters (80% of use)', 'Jewelry plating (gold finish)'],
    hazards: ['Compounds are toxic/carcinogenic', 'metal is inert'],
  },
  '46': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1803',
      discoveredBy: 'William Hyde Wollaston',
      namedBy: 'From asteroid Pallas',
    },
    stse: ['Hydrogen Economy (Can absorb 900x volume of H₂)', 'Catalytic converters'],
    uses: ['Catalytic converters', 'Dentistry', 'Fuel cells', 'Hydrogen purification'],
    hazards: ['Low toxicity', 'but can cause allergic reactions'],
  },
  '47': {
    ions: 'Ag⁺ (Silver)',
    history: {
      discoveryYear: 'Prehistoric (~3000 BCE)',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Anglo-Saxon seolfor (Symbol Ag from Latin argentum)',
    },
    stse: ['Medicine (Antibacterial properties)', 'Photography (Traditional film chemistry)'],
    uses: ['Jewelry', 'Electronics (Best conductor)', 'Mirrors', 'Solar panels'],
    hazards: ['Argyria (skin turns blue from chronic exposure)', 'toxic to aquatic life'],
  },
  '48': {
    ions: 'Cd²⁺ (Cadmium)',
    history: {
      discoveryYear: '1817',
      discoveredBy: 'Friedrich Stromeyer',
      namedBy: 'From Latin cadmia (calamine)',
    },
    stse: ['Environmental Pollution (Ni-Cd battery disposal)', 'Pigments'],
    uses: ['Ni-Cd Batteries (being phased out)', 'Solar cells (CdTe)', 'Pigments'],
    hazards: ['Highly toxic', 'Carcinogen', 'Accumulates in kidneys'],
  },
  '49': {
    ions: 'In³⁺ (Indium)',
    history: {
      discoveryYear: '1863',
      discoveredBy: 'Ferdinand Reich & H.T. Richter',
      namedBy: 'From Indigo spectrum line',
    },
    stse: ['Touchscreen Technology (Indium Tin Oxide films)'],
    uses: ['LCD/OLED screens (ITO)', 'Solders', 'Semiconductors'],
    hazards: ['Compounds are toxic', 'damage lungs/kidneys'],
  },
  '50': {
    ions: 'Sn²⁺ (Tin(II)), Sn⁴⁺ (Tin(IV))',
    history: {
      discoveryYear: 'Prehistoric (~3000 BCE)',
      discoveredBy: 'Ancient Civilizations (Bronze Age)',
      namedBy: 'Anglo-Saxon tin (Symbol Sn from Latin stannum)',
    },
    stse: ['Food Safety (Tin cans)', 'Metallurgy (Bronze/Solder)'],
    uses: ['Solder (electronics)', 'Plating (steel cans)', 'Bronze alloys'],
    hazards: ['Organic tin compounds are toxic', 'metal is non-toxic'],
  },
  '51': {
    ions: 'Sb³⁻ (Antimonide), Sb³⁺ (Antimony(III))',
    history: {
      discoveryYear: '~3000 BCE',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Symbol Sb from Latin stibium (eyeliner)',
    },
    stse: ['Fire Safety (Flame retardants)', 'Lead-acid battery chemistry'],
    uses: ['Flame retardants (Sb₂O₃)', 'Lead-acid battery hardening', 'Microelectronics'],
    hazards: ['Toxic (similar to Arsenic)', 'causes poisoning'],
  },
  '52': {
    ions: 'Te²⁻ (Telluride)',
    history: {
      discoveryYear: '1782',
      discoveredBy: 'Franz-Joseph Müller von Reichenstein',
      namedBy: 'From Latin tellus (Earth)',
    },
    stse: ['Renewable Energy (CdTe Solar Panels)', 'Rewritable optical discs'],
    uses: ['Solar panels', 'Alloys (improve machinability)', 'Thermoelectric devices'],
    hazards: ['Toxic', 'ingestion causes garlic-like breath'],
  },
  '53': {
    ions: 'I⁻ (Iodide)',
    history: {
      discoveryYear: '1811',
      discoveredBy: 'Bernard Courtois',
      namedBy: 'From Greek iodes (violet)',
    },
    stse: ['Public Health (Iodized salt prevents goiter)', 'Nuclear Safety (I-131 protection)'],
    uses: ['Disinfectant (Betadine)', 'Contrast media (X-ray)', 'Thyroid nutrient'],
    hazards: ['Vapors irritate eyes/lungs', 'stains skin'],
  },
  '54': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1898',
      discoveredBy: 'William Ramsay & Morris Travers',
      namedBy: 'From Greek xenos (stranger)',
    },
    stse: ['Space Propulsion (Ion thrusters)', 'Medical Anesthesia'],
    uses: [
      'Ion propulsion engines (satellites)',
      'High-intensity strobe lights',
      'General anesthetic',
    ],
    hazards: ['Asphyxiant', 'compounds (e.g., oxides) can be explosive'],
  },
}

export default section
