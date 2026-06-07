import type { ElementLocaleRecord } from '../../../types'

const section: Record<string, ElementLocaleRecord> = {
  '1': {
    ions: 'H⁺ (Hydrogen ion), H⁻ (Hydride)',
    history: {
      discoveryYear: '1766',
      discoveredBy: 'Henry Cavendish',
      namedBy: 'Antoine Lavoisier',
    },
    stse: [
      'Energy transition (Fuel Cells)',
      'Hydrogen as energy carrier',
      'Heavy Water (D₂O) in CANDU reactors',
    ],
    uses: ['Ammonia Production', 'Hydrogenation'],
    hazards: ['Highly flammable', 'Explosion risk'],
  },
  '2': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1868 (spectral); 1895 (isolated)',
      discoveredBy: 'William Ramsay, Per Teodor Cleve',
      namedBy: 'Lockyer & Frankland',
    },
    stse: ['Cryogenics (MRI supermagnets)', 'Non-renewable resource conservation'],
    uses: ['MRI cooling', 'Lifting gas (balloons)', 'Shielding gas (welding)'],
    hazards: ['Asphyxiant in confined spaces'],
  },
  '3': {
    ions: 'Li⁺ (Lithium)',
    history: {
      discoveryYear: '1817',
      discoveredBy: 'Johan August Arfwedson',
      namedBy: 'Jöns Jakob Berzelius',
    },
    stse: ['Battery technology (EV revolution)', 'Mental health (Mood stabilizers)'],
    uses: ['Li-ion batteries', 'Ceramics', 'Lubricants'],
    hazards: ['Reacts vigorously with water', 'Corrosive'],
  },
  '4': {
    ions: 'Be²⁺ (Beryllium)',
    history: {
      discoveryYear: '1798',
      discoveredBy: 'Louis-Nicolas Vauquelin',
      namedBy: 'Friedrich Wöhler',
    },
    stse: [
      'Aerospace engineering (James Webb Telescope mirrors)',
      'Nuclear physics (Neutron reflector)',
    ],
    uses: ['X-ray windows', 'Non-sparking tools (alloys)'],
    hazards: ['Highly toxic (Berylliosis)', 'Carcinogenic'],
  },
  '5': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1808',
      discoveredBy: 'Gay-Lussac & Thénard (and Davy)',
      namedBy: 'Derived from "Borax"',
    },
    stse: ['Agriculture (Essential plant nutrient)', 'Nuclear safety (Control rods)'],
    uses: ['Pyrex glass (Borosilicate)', 'Fiberglass', 'Detergents'],
    hazards: ['Low toxicity as element', 'some compounds toxic'],
  },
  '6': {
    ions: 'C⁴⁻ (Carbon(-IV)), C²⁺ (Carbon(II)), C⁴⁺ (Carbon(IV))',
    history: {
      discoveryYear: 'Prehistoric',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Antoine Lavoisier',
    },
    stse: [
      'Climate Change (Carbon Cycle)',
      'Organic Chemistry (Basis of Life)',
      'Radiocarbon dating',
    ],
    uses: ['Steel manufacturing', 'Filters', 'Gemstones', 'Fuels'],
    hazards: ['CO/CO₂ from combustion', 'dust inhalation'],
  },
  '7': {
    ions: 'N³⁻ (Nitride)',
    history: {
      discoveryYear: '1772',
      discoveredBy: 'Daniel Rutherford',
      namedBy: 'Jean-Antoine Chaptal',
    },
    stse: ['Agriculture (Haber-Bosch Process/Fertilizers)', 'Cryogenics (Liquid N₂)'],
    uses: ['Fertilizers', 'Explosives', 'Food packaging (inert atmosphere)'],
    hazards: ['Asphyxiant (displaces oxygen)'],
  },
  '8': {
    ions: 'O²⁻ (Oxide)',
    history: {
      discoveryYear: '1774',
      discoveredBy: 'Joseph Priestley / Carl Wilhelm Scheele',
      namedBy: 'Antoine Lavoisier',
    },
    stse: ['Biological respiration', 'Combustion engines', 'Ozone layer protection'],
    uses: ['Steel making', 'Medical life support', 'Water treatment'],
    hazards: ['Oxidizer (accelerates fire)'],
  },
  '9': {
    ions: 'F⁻ (Fluoride)',
    history: {
      discoveryYear: '1886',
      discoveredBy: 'Henri Moissan',
      namedBy: 'Humphry Davy (suggested)',
    },
    stse: ['Dental health (Water fluoridation)', 'Nuclear fuel (UF₆ enrichment)'],
    uses: ['Teflon (PTFE)', 'Toothpaste', 'Refrigerants'],
    hazards: ['Highly toxic', 'Corrosive', 'Reacts with almost everything'],
  },
  '10': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1898',
      discoveredBy: 'William Ramsay & Morris Travers',
      namedBy: 'Ramsay (from Greek neos)',
    },
    stse: ['Lighting technology', 'Lasers'],
    uses: ['Neon signs', 'High-voltage indicators', 'Cryogenics'],
    hazards: ['Asphyxiant'],
  },
  '11': {
    ions: 'Na⁺ (Sodium)',
    history: { discoveryYear: '1807', discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy' },
    stse: ['Human biology (Nerve impulses)', 'Nuclear reactors (Coolant in fast breeders)'],
    uses: ['Table salt (NaCl)', 'Street lights', 'Soap making'],
    hazards: ['Reacts violently with water'],
  },
  '12': {
    ions: 'Mg²⁺ (Magnesium)',
    history: {
      discoveryYear: '1755 (Identified); 1808 (Isolated)',
      discoveredBy: 'Joseph Black (Id.); Humphry Davy (Iso.)',
      namedBy: 'Derived from Magnesia district',
    },
    stse: ['Biological photosynthesis (Chlorophyll center)', 'Lightweight alloys'],
    uses: ['Aerospace alloys', 'Flares/Fireworks', 'Antacids'],
    hazards: ['Flammable (metal fire difficult to extinguish)'],
  },
  '13': {
    ions: 'Al³⁺ (Aluminum)',
    history: {
      discoveryYear: '1825',
      discoveredBy: 'Hans Christian Ørsted',
      namedBy: 'Humphry Davy',
    },
    stse: ['Recycling (Infinite recyclability)', 'Transportation efficiency (Lightweighting)'],
    uses: ['Aircraft structures', 'Cans/Foil', 'Power lines'],
    hazards: ['Dust is flammable/explosive'],
  },
  '14': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1824',
      discoveredBy: 'Jöns Jakob Berzelius',
      namedBy: 'Thomas Thomson',
    },
    stse: ['The Digital Age (Semiconductors/Microchips)', 'Solar energy (Photovoltaics)'],
    uses: ['Electronics', 'Glass/Concrete (as Silicates)', 'Silicones'],
    hazards: ['Silicosis (chronic dust inhalation)'],
  },
  '15': {
    ions: 'P³⁻ (Phosphide)',
    history: {
      discoveryYear: '1669',
      discoveredBy: 'Hennig Brand',
      namedBy: 'Derived from Greek Light-bearing',
    },
    stse: ['Agriculture (Essential fertilizer)', 'Biology (DNA backbone/ATP)', 'Eutrophication'],
    uses: ['Fertilizers', 'Matchboxes (Red P)', 'Steel production'],
    hazards: ['P₄ allotrope is highly toxic and pyrophoric (ignites in air)'],
  },
  '16': {
    ions: 'S²⁻ (Sulfide)',
    history: {
      discoveryYear: 'Prehistoric',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Antoine Lavoisier (established as element)',
    },
    stse: [
      'Industrial Chemistry (Sulfuric acid production)',
      'Environmental Science (Acid Rain/SO₂)',
    ],
    uses: ['Fertilizers', 'Gunpowder', 'Vulcanization of rubber'],
    hazards: ['SO₂ gas is toxic and corrosive'],
  },
  '17': {
    ions: 'Cl⁻ (Chloride)',
    history: {
      discoveryYear: '1774',
      discoveredBy: 'Carl Wilhelm Scheele',
      namedBy: 'Humphry Davy (from Greek chloros)',
    },
    stse: ['Public Health (Water chlorination/Disinfection)', 'Chemical Warfare (WWI Choking gas)'],
    uses: ['PVC (Plastics)', 'Bleach', 'Water purification'],
    hazards: ['Highly toxic gas', 'Pulmonary irritant'],
  },
  '18': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1894',
      discoveredBy: 'Lord Rayleigh & William Ramsay',
      namedBy: 'From Greek argos (lazy/inactive)',
    },
    stse: ['Preservation (Museum documents stored in Ar)', 'Atmospheric science'],
    uses: ['Welding (Shielding gas)', 'Incandescent light bulbs', 'Double-pane windows'],
    hazards: ['Asphyxiant in confined spaces'],
  },
}

export default section
