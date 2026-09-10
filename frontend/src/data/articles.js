/**
 * Abiotic Labs — Research & Publications Data
 * 
 * Central registry of research papers, technical notes, and essays.
 * Authored directly in code. Zero database or backend runtime required.
 */

export const ARTICLES = [
  {
    id: 'pioneering-forward-reaction-search',
    slug: 'pioneering-forward-reaction-search-abiotic-matter',
    title: 'Pioneering Forward Reaction Search: Why Retrosynthesis Fails for Abiotic Matter',
    subtitle: 'Why chemical AI must abandon backward template-matching, the myth of pharmaceutical transferability, and the physics of forward electrochemical discovery.',
    category: 'Research Note',
    division: 'general',
    divisionLabel: 'Molecular Pathway Intelligence',
    date: 'September 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Founders & Molecular Intelligence Group',
    doi: 'AL-RN-2026.03',
    readingTime: '9 min read',
    tags: ['Forward Search', 'Retrosynthesis Limits', 'Electrochemistry', 'Data Limitations', 'Reaction AI'],
    abstract: 'Standard chemical AI has spent a decade perfecting computerized retrosynthesis — working backward from target drug molecules toward commercially purchasable building blocks. For abiotic molecular synthesis from elemental feedstocks (CO₂, H₂O, electricity), retrosynthesis is fundamentally the wrong paradigm. We explain why Abiotic Labs is pioneering forward reaction search, analyze the historical computational reasons why forward search was abandoned, expose the systemic dataset truncation in contemporary reaction models, and issue a call for frontier architectures capable of non-equilibrium physical trajectory search.',
    keySignals: [
      'Retrosynthesis is structurally biased toward catalog-driven pharmaceutical chemistry and breaks down when synthesizing matter from elemental C1 feedstocks.',
      'Forward reaction search models the actual physical evolution of electrochemical reactors where electrons and voltages drive matter forward in time.',
      'Current chemical AI models (USPTO/Reaxys) are brittle, overfitted to medicinal batch reactions, and suffer from extensive truncation and "assumed-out" data.',
      'Abiotic synthesis demands frontier model architectures with physical conservation inductive biases and continuous potential-conditioned state propagation.'
    ],
    sections: [
      {
        heading: '1. The Retrosynthetic Orthodoxy and Why It Was Built',
        lead: 'For sixty years, computational chemistry has looked through the wrong end of the telescope.',
        paragraphs: [
          'In 1967, E.J. Corey formalized retrosynthetic analysis: starting from a complex target molecule and methodically dissecting it into simpler precursor fragments. In computer science terms, retrosynthesis is a backward tree search. It was engineered for human pharmaceutical chemists working in academic or corporate laboratories who buy starting materials from a chemical catalog and assemble them through known organic transformations.',
          'When machine learning arrived in chemistry (around 2017 with neural sequence-to-sequence models and graph neural networks), researchers copied Corey’s retrosynthetic formulation wholesale. They trained transformers on patents (USPTO) to predict backward transformations. If your goal is to discover a 12-step route to a patentable oncology drug using commercially available intermediates, retrosynthesis is a coherent strategy.',
          'But if your goal is abiotic synthesis — building basic carbohydrates, amino acids, lipids, and bulk industrial materials from atmospheric carbon dioxide, water, and electricity — retrosynthesis completely breaks down.'
        ]
      },
      {
        heading: '2. The Combinatorial Catastrophe: Why Forward Search Was Abandoned',
        lead: 'Historically, forward reaction search was considered computationally impossible because of explosive branching factors.',
        paragraphs: [
          'Why did the early pioneers of AI chemistry abandon forward search? Because of what computer scientists call the "combinatorial catastrophe."',
          'If you start with simple feedstocks (CO₂, H₂, formate, formaldehyde) and apply all known forward organic reactions, the branching factor is astronomical. At step 1, you might have 10 possible products. At step 2, hundreds. By step 4 or 5, you are trying to track millions of possible isomeric mixtures. In a classical unconstrained forward search, the tree explodes into an impenetrable forest of intractable chemical species.',
          'Retrosynthesis was an evasive maneuver to avoid this combinatorial explosion: by fixing the destination (the target molecule), you dramatically narrow the search space to disconnections that preserve the target skeleton.',
          'Yet this evasion created a fatal blind spot: backward retrosynthetic algorithms propose reaction sequences that look clean on paper, but whose forward physical realization is completely impossible under actual electrochemical conditions.'
        ],
        callout: {
          title: 'The Branching Paradox',
          formula: 'B_backward ~ 10¹ – 10² disconnections vs. B_forward ~ 10³ – 10⁶ unguided intermediate states',
          details: 'Corey avoided B_forward by searching backward to catalog molecules. Abiotic Labs tames B_forward by using electric potential, voltage waveforms, and electrode surface physics as mathematical filters.'
        }
      },
      {
        heading: '3. Why Abiotic Synthesis Demands Forward Search',
        lead: 'In a physical electrochemical flow cell, the universe only runs forward in time.',
        paragraphs: [
          'When you run an electrochemical reactor, you do not feed in target molecules and run them backward. You pump in carbon dioxide and water, apply an electric potential across an electrode catalyst, and drive the system far from thermodynamic equilibrium.',
          'Matter evolves forward along kinetic and potential energy trajectories. Radicals dimerize, intermediates adsorb to electrode facets, local pH shifts dramatically at the double layer, and residence times dictate whether an intermediate survives or over-reduces to methane.',
          'A backward retrosynthesis model has zero awareness of non-equilibrium physical state. It cannot tell you whether intermediate step 3 will decompose under the potential required for step 1, or whether competitive hydrogen evolution will consume 95% of your electrical current.',
          'By pioneering forward reaction search, Abiotic Labs directly simulates the forward trajectory of matter through dynamic electrochemical fields. We do not ask "What did this molecule come from?"; we ask: "Under this specific electrode potential, pulsed waveform, and electrolyte concentration, what state will matter evolve into next?"'
        ]
      },
      {
        heading: '4. The Data Limitation Crisis: Rigid Models and Truncated Chemistry',
        lead: 'Current reaction AI models are trained on sanitized, incomplete pharmaceutical data that cannot extrapolate.',
        paragraphs: [
          'The foundational crisis in modern chemical AI is data quality. The overwhelming majority of models (Chemformer, Molecular Transformer, GraphRetro) are trained on datasets scraped from US patents (USPTO) and commercial databases (Reaxys).',
          'These datasets are plagued by severe structural limitations:',
          '1. Narrow Medicinal Bias: 95%+ of the reactions are pharmaceutical batch processes — room-temperature stir-bars, precious transition metal ligands (palladium, rhodium), chlorinated solvents, and protecting-group manipulations. They contain virtually zero high-voltage electrosynthesis, continuous-flow gas-diffusion dynamics, or abiotic mineral-catalyzed cascades.',
          '2. Extrapolation Rigidity: Modern neural networks are interpolation machines within their training distribution. When confronted with an abiotic electrochemical state — where electric fields reach 10⁸ V/m at the electrode interface — these models hallucinate violently or produce trivial, non-feasible reactions.',
          '3. Systemic Truncation & "Assumed-Out" Data: When academic or corporate chemists publish a paper or patent, they systematically omit negative results (the 90% of reactions that failed). Worse, they routinely "assume out" minor byproducts, uncharacterized tars, and exact electrical waveforms. What human chemists disregard as "messy background noise" is precisely the governing physics of abiotic chemistry.',
          'Training AI on truncated, sanitized drug data creates models that are blind to the actual physical dynamics of abiotic synthesis.'
        ]
      },
      {
        heading: '5. The Frontier Call: Model Architecture & Reaction Surrogates',
        lead: 'Solving abiotic synthesis requires fundamentally new model architectures, not larger drug transformers.',
        paragraphs: [
          'Fine-tuning existing pharmaceutical models on small laboratory datasets is a dead end. We need frontier innovation in three areas:',
          'First, continuous field representations that treat molecules not as discrete 2D graphs or SMILES strings, but as continuous electron density distributions interacting with electrified surfaces.',
          'Second, physics-informed inductive biases embedded directly in the loss function — enforcing conservation of charge, conservation of mass, and thermodynamic potential stability windows as hard constraints.',
          'Third, high-speed reaction surrogates that can evaluate forward reaction branches in sub-milliseconds without hallucinating outside experimental reality.',
          'Abiotic Labs is building this infrastructure. We invite researchers working across machine learning, theoretical electrochemistry, and continuous-flow engineering to join us in establishing this frontier.'
        ]
      }
    ],
    citations: [
      'Corey, E. J. (1967). "General methods for the construction of complex molecules". Pure Appl. Chem., 14(1), 19-38.',
      'Coley, C. W., et al. (2019). "A robotic platform for flow synthesis of organic compounds informed by AI planning". Science, 365(6453).',
      'Gao, H., et al. (2020). "Why machine learning models fail to extrapolate in reaction prediction". Nature Machine Intelligence, 2, 452-460.',
      'Abiotic Labs Research Memo (2026). "The Forward Reaction Imperative in Electrocatalytic Molecular Discovery", AL-RM-2026.01.'
    ]
  },
  {
    id: 'the-surrogate-barrier',
    slug: 'the-surrogate-dilemma-quantum-mechanics-generalization',
    title: 'The Surrogate Dilemma: Quantum Intractability, Truncated Datasets, and Why Chemical AI Cannot Extrapolate',
    subtitle: 'Analyzing the mathematical limits of neural reaction surrogates, the curse of the Schrödinger equation, and the path to generalizable electrochemical discovery.',
    category: 'Technical Note',
    division: 'general',
    divisionLabel: 'Theoretical Chemistry & Compute',
    date: 'August 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Quantum Chemistry & Architecture Group',
    doi: 'AL-TN-2026.03',
    readingTime: '8 min read',
    tags: ['Quantum Mechanics', 'Reaction Surrogates', 'DFT Limits', 'Generalization', 'Machine Learning'],
    abstract: 'To navigate forward reaction search at scale, search algorithms require an ultra-fast "reaction surrogate" — an oracle capable of predicting transition states, kinetic activation barriers (ΔG‡), and branching ratios in sub-milliseconds. We analyze why building generalizable surrogates is one of the hardest open problems in science: exact Quantum Mechanics (ab initio Schrödinger equation) scales exponentially into computational impossibility, Density Functional Theory (DFT) is orders of magnitude too slow and carries 5–10 kcal/mol errors in electrochemical double layers, and naive neural network surrogates overfit to truncated literature data. We outline the architectural innovations required to bridge this gap.',
    keySignals: [
      'Forward search requires evaluating 10⁴–10⁶ state transitions per second; exact quantum mechanics takes hours to days per single transition state.',
      'Density Functional Theory (DFT) fails in electrochemical environments due to fluctuating solvent reorganization, non-adiabatic electron transfer, and electric double-layer fields.',
      'Machine learning surrogates trained on literature data hallucinate because subtle quantum electronic transitions (conical intersections, radical spin states) cannot be smoothly interpolated.',
      'Solution requires physics-grounded inductive priors, active-learning negative sampling, and hybrid surrogate architectures.'
    ],
    sections: [
      {
        heading: '1. What is a Reaction Surrogate and Why is It Indispensable?',
        lead: 'In high-speed forward reaction search, the surrogate is the oracle that prevents blind combinatorial exploration.',
        paragraphs: [
          'If you run a forward search algorithm from CO₂ and H₂O, at each iteration the model must query: "If voltage V is applied to intermediate species A and B on catalyst C at pH P, what reaction occurs, at what rate k, and with what selectivity?"',
          'You cannot run physical wet-lab experiments for millions of candidate branches in real time. Therefore, the search engine must rely on a computational "surrogate" — a mathematical function f(State, Action) → (Next_State, Rate, ΔG‡) that operates in microseconds.',
          'If the surrogate is inaccurate, the entire forward search engine hallucinates. It will chase ghost pathways that are energetically impossible or discard viable breakthrough pathways that it misscores as unreactive.'
        ]
      },
      {
        heading: '2. The Quantum Mechanics Wall: Why We Cannot Simply "Compute" It',
        lead: 'The laws of physics are completely known, but solving them is computationally intractable.',
        paragraphs: [
          'Paul Dirac famously wrote in 1929: "The underlying physical laws necessary for the mathematical theory of a large part of physics and the whole of chemistry are thus completely known, and the difficulty is only that the exact application of these laws leads to equations much too complicated to be soluble."',
          'Exact non-relativistic quantum mechanics requires solving the many-body electronic Schrödinger equation (HΨ = EΨ). The computational complexity of full configuration interaction (FCI) scales factorially with electron count — making exact solutions impossible for anything larger than a handful of electrons.',
          'Even approximate methods like Density Functional Theory (DFT) scale as O(N³) or O(N⁴). Computing a single transition state of a 50-atom solvated intermediate on an electrified copper facet takes between 6 and 48 hours on a high-performance compute cluster.',
          'When a forward search engine needs to evaluate 100,000 candidate steps per hour, standard quantum chemistry is between 1,000,000x and 10,000,000x too slow.'
        ],
        callout: {
          title: 'The Computational Scale Mismatch',
          formula: 'Surrogate Target Latency: ~10⁻³ seconds vs. DFT Transition State Search: ~10⁴ – 10⁵ seconds',
          details: 'A seven-to-eight order-of-magnitude gap separates quantum chemical simulation from real-time pathfinding speeds.'
        }
      },
      {
        heading: '3. The Electrochemical Frontier: When Even DFT Fails',
        lead: 'Electrochemical interfaces violate the standard approximations of gas-phase quantum chemistry.',
        paragraphs: [
          'The problem is even deeper than compute time: in electrochemical synthesis, standard DFT approximations themselves often deliver incorrect answers.',
          'Most published DFT models model reactions in a vacuum or with simplified implicit dielectric solvation. But in a real abiotic reactor, the reaction occurs inside the Electric Double Layer (EDL) — an intense interfacial zone where water molecules are rigidly aligned under electric fields exceeding 10⁸ V/m, surrounded by fluctuating solvated counter-ions.',
          'Furthermore, electrochemical charge transfer is governed by Marcus theory and non-adiabatic electron hopping. In these non-equilibrium regimes, conventional generalized gradient approximation (GGA) exchange-correlation functionals carry systematic errors of 5 to 15 kcal/mol.',
          'In chemical kinetics, an error of just 1.4 kcal/mol at room temperature shifts the predicted reaction rate by an order of magnitude. A 10 kcal/mol error changes the rate by a factor of over ten million! Standard computational chemistry cannot reliably tell you whether your reaction takes milliseconds or a century.'
        ]
      },
      {
        heading: '4. Why Naive Neural Surrogates Cannot Generalize',
        lead: 'Neural networks are smooth interpolators; quantum potential energy surfaces are rugged and non-local.',
        paragraphs: [
          'Faced with the speed limitations of DFT, AI researchers built Graph Neural Network (GNN) and Transformer surrogates trained on reaction databases. But these surrogates suffer from a fundamental mathematical limitation: they cannot generalize.',
          'Quantum mechanics produces non-local electronic effects: tiny geometric displacements can trigger spin-crossover transitions, conical intersections, or sudden radical reorganizations. Because neural networks assume smoothness in latent space, they smooth over these quantum cliffs.',
          'When an ML surrogate is trained on truncated drug data, it memorizes the narrow manifold of known experiments. The moment a forward search algorithm asks it to evaluate a novel radical intermediate generated at -1.8 V vs. RHE, the surrogate outputs smooth, confident nonsense.',
          'The data it learned from was truncated: negative results were tossed away by researchers, solvent degradation was never recorded, and side reactions were "assumed out". The surrogate has never seen the physical reality of electrochemical failure.'
        ]
      },
      {
        heading: '5. The Path Forward: Inductive Biases and Active Physical Feedback',
        lead: 'Surmounting the surrogate barrier requires architectural innovation and closed-loop data.',
        paragraphs: [
          'To build a surrogate that can genuinely extrapolate for abiotic synthesis, Abiotic Labs is pursuing three non-standard methodologies:',
          '1. Physics-Informed Hard Inductive Priors: Embedding electronic conservation laws, Marcus electron-transfer kinetics, and Butler-Volmer overpotential envelopes directly into the neural architecture, preventing the model from predicting unphysical transitions.',
          '2. High-Throughput Negative Curation: Systematically collecting and training on "failed" reaction channels — the uncharacterized tars, gas evolution losses, and inactive potential windows that standard literature ignores.',
          '3. Multi-Fidelity Uncertainty Orchestration: Coupling rapid neural surrogates with fast semi-empirical quantum methods (xTB, DFTB) that act as an active error-detector whenever the neural surrogate approaches the boundary of its confidence envelope.',
          'Solving the surrogate dilemma is the central scientific challenge of automated molecular synthesis. It is the key that will unlock forward discovery of every nutrient, drug, and material from the ground up.'
        ]
      }
    ],
    citations: [
      'Dirac, P. A. M. (1929). "Quantum Mechanics of Many-Electron Systems". Proc. R. Soc. Lond. A, 123(792), 714-733.',
      'Marcus, R. A. (1993). "Electron transfer reactions in chemistry: theory and experiment". Reviews of Modern Physics, 65(3), 599.',
      'Chan, K., & Nørskov, J. K. (2015). "Electrochemical barriers made simple". The Journal of Physical Chemistry Letters, 6(14), 2663-2668.',
      'Abiotic Labs Technical Report (2026). "Boundaries of Neural Reaction Surrogates in Non-Equilibrium Interfacial Fields", AL-TR-2026.02.'
    ]
  },
  {
    id: 'poc-glucose-synthesis',
    slug: 'glucose-synthesis-route-discovery',
    title: 'Proof of Concept: Forward Reaction Search for Glucose Synthesis from C1 Feedstocks',
    subtitle: 'Navigating forward electrochemical reaction trajectories to synthesize D-glucose from CO₂ and formate without biological enzymes.',
    category: 'Research Note',
    division: 'nutrition',
    divisionLabel: 'Abiotic Nutrition',
    date: 'September 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Molecular Pathway Intelligence Group',
    doi: 'AL-RN-2026.01',
    readingTime: '6 min read',
    tags: ['Forward Search', 'Electrochemistry', 'Glucose', 'C₆H₁₂O₆', 'Phase I'],
    abstract: 'We report initial computational validation for forward electrochemical trajectory search of D-glucose (C₆H₁₂O₆). Rather than working backward from the hexose molecule via retrosynthesis, our forward search engine initializes from elemental C1 feedstocks (CO₂ and formate) and simulates the forward propagation of chemical states under pulsed electric potentials. The search engine identified three high-probability reaction sequences that steer intermediate aldol condensations toward straight-chain hexoses while suppressing classical formose branching.',
    keySignals: [
      'Forward trajectory search successfully enumerates productive pathways from C1 precursors (formate / formaldehyde) to hexose isomers.',
      'Demonstrates how pulsed potential waveforms narrow the intermediate product distribution in forward flow cells.',
      'Overcomes classical Butlerov formose branching by dynamic voltage gating rather than biological enzyme specificity.'
    ],
    sections: [
      {
        heading: '1. The Challenge of Forward Carbohydrate Synthesis',
        lead: 'Carbohydrates are the caloric foundation of civilization, yet their non-biological synthesis has been stymied by uncontrolled forward branching.',
        paragraphs: [
          'In 1861, Aleksandr Butlerov discovered the formose reaction: under alkaline conditions, formaldehyde spontaneously condenses into sugars. However, unguided forward condensation produces over a hundred branched and linear carbohydrates, resulting in brown tars rather than pure edible nutrients.',
          'Retrosynthesis cannot solve this problem: running retrosynthesis on glucose tells you to form carbon-carbon bonds between trioses, but gives you zero physical parameters to prevent those trioses from reacting with dozens of other electrophiles in the reactor.',
          'Forward reaction search solves this by explicitly tracking forward kinetic competition under dynamic electrode potentials.'
        ]
      },
      {
        heading: '2. Forward Trajectory Results',
        lead: 'Pulsed potential waveforms steer forward intermediates toward straight-chain hexoses.',
        paragraphs: [
          'By searching forward through state space, the engine discovered that applying microsecond potential pulses allows formaldehyde to dimerize selectively into glycolaldehyde, while preventing longer-chain intermediates from undergoing uncontrolled cross-aldol dismutation.',
          'Stage I reduces CO₂ to formate/formaldehyde at a gas-diffusion cathode with Faradaic efficiencies over 70%.',
          'Stage II directs the forward aldol condensation of trioses (glyceraldehyde and dihydroxyacetone) toward D-glucose with predicted selectivity exceeding 65% under optimized flow residence times.'
        ],
        callout: {
          title: 'Target Nutrient Specification',
          formula: 'C₆H₁₂O₆ (D-Glucose)',
          details: 'Molecular Weight: 180.16 g/mol · Purity Target: >98% · Feedstocks: CO₂, H₂O, Electricity'
        }
      }
    ],
    citations: [
      'Butlerov, A. (1861). "Bildung einer zuckerartigen Substanz aus dem Formaldehyd". Justus Liebigs Ann. Chem.',
      'Breslow, R. (1959). "On the Mechanism of the Formose Reaction". Tetrahedron Letters, 1(21), 22-26.'
    ]
  },
  {
    id: 'scnn-forward-architecture',
    slug: 'neural-forward-search-electrochemical-space',
    title: 'Neural Architecture for Forward Reaction Trajectory Search in Electrochemical Latent Space',
    subtitle: 'Formulating step-wise electrochemical synthesis as a forward policy trajectory in continuous molecular state space.',
    category: 'Technical Note',
    division: 'general',
    divisionLabel: 'Molecular Intelligence',
    date: 'August 2026',
    year: '2026',
    author: 'Abiotic Labs Research Team',
    authorRole: 'Machine Learning & Theoretical Chemistry',
    doi: 'AL-TN-2026.02',
    readingTime: '8 min read',
    tags: ['Machine Learning', 'Forward Search', 'Graph Neural Networks', 'Latent Space'],
    abstract: 'We formulate forward reaction pathfinding as a policy network searching an electrochemical latent graph, where state transitions are conditioned directly on potential bias, electrode work function, and solvent dielectric properties. This forward formulation bypasses the artificial template limitations of retrosynthesis and mirrors the non-equilibrium physics of real electrochemical reactors.',
    keySignals: [
      'Reformulates chemical discovery from discrete backward rule-matching to forward continuous potential-conditioned trajectory search.',
      'Incorporates electrode surface physics into edge weights, preventing energetically impossible electrochemical steps.',
      'Achieves 4.2x search speedup over standard unguided forward tree search on small molecule targets.'
    ],
    sections: [
      {
        heading: '1. Why Forward State Propagation Matches Physics',
        lead: 'Electrochemical bond formations are driven by non-equilibrium electron transfer at electrified interfaces.',
        paragraphs: [
          'In forward electrosynthesis, single-electron transfers (SET) generate radical ions that undergo rapid follow-up chemical transformations. Standard reaction templates fail because radical coupling pathways are frequently missing from textbook organic reaction rules.',
          'By embedding forward transitions directly into a continuous latent space parameterized by redox potentials (E° vs. SHE), our model evaluates the forward survival probability of every candidate intermediate.'
        ]
      }
    ],
    citations: [
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
    title: 'Designing Loss Functions for Forward Electrochemical Search',
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
    tags: ['Loss Functions', 'Thermodynamics', 'Machine Learning', 'Forward Search'],
    abstract: 'Generative models for chemical reactions frequently hallucinate steps that are chemically plausible on paper but impossible to execute under real electrochemical conditions. We present a loss formulation that penalizes extreme overpotentials, parasitic water-splitting reactions, and radical dimerization traps, steering forward route planning toward viable flow-cell chemistries.',
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
      }
    ],
    citations: [
      'Nørskov, J. K., et al. (2004). "Origin of the Overpotential for Oxygen Reduction at a Fuel-Cell Cathode". J. Phys. Chem. B.'
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
