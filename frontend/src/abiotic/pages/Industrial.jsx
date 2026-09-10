import DivisionHome from '../DivisionHome'

export default function Industrial() {
  return (
    <DivisionHome
      label="Abiotic Industrial"
      path="/industrial"
      heroTitle="The Architecture of Bulk Chemistry."
      heroDesc="Scaling the fundamental building blocks of industry with near-zero environmental footprint."
      formulas={['H₂SO₄', 'NH₃', 'NaOH', 'Cl₂', 'Sulfuric Acid · Ammonia · Sodium Hydroxide · Chlorine']}
      problemOpening="Industrial chemistry is the invisible backbone of civilization."
      problemBody="Yet its methods remain rooted in the 20th century: massive heat, high pressure, and significant waste. We are reinventing bulk chemistry using electrochemical pathways that operate at lower temperatures and higher precision."
      methodCol1Title="Process Efficiency"
      methodCol1Desc="Minimizing energy loss in large-scale chemical transformations."
      methodCol2Title="Waste Elimination"
      methodCol2Desc="Designing pathways where every byproduct is a valuable input for another process."
      methodCol3Title="Distributed Scaling"
      methodCol3Desc="Moving from centralized mega-factories to modular, electricity-driven synthesis units."
      roadmapTarget1="Base Acids & Bases"
      roadmapMolecules1="Sulfuric Acid · Sodium Hydroxide · Hydrochloric Acid"
      roadmapTarget2="Nitrogen Fixation"
      roadmapMolecules2="Ammonia · Nitrates · Urea"
      roadmapTarget3="Process Solvents"
      roadmapMolecules3="Acetone · Benzene · Industrial Alcohols"
      quote="Complexity is a solved problem. Scale is the next frontier."
      cite="Abiotic Industrial Manifesto, 2026"
    />
  )
}
