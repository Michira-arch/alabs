import DivisionPlaceholder from '../DivisionPlaceholder'

const icon = (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 24 C10 20 6 16 8 11 C9 8 12 6 14 8 C16 6 19 8 20 11 C22 16 18 20 14 24Z" stroke="#1a6b4a" strokeWidth="1.5" fill="none"/>
    <path d="M14 20 C12 17 11 14 13 12" stroke="#2d9c6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
  </svg>
)

export default function Fuels() {
  return (
    <DivisionPlaceholder
      num="04"
      label="Abiotic Fuels"
      tagline="High-density energy carriers built without geological time."
      body="The Abiotic Fuels division will discover and validate synthesis pathways for energy-dense compounds — from clean hydrogen carriers to drop-in synthetic hydrocarbons — using abiotic chemistry. The goal is to remove the biological and geological bottleneck from fuel production entirely, replacing it with a machine-tunable process that can be scaled and localised."
      signals={[
        'Ammonia and liquid organic hydrogen carriers (LOHCs) via abiotic nitrogen fixation',
        'Synthetic methane and higher hydrocarbons from CO₂ and renewable electricity',
        'Drop-in fuel blends compatible with existing infrastructure',
        'Process pathway optimisation for energy efficiency, not just yield',
      ]}
      icon={icon}
    />
  )
}
