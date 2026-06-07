import type { ElementLocaleRecord } from '../../../types'

const section: Record<string, ElementLocaleRecord> = {
  '71': {
    ions: 'Lu³⁺ (Lutetium)',
    history: {
      discoveryYear: '1907',
      discoveredBy: 'Georges Urbain',
      namedBy: 'From Lutetia (Paris)',
    },
    stse: ['Cancer Therapy (Lu-177 radiotherapy)', 'Petroleum cracking'],
    uses: ['PET scan detectors (LSO crystals)', 'Cancer treatment', 'Catalysts'],
    hazards: ['Low toxicity'],
  },
  '72': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1923',
      discoveredBy: 'Dirk Coster & George de Hevesy',
      namedBy: 'From Hafnia (Copenhagen)',
    },
    stse: ['Nuclear Reactors (Control rods)', 'Microprocessors'],
    uses: [
      'Nuclear control rods (absorbs neutrons)',
      'Plasma cutting tips',
      'Intel chips (high-k dielectric)',
    ],
    hazards: ['Fine dust is pyrophoric'],
  },
  '73': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1802',
      discoveredBy: 'Anders Gustaf Ekeberg',
      namedBy: 'From Tantalus (Greek mythology)',
    },
    stse: ['Electronics Supply Chain ("Conflict mineral")'],
    uses: ['Capacitors in smartphones/laptops', 'Surgical implants (inert)'],
    hazards: ['Low toxicity', 'biocompatible'],
  },
  '74': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1783',
      discoveredBy: 'Juan José & Fausto Elhuyar',
      namedBy: 'Swedish tung sten (heavy stone); Symbol W from Wolfram',
    },
    stse: ['Lighting (Incandescent filaments)', 'Military (Kinetic bombardment)'],
    uses: ['Light bulb filaments', 'TIG welding', 'Armor-piercing ammunition'],
    hazards: ['Dust irritates lungs', 'largely non-toxic'],
  },
  '75': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1925',
      discoveredBy: 'Walter Noddack, Ida Tacke, Otto Berg',
      namedBy: 'From Rhenus (Rhine River)',
    },
    stse: ['Aerospace (Jet engine superalloys)'],
    uses: ['Jet engine turbine blades', 'Thermocouples', 'Catalysts'],
    hazards: ['Low toxicity'],
  },
  '76': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1803',
      discoveredBy: 'Smithson Tennant',
      namedBy: 'From Greek osme (smell)',
    },
    stse: ['Density limits (Densest naturally occurring substance)'],
    uses: ['Fountain pen tips', 'Electrical contacts', 'Fingerprint detection'],
    hazards: ['OsO₄ is extremely toxic and volatile (causes blindness)'],
  },
  '77': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1803',
      discoveredBy: 'Smithson Tennant',
      namedBy: 'From Greek iris (rainbow, due to salt colors)',
    },
    stse: ['Geology (K-Pg boundary layer evidence for Dinosaur extinction)'],
    uses: ['Spark plugs', 'Crucibles', 'Standard Metre Bar (Pt-Ir alloy)'],
    hazards: ['Low toxicity', 'dust is flammable'],
  },
  '78': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1735',
      discoveredBy: 'Antonio de Ulloa',
      namedBy: 'From Spanish platina (little silver)',
    },
    stse: ['Green Technology (Hydrogen Fuel Cells)', 'Medicine (Chemotherapy)'],
    uses: ['Catalytic converters', 'Jewelry', 'Pacemaker electrodes', 'Cisplatin (cancer drug)'],
    hazards: ['Metallic Pt is inert', 'salts can cause asthma'],
  },
  '79': {
    ions: 'Au⁺ (Gold(I)), Au³⁺ (Gold(III))',
    history: {
      discoveryYear: 'Prehistoric (~6000 BCE)',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Anglo-Saxon gold (Symbol Au from Latin aurum)',
    },
    stse: ['Economics (Gold Standard)', 'Electronics (Corrosion-free contacts)'],
    uses: ['Currency/Jewelry', 'Electronics plating', 'Radiation shielding'],
    hazards: ['Non-toxic (edible in leaf form)'],
  },
  '80': {
    ions: 'Hg₂²⁺ (Mercury(I)), Hg²⁺ (Mercury(II))',
    history: {
      discoveryYear: '~1500 BCE',
      discoveredBy: 'Ancient Egyptians/Chinese',
      namedBy: 'From Planet Mercury (Symbol Hg from hydrargyrum)',
    },
    stse: ['Environmental Toxicology (Minamata disease)', 'Bioaccumulation in fish'],
    uses: ['Thermometers (historical)', 'Dental amalgam', 'Fluorescent bulbs'],
    hazards: ['Highly toxic neurotoxin (vapor and compounds)'],
  },
  '81': {
    ions: 'Tl⁺ (Thallium(I)), Tl³⁺ (Thallium(III))',
    history: {
      discoveryYear: '1861',
      discoveredBy: 'William Crookes',
      namedBy: 'From Greek thallos (green twig)',
    },
    stse: ['Forensic Science ("The Poisoner\'s Poison")'],
    uses: ['Rat poison (banned)', 'Electronics', 'Cardiac stress tests (Tl-201)'],
    hazards: ['Extremely toxic', 'accumulates in body'],
  },
  '82': {
    ions: 'Pb²⁺ (Lead(II)), Pb⁴⁺ (Lead(IV))',
    history: {
      discoveryYear: '~7000 BCE',
      discoveredBy: 'Ancient Civilizations',
      namedBy: 'Anglo-Saxon lead (Symbol Pb from Latin plumbum)',
    },
    stse: ['Public Health (Flint Water Crisis)', 'Environmental banning (Leaded gasoline)'],
    uses: ['Car batteries (Pb-acid)', 'Radiation shielding', 'Bullets'],
    hazards: ['Potent neurotoxin', 'affects IQ in children'],
  },
  '83': {
    ions: 'Bi³⁺ (Bismuth(III))',
    history: {
      discoveryYear: '~1000 CE',
      discoveredBy: 'Alchemists (confused with Pb/Sn)',
      namedBy: 'German Wismut (mass)',
    },
    stse: ['Green Chemistry (Non-toxic lead replacement)'],
    uses: ['Pepto-Bismol (Stomach relief)', 'Lead-free shot/solder', 'Fire sprinklers'],
    hazards: ['Low toxicity (unusual for heavy metals)'],
  },
  '84': {
    ions: 'Po²⁺ (Polonium(II)), Po⁴⁺ (Polonium(IV))',
    history: {
      discoveryYear: '1898',
      discoveredBy: 'Marie & Pierre Curie',
      namedBy: "From Poland (Marie's homeland)",
    },
    stse: ['Nuclear Assassination (Litvinenko poisoning)', 'Static elimination'],
    uses: ['Anti-static brushes', 'Heat source in satellites (rare)'],
    hazards: ['Extremely radiotoxic (alpha emitter)', 'fatal in micrograms'],
  },
  '85': {
    ions: 'At⁻ (Astatide, predicted)',
    history: {
      discoveryYear: '1940',
      discoveredBy: 'Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè',
      namedBy: 'From Greek astatos (unstable)',
    },
    stse: ['Targeted Alpha Therapy (Cancer treatment research)'],
    uses: ['Medical research only (rarest natural element)'],
    hazards: ['Highly radioactive'],
  },
  '86': {
    ions: 'No common ions',
    history: {
      discoveryYear: '1900',
      discoveredBy: 'Friedrich Ernst Dorn',
      namedBy: 'Derived from Radium',
    },
    stse: ['Indoor Air Quality (Lung cancer risk in basements)'],
    uses: ['Radiation therapy (historical)', 'Earthquake prediction research'],
    hazards: ['Radioactive gas', 'carcinogen via inhalation'],
  },
}

export default section
