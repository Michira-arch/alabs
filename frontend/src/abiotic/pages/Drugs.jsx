import DivisionHome from '../DivisionHome'

export default function Drugs() {
  return (
    <DivisionHome
      label="Abiotic Drugs"
      path="/drugs"
      heroTitle="Synthesizing Every Essential Medicine — Abiotically."
      heroDesc="We discover machineable pathways to pharmaceutical compounds, removing the biological bottleneck from drug production."
      formulas={['C₈H₉NO₂', 'C₉H₈O₄', 'C₁₆H₁₉N₃O₄S', 'C₂₂H₃₀N₆O₄S', 'Paracetamol · Aspirin · Amoxicillin · Sildenafil']}
      problemOpening="Global health depends on a fragile, biology-based supply chain."
      problemBody="Most essential drugs are either extracted from nature or synthesized through complex biological intermediaries. This makes production slow, expensive, and vulnerable to environmental or systemic collapse. Abiotic synthesis offers a way to build these molecules from base elements, anywhere."
      methodCol1Title="Molecule Discovery"
      methodCol1Desc="Our engine scans the chemical space for the most efficient paths to known APIs."
      methodCol2Title="Direct Synthesis"
      methodCol2Desc="Avoiding fermentation and cell cultures in favor of pure chemical and electrochemical steps."
      methodCol3Title="Total Control"
      methodCol3Desc="Every atom is accounted for, ensuring pharmaceutical purity without biological contaminants."
      roadmapTarget1="Simple APIs"
      roadmapMolecules1="Paracetamol · Aspirin · Ibuprofen"
      roadmapTarget2="Antibiotics"
      roadmapMolecules2="Amoxicillin · Ciprofloxacin · Penicillin V"
      roadmapTarget3="Complex Organics"
      roadmapMolecules3="Statins · Antivirals · Targeted Oncology"
      quote="Medicine should not be a harvest; it should be a manufacture."
      cite="Abiotic Drugs Thesis, 2026"
    />
  )
}
