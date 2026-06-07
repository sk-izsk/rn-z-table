import type { ElementLocaleRecord } from '../../../types'

const section: Record<string, ElementLocaleRecord> = {
  '55': {
    ions: 'Cs⁺ (Cesium)',
    history: {
      discoveryYear: '1860',
      discoveredBy: 'Robert Bunsen & Gustav Kirchhoff',
      namedBy: 'From Latin caesius (sky blue spectrum line)',
    },
    stse: ['Global Timekeeping (Definition of the Second based on Cs-133)'],
    uses: [
      'Atomic clocks (GPS standard)',
      'Drilling fluids (Cesium formate)',
      'Photoelectric cells',
    ],
    hazards: ['Reacts explosively with cold water'],
  },
  '56': {
    ions: 'Ba²⁺ (Barium)',
    history: {
      discoveryYear: '1808',
      discoveredBy: 'Humphry Davy',
      namedBy: 'From Greek barys (heavy)',
    },
    stse: ['Medical Imaging (Barium swallow X-rays)', 'Oil Well Drilling'],
    uses: ['Drilling muds (Barite)', 'Fireworks (Green color)', 'Medical contrast agent'],
    hazards: ['Soluble compounds are toxic', 'BaSO₄ is safe (insoluble)'],
  },
  '57': {
    ions: 'La³⁺ (Lanthanum)',
    history: {
      discoveryYear: '1839',
      discoveredBy: 'Carl Gustaf Mosander',
      namedBy: 'From Greek lanthanein (to lie hidden)',
    },
    stse: ['Hybrid Vehicles (NiMH batteries)'],
    uses: ['Camera lenses (High refractive index glass)', 'Hybrid car batteries', 'Lighter flints'],
    hazards: ['Low toxicity', 'dust is flammable'],
  },
  '58': {
    ions: 'Ce³⁺ (Cerium(III)), Ce⁴⁺ (Cerium(IV))',
    history: {
      discoveryYear: '1803',
      discoveredBy: 'Martin Heinrich Klaproth, Jöns Jakob Berzelius',
      namedBy: 'From asteroid Ceres',
    },
    stse: ['Emissions Control (Diesel additives)', 'Self-cleaning ovens'],
    uses: ['Catalytic converters', 'Mischmetal (lighter flints)', 'Glass polishing'],
    hazards: ['Pyrophoric (sparks when struck)', 'low toxicity'],
  },
  '59': {
    ions: 'Pr³⁺ (Praseodymium(III))',
    history: {
      discoveryYear: '1885',
      discoveredBy: 'Carl Auer von Welsbach',
      namedBy: 'From Greek prasios didymos (green twin)',
    },
    stse: ['Renewable Energy (Magnets in wind turbines)'],
    uses: [
      'High-strength magnets (alloyed with Nd)',
      "Didymium glass (welder's goggles)",
      'Yellow pigments',
    ],
    hazards: ['Low toxicity', 'dust is flammable'],
  },
  '60': {
    ions: 'Nd³⁺ (Neodymium(III))',
    history: {
      discoveryYear: '1885',
      discoveredBy: 'Carl Auer von Welsbach',
      namedBy: 'From Greek neos didymos (new twin)',
    },
    stse: ['Green Technology (Essential for EV motors and Wind Turbines)'],
    uses: ['Strongest permanent magnets (NdFeB)', 'Lasers (Nd:YAG)', 'Glass coloring (purple)'],
    hazards: ['Dust is flammable', 'magnets can cause pinching injuries'],
  },
  '61': {
    ions: 'Pm³⁺ (Promethium(III))',
    history: {
      discoveryYear: '1945',
      discoveredBy: 'Marinsky, Glendenin, Coryell',
      namedBy: 'From Prometheus (Greek titan who stole fire)',
    },
    stse: ['Nuclear Batteries (Betavoltaics)'],
    uses: ['Nuclear batteries for guided missiles/pacemakers', 'Luminous paint'],
    hazards: ['Radioactive'],
  },
  '62': {
    ions: 'Sm²⁺ (Samarium(II)), Sm³⁺ (Samarium(III))',
    history: {
      discoveryYear: '1879',
      discoveredBy: 'Lecoq de Boisbaudran',
      namedBy: 'From Mineral Samarskite',
    },
    stse: ['Magnet Technology (SmCo magnets)'],
    uses: ['Samarium-Cobalt magnets (high temp stability)', 'Cancer treatment (Sm-153)'],
    hazards: ['Low toxicity'],
  },
  '63': {
    ions: 'Eu²⁺ (Europium(II)), Eu³⁺ (Europium(III))',
    history: {
      discoveryYear: '1901',
      discoveredBy: 'Eugène-Anatole Demarçay',
      namedBy: 'From Europe',
    },
    stse: ['Anti-counterfeiting (Glowing dyes in Euro banknotes)'],
    uses: ['Red phosphors in TV screens/LEDs', 'Fluorescent probes'],
    hazards: ['Reacts vividly with water', 'non-toxic'],
  },
  '64': {
    ions: 'Gd³⁺ (Gadolinium(III))',
    history: {
      discoveryYear: '1880',
      discoveredBy: 'Jean Charles Galissard de Marignac',
      namedBy: 'From Mineral Gadolinite (after Johan Gadolin)',
    },
    stse: ['Medical Imaging (MRI Contrast Agents)'],
    uses: ['MRI Contrast agents (Magnevist)', 'Neutron shielding', 'Magnetic refrigeration'],
    hazards: ['Free ion is toxic', 'chelated form used medically'],
  },
  '65': {
    ions: 'Tb³⁺ (Terbium(III))',
    history: {
      discoveryYear: '1843',
      discoveredBy: 'Carl Gustaf Mosander',
      namedBy: 'From Ytterby, Sweden',
    },
    stse: ['Green Energy (Low-energy lighting phosphors)'],
    uses: ['Green phosphors (fluorescent lamps)', 'Terfenol-D (magnetostrictive alloy)'],
    hazards: ['Low toxicity'],
  },
  '66': {
    ions: 'Dy³⁺ (Dysprosium(III))',
    history: {
      discoveryYear: '1886',
      discoveredBy: 'Lecoq de Boisbaudran',
      namedBy: 'From Greek dysprositos (hard to get)',
    },
    stse: ['Electric Vehicles (Magnet additives)'],
    uses: ['Neodymium magnet additive (increases heat resistance)', 'Control rods'],
    hazards: ['Low toxicity', 'dust is flammable'],
  },
  '67': {
    ions: 'Ho³⁺ (Holmium(III))',
    history: {
      discoveryYear: '1878',
      discoveredBy: 'Jacques-Louis Soret',
      namedBy: 'From Holmia (Latin for Stockholm)',
    },
    stse: ['Medical Surgery (Ho:YAG Lasers)'],
    uses: [
      'Surgical lasers (kidney stones)',
      'Strongest magnetic fields (magnetic flux concentrator)',
    ],
    hazards: ['Low toxicity'],
  },
  '68': {
    ions: 'Er³⁺ (Erbium(III))',
    history: {
      discoveryYear: '1843',
      discoveredBy: 'Carl Gustaf Mosander',
      namedBy: 'From Ytterby, Sweden',
    },
    stse: ['Telecommunications (Fiber optic signal amplifiers)'],
    uses: ['EDFA (Erbium-Doped Fiber Amplifiers)', 'Dermatology lasers', 'Pink glass coloring'],
    hazards: ['Low toxicity'],
  },
  '69': {
    ions: 'Tm³⁺ (Thulium(III))',
    history: {
      discoveryYear: '1879',
      discoveredBy: 'Per Teodor Cleve',
      namedBy: 'From Thule (mythical North)',
    },
    stse: ['Portable X-rays (Tm-170 source)'],
    uses: ['Portable X-ray machines', 'Lasers', 'Euro banknotes'],
    hazards: ['Low toxicity'],
  },
  '70': {
    ions: 'Yb²⁺ (Ytterbium(II)), Yb³⁺ (Ytterbium(III))',
    history: {
      discoveryYear: '1878',
      discoveredBy: 'Jean Charles Galissard de Marignac',
      namedBy: 'From Ytterby, Sweden',
    },
    stse: ["Atomic Clocks (World's most stable clocks)"],
    uses: ['Fiber lasers', 'Stress gauges', 'Atomic clocks'],
    hazards: ['Eye/skin irritant'],
  },
}

export default section
