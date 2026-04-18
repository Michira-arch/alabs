import DivisionPlaceholder from '../DivisionPlaceholder'

const icon = (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,4 24,10 24,18 14,24 4,18 4,10" stroke="#1a6b4a" strokeWidth="1.5" fill="none"/>
    <polygon points="14,9 19,12 19,17 14,20 9,17 9,12" stroke="#2d9c6e" strokeWidth="1" fill="none" opacity="0.5"/>
    <circle cx="14" cy="14" r="2" fill="#1a6b4a"/>
  </svg>
)

export default function Materials() {
  return (
    <DivisionPlaceholder
      num="03"
      label="Abiotic Materials"
      tagline="Designer compounds with properties that nature never arrived at."
      body="Abiotic Materials will use pathway intelligence to design and synthesise novel polymers, structural compounds, and functional materials. Rather than extracting or mimicking materials from biological systems, we will build them from first principles — choosing properties first, then discovering the shortest abiotic route to get there."
      signals={[
        'High-strength structural polymers synthesised without petroleum-derived feedstocks',
        'Functional coatings and membranes designed for specific permeability or conductance targets',
        'Biodegradable or recyclable alternatives to existing synthetic materials',
        'Materials with properties outside the biological design space — extreme temperatures, pressures, pH',
      ]}
      icon={icon}
    />
  )
}
