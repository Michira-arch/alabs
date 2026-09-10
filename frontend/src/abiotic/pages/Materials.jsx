import DivisionHome from '../DivisionHome'

export default function Materials() {
  return (
    <DivisionHome
      label="Abiotic Materials"
      path="/materials"
      heroTitle="The Future of Matter is Abiotic."
      heroDesc="Designer polymers and advanced materials, built from the ground up through guided chemical intelligence."
      formulas={['(C₂H₄)ₙ', '(C₃H₆)ₙ', '(C₁₀H₈O₄)ₙ', 'Polyethylene · Polypropylene · PET · Graphene']}
      problemOpening="We are reaching the limits of natural and traditional materials."
      problemBody="Conventional material science often relies on what nature provides or what traditional petroleum-based chemistry can yield. We are bypassing these constraints, using machine intelligence to design and execute pathways to materials with properties tuned at the molecular level."
      methodCol1Title="Structural Design"
      methodCol1Desc="Designing molecular architectures for specific physical properties: strength, conductivity, elasticity."
      methodCol2Title="Pathway Intelligence"
      methodCol2Desc="Finding the most energy-efficient route to assemble these structures from simple precursors."
      methodCol3Title="Material Purity"
      methodCol3Desc="Removing the inconsistencies of natural sourcing in favor of machine-precise synthesis."
      roadmapTarget1="Commodity Polymers"
      roadmapMolecules1="Polyethylene · Polypropylene · PVC"
      roadmapTarget2="Technical Textiles"
      roadmapMolecules2="Nylon 6,6 · Aramid fibers · Polyesters"
      roadmapTarget3="Advanced Carbon"
      roadmapMolecules3="Carbon nanotubes · Graphene · Synthetic Diamond"
      quote="The next era of human progress will be defined by the materials we can summon."
      cite="Abiotic Materials Roadmap, 2026"
    />
  )
}
