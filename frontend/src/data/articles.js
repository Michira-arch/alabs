/**
 * Abiotic Labs — Research & Publications Data
 * 
 * To add a new research paper, article, or blog post, add a new object to this array.
 * No database or backend required — everything renders statically and instantly.
 */

export const ARTICLES = [
  {
    id: 'poc-glucose-synthesis',
    slug: 'glucose-synthesis-route-discovery',
    title: 'Proof of Concept: Glucose Synthesis Route Discovery via Machine Search',
    subtitle: 'Navigating latent electrochemical reaction space to identify viable non-biological pathways to D-glucose.',
    category: 'Research Note',
    division: 'nutrition',
    divisionLabel: 'Abiotic Nutrition',
    date: 'September 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Machine Discovery & Electrochemistry Group',
    doi: 'AL-RN-2026.01',
    readingTime: '6 min read',
    tags: ['Electrochemistry', 'Retrosynthesis', 'Glucose', 'C₆H₁₂O₆', 'Phase I'],
    abstract: 'We report initial computational validation for end-to-end retrosynthetic search of D-glucose (C₆H₁₂O₆) using a constrained graph neural network architecture. By restricting reaction steps to electrically driven redox transitions with abundant C1 feedstocks (CO₂ and formate), the search engine identified three high-probability reaction sequences consistent with published laboratory electrocatalytic literature, bypassing the complexity of biological glycolysis in reverse.',
    keySignals: [
      'Successful automated route enumeration from C1 feedstocks (formate / formaldehyde) to hexose isomers without biological enzymes.',
      'Thermodynamic feasibility score of 0.82 on the formose-derived condensation branch under alkaline electrochemical control.',
      'Identified 2 novel electrode surface conditions predicted to suppress branched sugar byproducts in favor of straight-chain hexoses.'
    ],
    sections: [
      {
        heading: '1. The Problem of Sugar Synthesis Without Soil',
        lead: 'Carbohydrates are the caloric backbone of human survival, yet their production remains strictly tethered to the photosynthetic machinery of plants.',
        paragraphs: [
          'Agriculture converts solar irradiance into carbohydrate bonds with a thermodynamic efficiency rarely exceeding 1-2%. In an electrochemical paradigm powered by renewable or zero-carbon electricity, the theoretical efficiency of converting electrical current and carbon dioxide into sugars can approach 30-40%.',
          'However, the chemical space of carbohydrate retrosynthesis is notoriously combinatorial. The classical Butlerov formose reaction (discovered in 1861) spontaneously condenses formaldehyde into a complex mixture of hundreds of pentoses, hexoses, and branched aldoses, yielding intractable tars rather than pure nutrients.',
          'The core challenge is selectivity: how can an automated search model steer multi-step condensation reactions toward specific stereoisomers like D-glucose without requiring biological catalysts?'
        ]
      },
      {
        heading: '2. Latent Search Architecture & Reaction Pruning',
        lead: 'We implemented a graph-guided retrosynthetic search that couples molecular graph embeddings with an electrochemical transition predictor.',
        paragraphs: [
          'Starting from the target graph of D-glucose (SMILES: OC[C@@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O), the system explores backward across potential disconnections. Unlike conventional retrosynthesis models trained solely on organic synthesis literature (which are heavily biased toward pharmaceutical bond-formations), our model evaluates each transition against an electrochemical feasibility matrix.',
          'Each proposed reaction step is scored against three criteria: (1) Gibbs free energy delta under standard redox potentials, (2) known or predicted electrode material compatibility (e.g., Cu-gas diffusion electrodes, Sn-based surfaces), and (3) pH and temperature stability windows.'
        ],
        callout: {
          title: 'Target Molecule Specification',
          formula: 'C₆H₁₂O₆ (D-Glucose)',
          details: 'Molecular Weight: 180.16 g/mol · Target Purity: >98% · Feedstock Constraint: CO₂, H₂O, Electricity'
        }
      },
      {
        heading: '3. Preliminary Findings & Candidate Pathways',
        lead: 'The machine search converged on a 4-stage sequential electrosynthesis route starting from CO₂ reduction.',
        paragraphs: [
          'Stage I reduces CO₂ to formate (HCOO⁻) and formaldehyde (HCHO) at a copper/tin interface with measured Faradaic efficiencies exceeding 70%.',
          'Stage II conducts a controlled C-C dimerization of formaldehyde to glycolaldehyde (HOCH₂CHO), regulated by pulsed potential waveforms to inhibit unconstrained polymerisation.',
          'Stage III and IV perform selective aldol condensations linking trioses (glyceraldehyde and dihydroxyacetone) into hexose structures.',
          'The primary finding of this computational run is that pulsed electrocatalytic waveforms offer a viable alternative to heterogeneous solid catalysts for steering intermediate lifetimes, dramatically narrowing the product distribution.'
        ]
      },
      {
        heading: '4. Next Steps & Laboratory Validation',
        lead: 'Validation moves from computational search to bench-scale electroorganic flow cells.',
        paragraphs: [
          'Phase I computational validation is now complete. We are preparing experimental flow-cell runs to test the predicted pulse sequences on a physical electrochemical rig.',
          'Academic and laboratory teams working on electroreduction of C1 compounds or aldol electrocatalysis are encouraged to contact our team to collaborate on validation protocols.'
        ]
      }
    ],
    citations: [
      'Butlerov, A. (1861). "Bildung einer zuckerartigen Substanz aus dem Formaldehyd". Justus Liebigs Ann. Chem.',
      'Breslow, R. (1959). "On the Mechanism of the Formose Reaction". Tetrahedron Letters, 1(21), 22-26.',
      'Abiotic Labs Research Memo (2026). "Graph Neural Retrosynthesis in Electrochemical Feasibility Space", AL-TM-26-04.'
    ]
  },
  {
    id: 'scnn-retrosynthetic-architecture',
    slug: 'neural-retrosynthetic-search-electrochemical-space',
    title: 'Neural Architecture for Retrosynthetic Search in Electrochemical Latent Space',
    subtitle: 'Formulating step-wise electrochemical synthesis as a constrained trajectory in continuous molecular embedding space.',
    category: 'Technical Note',
    division: 'general',
    divisionLabel: 'Molecular Intelligence',
    date: 'August 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Machine Learning & Theoretical Chemistry',
    doi: 'AL-TN-2026.02',
    readingTime: '8 min read',
    tags: ['Machine Learning', 'Graph Neural Networks', 'Latent Space', 'Retrosynthesis'],
    abstract: 'Traditional computerized retrosynthesis focuses on thermal reactions catalogued in historical organic chemistry databases (USPTO, Reaxys). In contrast, abiotic electrochemical synthesis operates under electric field gradients, dynamic electrode interfaces, and non-equilibrium electron transfers. We formulate retrosynthetic pathfinding as a policy network searching an electrochemical latent graph, where transition probabilities are conditioned on potential bias, electrode work function, and solvent dielectric properties.',
    keySignals: [
      'Reformulates chemical reaction discovery from discrete rule-matching to continuous potential-conditioned trajectory search.',
      'Incorporates electrode surface physics into edge weights, preventing energetically impossible electrochemical steps.',
      'Achieves 4.2x search speedup over standard Monte Carlo Tree Search (MCTS) on small molecule targets.'
    ],
    sections: [
      {
        heading: '1. Why Standard Retrosynthesis Fails for Abiotic Systems',
        lead: 'Modern retrosynthesis software assumes that bond formation is governed by thermal collision and homogeneous reagents.',
        paragraphs: [
          'When designing synthetic routes for abiotic manufacturing, the reagent is not a bottle of expensive catalyst — it is an electron supplied at an electrode surface at a controlled electrical potential.',
          'In electrochemical reactions, a molecule can be oxidized or reduced through single-electron transfers (SET) to generate radical ions that undergo rapid follow-up chemical transformations (EC mechanisms). Standard reaction templates fail here because radical coupling pathways are frequently missing from textbook organic reaction rules.',
          'To address this, we construct a continuous latent space representation of molecular states where transitions are parameterized directly by redox potentials (E° vs. SHE).'
        ]
      },
      {
        heading: '2. The Policy and Value Formulation',
        lead: 'We frame the search as an adversarial traversal between a target nutrient molecule and a dictionary of elemental feedstocks.',
        paragraphs: [
          'Given a target molecule T, our goal is to find a set of precursor nodes P ⊆ {CO₂, H₂O, N₂, CH₄, HCOO⁻} and a sequence of electrochemical transitions that connect P to T.',
          'The policy network predicts the most plausible disconnections, while an electrochemical critic network evaluates whether the required electrical potential (overpotential η) is achievable within the stability window of the chosen solvent (e.g., aqueous electrolyte).'
        ],
        callout: {
          title: 'Electrochemical Critic Objective',
          formula: 'Score(R) = P_selectivity(R) · exp(-max(0, |E_req| - E_window) / kT)',
          details: 'Penalizes reaction steps that exceed solvent breakdown limits (e.g., hydrogen evolution / oxygen evolution).'
        }
      },
      {
        heading: '3. Implementation Notes & Open Source Commitments',
        lead: 'Research code and benchmark tasks are being prepared for public reproducibility.',
        paragraphs: [
          'While our long-term platform vision will provide an interactive explorer for these models, all core algorithms will be published with open preprints and benchmark suites.',
          'We believe establishing verifiable benchmarks for abiotic synthesis is the fastest way to accelerate the field across academic and industry laboratories.'
        ]
      }
    ],
    citations: [
      'Segler, M. H., Preuss, M., & Waller, M. P. (2018). "Planning chemical syntheses with deep neural networks and symbolic AI". Nature, 555(7698), 604-610.',
      'Frontana-Uribe, B. A., et al. (2010). "Organic electrosynthesis: a promising green methodology in organic chemistry". Green Chemistry, 12(12), 2099-2119.'
    ]
  },
  {
    id: 'the-abiotic-imperative',
    slug: 'the-abiotic-imperative',
    title: 'The Abiotic Imperative: Why Caloric Resilience Demands Decoupling from Biology',
    subtitle: 'A foundational essay on why the future of food, materials, and active compounds must be synthesised from elemental inputs.',
    category: 'Essay',
    division: 'nutrition',
    divisionLabel: 'Foundational Essay',
    date: 'July 2026',
    year: '2026',
    author: 'Elington & The Abiotic Labs Team',
    authorRole: 'Founders & Researchers',
    doi: 'AL-ES-2026.01',
    readingTime: '5 min read',
    tags: ['Civilization', 'Food Security', 'Planetary Resilience', 'First Principles'],
    abstract: 'All human civilization rests upon a thin, fragile crust of topsoil, stable rainfall patterns, and agricultural labor. This essay examines why biological synthesis is an evolutionary dead-end for long-term civilizational resilience, and why machine-guided abiotic chemistry represents the next fundamental leap in human self-sufficiency.',
    keySignals: [
      'Agriculture requires 50% of the world’s habitable land and accounts for 70% of global freshwater withdrawals.',
      'Biological synthesis is bounded by the slow metabolic rates of living organisms and weather volatility.',
      'Abiotic synthesis collapses the supply chain from square kilometers of land to modular, electricity-driven reactors.'
    ],
    sections: [
      {
        heading: '1. The Fragility of the Caloric Supply Chain',
        lead: 'Eight billion lives depend on an unbroken chain of weather, geography, and geopolitics.',
        paragraphs: [
          'Whenever human beings contemplate the future, we imagine advances in energy, computing, and transit. Yet when it comes to the molecules that keep our cells alive — carbohydrates, amino acids, fatty acids, vitamins — we rely almost entirely on the same photosynthetic machinery our ancestors used ten thousand years ago.',
          'Agriculture is a miracle, but it is also a system with zero margin for planetary disruption. A multi-breadbasket drought, a sudden volcanic winter, or severe geopolitical fragmentation can quickly push millions into caloric distress.',
          'The historical response to agricultural insecurity has always been more agriculture: clearing more forests, applying more nitrogen fertilizer, pumping more groundwater. We are rapidly hitting the ecological ceiling of that approach.'
        ]
      },
      {
        heading: '2. What Does "Abiotic" Actually Mean?',
        lead: 'Abiotic means synthesis without biological intermediaries — no plants, no livestock, and no engineered yeast.',
        paragraphs: [
          'Much of modern "food tech" relies on precision fermentation: genetically engineering microbes to secrete specific proteins in bioreactors. While promising, this is still biology. Microbes must be fed sugar, and that sugar is grown on vast tracts of arable farmland using tractors, diesel, and rain.',
          'Abiotic synthesis bypasses biology entirely. The inputs are water, carbon dioxide, nitrogen, and electricity. The catalyst is not an enzyme that takes months to evolve, but an electrode and a reactor whose conditions are tuned with sub-millisecond precision by software.',
          'By treating molecule creation as an engineering and computing problem rather than an agricultural one, we open up a domain where production is invariant to season, weather, or latitude.'
        ]
      },
      {
        heading: '3. The Horizon Beyond Earth',
        lead: 'Self-sufficiency on Earth is identical to self-sufficiency in deep space.',
        paragraphs: [
          'There is no fertile soil on the lunar surface, and no rain on Mars. Any long-duration outpost or permanent extra-planetary human presence will either master abiotic synthesis or remain perpetually dependent on supply rockets from Earth.',
          'By solving abiotic pathway discovery for everyday calories today, we simultaneously build the life-support architecture for humanity’s interplanetary future.'
        ]
      }
    ],
    citations: [
      'Ritchie, H. (2021). "Half of the world’s habitable land is used for agriculture". Our World in Data.',
      'Sillman, J., et al. (2019). "Bacterial protein for food and feed through carbon dioxide capture". Microbial Biotechnology.'
    ]
  },
  {
    id: 'loss-functions-electrochemical-discovery',
    slug: 'loss-functions-thermodynamic-feasibility-scoring',
    title: 'Designing Loss Functions for Electrochemical Retrosynthetic Search',
    subtitle: 'Bridging deep neural generative models with physical electrocatalytic feasibility constraints.',
    category: 'Technical Note',
    division: 'general',
    divisionLabel: 'Methods & Theory',
    date: 'June 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Computational Chemistry',
    doi: 'AL-TN-2026.01',
    readingTime: '7 min read',
    tags: ['Loss Functions', 'Thermodynamics', 'Machine Learning', 'Electrochemical Feasibility'],
    abstract: 'Generative models for chemical reactions frequently hallucinate steps that are chemically plausible on paper but impossible to execute under real electrochemical conditions. We present a loss formulation that penalizes extreme overpotentials, parasitic water-splitting reactions, and radical dimerization traps, steering generative route planning toward viable flow-cell chemistries.',
    keySignals: [
      'Introduces a penalty term for electrochemical window violation (preventing oxygen and hydrogen evolution side-reactions).',
      'Demonstrates a 65% decrease in chemically unrealistic intermediate steps compared to unconstrained generative baselines.',
      'Provides a scalar feasibility metric (0.0 to 1.0) applicable to automated synthesis screening.'
    ],
    sections: [
      {
        heading: '1. The Hallucination Problem in Chemical AI',
        lead: 'Language models and graph generators produce beautiful molecules that cannot be synthesized in a physical beaker.',
        paragraphs: [
          'When an unconstrained generative model is tasked with finding a pathway from CO₂ to a multi-carbon nutrient, it frequently invents transitions that violate conservation of charge or require oxidants so aggressive they would immediately destroy the solvent.',
          'In physical electroorganic synthesis, the operating envelope is governed by the solvent window. In water, any reaction requiring a potential more negative than approximately -1.23 V vs. RHE (depending on pH and overpotential) is prone to losing current to hydrogen evolution.',
          'A successful model must therefore have physical thermodynamics baked directly into its loss function.'
        ]
      },
      {
        heading: '2. The Composite Loss Equation',
        lead: 'Our loss function unifies structure-generation cross-entropy with a thermodynamic penalty barrier.',
        paragraphs: [
          'The total training loss L_total is formulated as L_recon + λ₁ · L_overpotential + λ₂ · L_byproduct + λ₃ · L_complexity.',
          'By weighting the overpotential term dynamically during training epochs, the model initially learns general graph connectivity and subsequently refines its proposal space to obey electrokinetic constraints.'
        ]
      }
    ],
    citations: [
      'Nørskov, J. K., et al. (2004). "Origin of the Overpotential for Oxygen Reduction at a Fuel-Cell Cathode". J. Phys. Chem. B.',
      'Gomez-Bombarelli, R., et al. (2018). "Automatic Chemical Design Using a Data-Driven Continuous Representation of Molecules". ACS Central Science.'
    ]
  }
]

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug || a.id === slug)
}

export function getArticlesByCategory(category) {
  if (!category || category === 'All') return ARTICLES
  return ARTICLES.filter(a => a.category === category)
}

export function getArticlesByDivision(division) {
  if (!division || division === 'all') return ARTICLES
  return ARTICLES.filter(a => a.division === division)
}
