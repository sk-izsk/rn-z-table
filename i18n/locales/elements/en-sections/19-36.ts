import type { ElementLocaleRecord } from '../../../types'

const section: Record<string, ElementLocaleRecord> = {
  '19': {
    ions: 'K⁺ (Potassium)',
    history: {
      discoveryYear: '1807',
      discoveredBy: 'Humphry Davy',
      namedBy: "Humphry Davy (from 'Potash')",
    },
    stse: [
      'Agriculture (NPK Fertilizers)',
      'Geology (K-Ar dating)',
      'Biology (Nerve transmission)',
    ],
    uses: ['Fertilizers', 'Soaps', 'Gunpowder (KNO₃)'],
    hazards: ['Reacts violently with water'],
  },
  '20': {
    ions: 'Ca²⁺ (Calcium)',
    history: {
      discoveryYear: '1808',
      discoveredBy: 'Humphry Davy',
      namedBy: 'From Latin calx (lime)',
    },
    stse: ['Construction (Concrete/Cement chemistry)', 'Human Anatomy (Bones/Teeth structure)'],
    uses: ['Cement', 'Steelmaking (Desulfurization)', 'Dietary supplements'],
    hazards: ['Reacts with water (slowly compared to Na/K)'],
  },
  '21': {
    ions: 'Sc³⁺ (Scandium)',
    history: {
      discoveryYear: '1879',
      discoveredBy: 'Lars Fredrik Nilson',
      namedBy: 'From Latin Scandia (Scandinavia)',
    },
    stse: ["Prediction validation (Mendeleev predicted it as 'Eka-boron')"],
    uses: ['Aerospace alloys (Aluminum-Scandium for MiG fighters)', 'Stadium lighting'],
    hazards: ['Elemental dust is flammable'],
  },
  '22': {
    ions: 'Ti³⁺ (Titanium(III)), Ti⁴⁺ (Titanium(IV))',
    history: {
      discoveryYear: '1791',
      discoveredBy: 'William Gregor',
      namedBy: 'Martin Heinrich Klaproth (Titans of mythology)',
    },
    stse: [
      'Medical Engineering (Biocompatible implants)',
      'Aerospace (High strength-to-weight ratio)',
    ],
    uses: ['Joint replacements', 'Aircraft engines', 'Pigment (TiO₂)'],
    hazards: ['Nontoxic (biologically inert)'],
  },
  '23': {
    ions: 'V²⁺ (Vanadium(II)), V³⁺ (Vanadium(III))',
    history: {
      discoveryYear: '1801',
      discoveredBy: 'Andrés Manuel del Río',
      namedBy: 'Nils Gabriel Sefström (Vanadis, Norse goddess)',
    },
    stse: ['Materials Science (High-speed steel tools)'],
    uses: ['Ferrovanadium alloys (Tools, Axles)', 'Sulfuric acid catalyst (V₂O₅)'],
    hazards: ['Compounds (especially V₂O₅) are toxic'],
  },
  '24': {
    ions: 'Cr²⁺ (Chromium(II)), Cr³⁺ (Chromium(III))',
    history: {
      discoveryYear: '1797',
      discoveredBy: 'Louis-Nicolas Vauquelin',
      namedBy: 'From Greek chroma (color)',
    },
    stse: [
      'Corrosion protection (Stainless steel passivation)',
      'Environmental Toxicology (Hexavalent chromium)',
    ],
    uses: ['Stainless steel (minimum 10.5%)', 'Chrome plating', 'Pigments'],
    hazards: [
      'Cr(VI) is carcinogenic and highly toxic',
      'Cr(III) essentiality debated in modern literature',
    ],
  },
  '25': {
    ions: 'Mn²⁺ (Manganese(II)), Mn³⁺ (Manganese(III))',
    history: {
      discoveryYear: '1774',
      discoveredBy: 'Johan Gottlieb Gahn',
      namedBy: 'Derived from Magnesia',
    },
    stse: ['Metallurgy (Essential for steel strength)', 'Batteries (Alkaline cells)'],
    uses: ['Steel alloys', 'Aluminum beverage cans', 'Dry cell batteries (MnO₂)'],
    hazards: ['Manganism (neurotoxicity) from chronic dust inhalation'],
  },
  '26': {
    ions: 'Fe²⁺ (Iron(II)), Fe³⁺ (Iron(III))',
    history: {
      discoveryYear: 'Prehistoric (~4000 BCE)',
      discoveredBy: 'Ancient Civilizations (Iron Age)',
      namedBy: 'From Anglo-Saxon iren (Symbol Fe from Latin ferrum)',
    },
    stse: [
      'Civilization development (Steel infrastructure)',
      'Biology (Hemoglobin/Oxygen transport)',
    ],
    uses: ['Construction (Steel)', 'Vehicles', 'Machinery'],
    hazards: ['Low toxicity', 'acute overdose toxic'],
  },
  '27': {
    ions: 'Co²⁺ (Cobalt(II)), Co³⁺ (Cobalt(III))',
    history: {
      discoveryYear: '1735',
      discoveredBy: 'Georg Brandt',
      namedBy: 'From German Kobold (goblin/spirit)',
    },
    stse: [
      'Renewable Energy (EV Batteries)',
      'Medical (Radiation therapy Co-60)',
      'Biology (Vitamin B12)',
    ],
    uses: ['Lithium-ion battery cathodes', 'Superalloys (Turbines)', 'Blue pigments'],
    hazards: ['Toxic', 'Skin sensitizer'],
  },
  '28': {
    ions: 'Ni²⁺ (Nickel(II)), Ni³⁺ (Nickel(III))',
    history: {
      discoveryYear: '1751',
      discoveredBy: 'Axel Fredrik Cronstedt',
      namedBy: "From Kupfernickel (Devil's copper)",
    },
    stse: ['Currency (Coins)', 'Alloys (Stainless steel)', 'Catalysis (Hydrogenation)'],
    uses: ['Stainless steel', 'Batteries', 'Plating', 'Coins'],
    hazards: ['Common allergen (contact dermatitis)'],
  },
  '29': {
    ions: 'Cu⁺ (Copper(I)), Cu²⁺ (Copper(II))',
    history: {
      discoveryYear: 'Prehistoric (~9000 BCE)',
      discoveredBy: 'Middle Eastern Civilizations',
      namedBy: 'From Latin Cyprium (Metal of Cyprus)',
    },
    stse: ['Electrification (Global grid)', 'Antimicrobial properties (Hospital surfaces)'],
    uses: ['Wiring', 'Plumbing', 'Alloys (Bronze/Brass)'],
    hazards: ['Toxic to invertebrates/aquatic life', 'essential for humans'],
  },
  '30': {
    ions: 'Zn²⁺ (Zinc)',
    history: {
      discoveryYear: '~1000 CE (India); 1746 (Europe isolation)',
      discoveredBy: 'Indian metallurgists; Andreas Sigismund Marggraf',
      namedBy: 'Paracelsus (from German Zinke)',
    },
    stse: ['Corrosion protection (Sacrificial anode)', 'Biochemistry (Enzyme cofactor)'],
    uses: ['Galvanizing steel', 'Die-casting', 'Brass alloy'],
    hazards: ['Metal fume fever (from welding)'],
  },
  '31': {
    ions: 'Ga³⁺ (Gallium)',
    history: {
      discoveryYear: '1875',
      discoveredBy: 'Paul-Émile Lecoq de Boisbaudran',
      namedBy: 'Lecoq de Boisbaudran (Gallia/France)',
    },
    stse: ['Semiconductor physics (LEDs/Lasers)', "Mendeleev's 'Eka-aluminum'"],
    uses: ['Blue/Violet LEDs (GaN)', 'Integrated circuits', 'High-temp thermometers'],
    hazards: ['Corrosive to aluminum (liquid metal embrittlement)'],
  },
  '32': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1886',
      discoveredBy: 'Clemens Winkler',
      namedBy: 'Winkler (Germania/Germany)',
    },
    stse: ['Electronics history (First transistors were Ge)', 'Fiber optics'],
    uses: ['Fiber optics', 'Infrared optics', 'Polymerization catalysts'],
    hazards: ['Some organic compounds toxic'],
  },
  '33': {
    ions: 'No common ions',
    history: {
      discoveryYear: '~1250 (Isolated)',
      discoveredBy: 'Albertus Magnus (attributed)',
      namedBy: 'From Persian zarnikh (yellow orpiment)',
    },
    stse: ['Toxicology (Historical poison)', 'Semiconductor doping (n-type)'],
    uses: ['Semiconductors (GaAs)', 'Wood preservatives (historical)', 'Alloys'],
    hazards: ['Highly toxic', 'Carcinogenic'],
  },
  '34': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1817',
      discoveredBy: 'Jöns Jakob Berzelius',
      namedBy: 'From Greek selene (Moon)',
    },
    stse: ['Xerox process (Photoconductivity)', 'Biological trace element'],
    uses: ['Photocopying', 'Glass decolorizing', 'Solar cells'],
    hazards: ['Toxic in large amounts', 'essential in trace amounts'],
  },
  '35': {
    ions: 'Br⁻ (Bromide)',
    history: {
      discoveryYear: '1826',
      discoveredBy: 'Antoine Jérôme Balard',
      namedBy: 'From Greek bromos (stench)',
    },
    stse: ['Flame retardants', 'Ozone depletion'],
    uses: ['Flame retardants', 'Drilling fluids', 'Photographic film (AgBr)'],
    hazards: ['Corrosive liquid', 'vapor is highly toxic'],
  },
  '36': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1898',
      discoveredBy: 'William Ramsay & Morris Travers',
      namedBy: 'From Greek kryptos (hidden)',
    },
    stse: ['Measurement standards (Meter was defined by Kr-86 light 1960-1983)'],
    uses: ['High-speed photography flashes', 'Fluorescent bulbs', 'Double-pane windows'],
    hazards: ['Asphyxiant', 'Radioactive ⁸⁵Kr is a fission product'],
  },
}

export default section
