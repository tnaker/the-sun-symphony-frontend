// components/instrument-gallery.tsx
// -----------------------------------------------------------------------------
// "Gear & Setup" section. Strict, uniform CSS grid (3/4 cols) of InstrumentCards
// with thin borders. Dummy data lives here.
// -----------------------------------------------------------------------------
import { InstrumentCard, type Instrument } from './instrument-card'

const INSTRUMENTS: Instrument[] = [
  {
    name: 'Fender Jazz Bass',
    category: 'Nhạc Cụ',
    description: 'Cây J-Bass màu sunburst — nền tảng âm trầm cho mọi tiết mục.',
    image: '/images/fender-jazz-bass.png',
  },
  {
    name: 'Dynamic Vocal Mics',
    category: 'Vocal',
    description: 'Micro dynamic đã tôi luyện qua sân khấu, cho giọng hát mộc và sống động.',
    image: '/images/vocal-mics.png',
  },
  {
    name: 'Live Bass & Backing Vocal Setup',
    category: 'Dàn Thiết Bị',
    description: 'Trọn bộ rig sân khấu — ampli, pedalboard và micro gói gọn một chỗ.',
    image: '/images/bass-vocal-setup.png',
  },
  {
    name: 'Stage Monitors',
    category: 'Loa Kiểm Âm',
    description: 'Loa monitor sàn được căn chỉnh để mọi nốt nhạc đều vang rõ.',
    image: '/images/stage-monitors.png',
  },
]

export function InstrumentGallery() {
  return (
    <section id="gear" className="border-t border-border px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Nhạc Cụ &amp; Thiết Bị
            </span>
            <h2 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl">
              Không Gian Sân Khấu
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Mỗi thiết bị đều được tinh tuyển cho những đêm diễn live. Không qua
            kỹ xảo phòng thu, chỉ có chất âm chân thực nhất.
          </p>
        </header>

        {/* Strict uniform grid with thin borders */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSTRUMENTS.map((instrument) => (
            <InstrumentCard key={instrument.name} instrument={instrument} />
          ))}
        </div>
      </div>
    </section>
  )
}
