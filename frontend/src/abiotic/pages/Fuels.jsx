import DivisionHome from '../DivisionHome'

export default function Fuels() {
  return (
    <DivisionHome
      label="Abiotic Fuels"
      path="/fuels"
      heroTitle="Energy Density, Synthesized from Air and Light."
      heroDesc="Carbon-neutral hydrocarbons and hydrogen carriers, built without geological time."
      formulas={['H₂', 'CH₄', 'CH₃OH', 'C₈H₁₈', 'Hydrogen · Methane · Methanol · Octane']}
      problemOpening="The fossil fuel era is a debt to geological history that we can no longer afford."
      problemBody="We need high-density energy carriers for aviation, shipping, and long-term storage. Abiotic Fuels uses renewable electricity to drive the synthesis of these carriers from captured CO₂ and water, closing the carbon loop."
      methodCol1Title="Energy Coupling"
      methodCol1Desc="Efficiently coupling electrical energy into chemical bonds."
      methodCol2Title="Carbon Capture"
      methodCol2Desc="Sourcing carbon directly from the atmosphere or industrial waste streams."
      methodCol3Title="Fuel Versatility"
      methodCol3Desc="Synthesizing everything from simple hydrogen to complex liquid hydrocarbons."
      roadmapTarget1="Hydrogen Carriers"
      roadmapMolecules1="Liquid H₂ · Ammonia · LOHC"
      roadmapTarget2="Synthetic Gas"
      roadmapMolecules2="Methane · Ethane · Propane"
      roadmapTarget3="Liquid Fuels"
      roadmapMolecules3="Methanol · Sustainable Aviation Fuel (SAF) · Octane"
      quote="We are not running out of energy; we are running out of easy ways to carry it."
      cite="Abiotic Fuels Thesis, 2026"
    />
  )
}
