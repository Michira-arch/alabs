export default function Technology() {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Platform</span>
        <div className="phdr-title">The Discovery Engine</div>
        <p className="phdr-deck">A machine for discovering industrially viable routes to nutritional molecules through electrically-driven synthesis.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div className="section-mark">How It Works</div>
        <p className="opening" style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', maxWidth: '28ch', marginBottom: '3rem' }}>
          The engine takes a target nutrition molecule, then searches chemical space for viable synthesis pathways.
        </p>
        <div>
          {[
            { n: '1', title: 'Molecule Targeting', body: 'The system begins with a target nutrition molecule and its structural representation. Molecular graphs are the primary working format, preserving bond topology, stereochemistry, and functional group context for the neural network.', note: 'Inputs: molecular structures (SELFIES / graph).' },
            { n: '2', title: 'Retrosynthetic Search', body: 'A neural network performs retrosynthesis; working backward from the target to identify plausible precursor molecules and reaction steps, primarily working in latent space.', note: 'Architecture: Multi-head Self Convolution base model' },
            { n: '3', title: 'Scoring', body: 'All suggested paths are evaluated for physics compliance, and chemical plausibility.', note: 'Constraints: chemical feasibility · thermodynamic plausibility · machineability' },
            { n: '4', title: 'Output', body: 'High scoring suggestions are presented and comprehensively tested in simulation, with the ones that pass being evaluated physically for the final proof', note: 'Output: working pathways · feasibility score breakdown · precursor availability assessment · Energy efficiency metrics' },
          ].map((step) => (
            <div className="tech-step" key={step.n}>
              <div className="ts-n">{step.n}</div>
              <div>
                <div className="ts-head">{step.title}</div>
                <p className="ts-body">{step.body}</p>
                <div className="ts-note">{step.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">The Constraint</div>
        <div className="lead-grid">
          <div>
            <p className="opening">Why electricity only.</p>
            <p className="body-text">An electricity-only process can be deployed wherever power exists: a solar farm in the Sahel, a nuclear plant adjacent to a conflict zone, a compact reactor aboard a deep-space vessel.</p>
            <p className="body-text">Electrical processes are industrially scalable in ways that biotic processes are not.</p>
          </div>
        </div>

        <div className="section-mark">Intellectual Honesty</div>
        <p className="body-text" style={{ maxWidth: '60ch', marginBottom: '2.5rem' }}>We state clearly what is unsolved. These are the questions on which the engine must prove itself.</p>
        <div>
          {[
            'Whether electrochemical yield for complex molecules can reach industrially viable thresholds without biological co-catalysts. This is the central open question in electroorganic synthesis, the one on which our discovery engine must eventually provide evidence.',
            'The degree to which model-discovered routes generalize beyond the training distribution of known reactions. Out-of-distribution generalization in retrosynthesis is an active area of ML research, and the engine\'s value depends on it.',
            'The optimal architecture for combining retrosynthetic search with electrochemical constraint scoring at scale. The Phase I proof of concept will inform which approach performs best in this specific problem domain.',
          ].map((q, i) => (
            <div className="oq-item" key={i}>
              <div className="oq-mark"></div>
              <p>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
