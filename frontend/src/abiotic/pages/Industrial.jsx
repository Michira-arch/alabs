import DivisionPlaceholder from '../DivisionPlaceholder'

const icon = (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4"  y="16" width="6" height="8" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
    <rect x="11" y="10" width="6" height="14" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
    <rect x="18" y="4"  width="6" height="20" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
    <line x1="4" y1="24" x2="24" y2="24" stroke="#2d9c6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

export default function Industrial() {
  return (
    <DivisionPlaceholder
      num="05"
      label="Abiotic Industrial"
      tagline="Bulk chemistry reimagined from the molecule up."
      body="Abiotic Industrial will target high-volume commodity chemicals — acids, bases, solvents, and process intermediates — that currently depend on energy-intensive, fossil-routed production. By applying pathway intelligence at scale, we aim to discover abiotic synthesis routes that are cleaner, more adaptable, and closer to the point of use than current industrial processes."
      signals={[
        'Abiotic synthesis of bulk acids and bases (H₂SO₄, HCl, NaOH) from abundant feedstocks',
        'Green solvents and process intermediates with lower environmental load',
        'Decentralised production models — synthesis where the chemicals are needed',
        'Pathway cost modelling integrated with energy and feedstock pricing',
      ]}
      icon={icon}
    />
  )
}
