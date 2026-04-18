import DivisionPlaceholder from '../DivisionPlaceholder'

const icon = (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="11" width="16" height="6" rx="3" stroke="#1a6b4a" strokeWidth="1.5"/>
    <line x1="14" y1="11" x2="14" y2="17" stroke="#2d9c6e" strokeWidth="1.2"/>
    <circle cx="14" cy="7"  r="2.5" stroke="#1a6b4a" strokeWidth="1.3"/>
    <circle cx="14" cy="21" r="2.5" stroke="#1a6b4a" strokeWidth="1.3"/>
  </svg>
)

export default function Drugs() {
  return (
    <DivisionPlaceholder
      num="02"
      label="Abiotic Drugs"
      tagline="Pharmaceutical-grade synthesis without biological intermediaries."
      body="The Abiotic Drugs division will apply the same pathway intelligence engine to the synthesis of active pharmaceutical compounds — targeting bioavailability and molecular precision without relying on fermentation, cell cultures, or any biological substrate. Every step in the synthesis chain will be machine-discoverable and physically grounded."
      signals={[
        'Total synthesis of small-molecule APIs via abiotic electrochemical and thermochemical routes',
        'Novel drug candidates unreachable through conventional organic synthesis',
        'Scalable synthesis of existing generics with near-zero biological waste streams',
        'Full pathway audit trail for regulatory submission',
      ]}
      icon={icon}
    />
  )
}
