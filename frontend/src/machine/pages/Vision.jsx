const useCases = [
  { n: 'I', title: 'Famine & Humanitarian Crisis', body: 'When agriculture collapses — through drought, conflict, or displacement — the only response available today is logistics. You move food to where people are. Machine synthesis changes the equation: you synthesize nutrition where people are, using local electrical infrastructure.', related: 'UN World Food Programme · ICRC · sovereign emergency stockpiling programs · national food security agencies' },
  { n: 'II', title: 'Climate Disruption', body: 'A large-scale volcanic event, sustained atmospheric disruption, or regional nuclear exchange each have the same agricultural effect: they reduce photosynthetically available light, destroying crop yields globally. Machine synthesis does not depend on sunlight, growing seasons, or soil chemistry.', related: 'Existential risk research · government resilience planning · sovereign wealth funds with food security mandates' },
  { n: 'III', title: 'Populations Beyond Agriculture', body: 'Arid regions, island nations, dense urban centers, and polar settlements all face structural constraints on local food production. A compact synthesis system provides nutritional independence without requiring arable land, stable weather, or agricultural labor.', related: 'Gulf state sovereign investment · Singapore and island-nation food security · urban food security initiatives' },
  { n: 'IV', title: 'Off-Earth Settlement', body: 'Every kilogram of food sent to Mars costs thousands of dollars in launch mass. A synthesis system that produces nutrition from raw electrochemistry is not a luxury for space settlement — it is a precondition for it.', related: 'NASA · ESA · commercial space operators · long-duration mission planning' },
]

export default function Vision() {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Purpose</span>
        <div className="phdr-title">Vision</div>
        <p className="phdr-deck">Why this matters beyond the laboratory.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div className="section-mark">The Long Thesis</div>
        <div className="lead-grid">
          <div>
            <p className="body-text">Nutrition is a solved problem for those with money and stable geography. It is unsolved for everyone else, and catastrophically unsolved for the future scenarios that matter most: displaced populations, climate disruption, and environments where no crop has ever grown.</p>
            <p className="body-text">The solutions that exist — international food aid, emergency rations, supply chain optimization — are all refinements of the same fragile system. They move food from places that have it to places that don't. They do not address the underlying dependency.</p>
            <p className="body-text">If every essential nutrition molecule can be synthesized by a machine using electricity, then nutrition becomes a function of energy access, not agricultural stability. That is a fundamentally different world.</p>
            <p className="body-text">The solar system contains more energy than Earth's agriculture could ever harness. A civilization that can synthesize its own nutrition wherever it goes is a civilization that is no longer constrained to this particular rock. That is the long horizon. We are at the beginning of the path that leads there.</p>
          </div>
          <div className="aside-col">
            <div className="aside-note">This is not about replacing farming. It is about ensuring that humanity is never again held hostage by the conditions under which food can grow.</div>
          </div>
        </div>

        <div className="pullquote">"This is not about replacing farming. It is about ensuring that humanity is never again held hostage by the conditions under which food can grow."</div>

        <div className="section-mark">Where This Technology Matters</div>
        <div>
          {useCases.map((uc) => (
            <div className="uc-item" key={uc.n}>
              <div className="uc-head">
                <span className="uc-n">{uc.n}</span>
                <span className="uc-title">{uc.title}</span>
              </div>
              <div className="uc-grid">
                <p style={{ fontSize: '0.93rem', color: 'var(--ink2)', lineHeight: '1.85' }}>{uc.body}</p>
                <div className="uc-rel">{uc.related}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
