// components/career-highlights.tsx
import { Trophy, Tv, Sparkles } from 'lucide-react'

// Dữ liệu trích xuất từ Portfolio Trang 8
const AWARDS = [
  { title: 'Tiếng hát truyền hình Sao tìm sao', year: '2020', result: 'Top 7' },
  { title: 'Tuyệt đỉnh song ca', year: '2022', result: 'Top 3' },
]

const GAMESHOWS = [
  { title: 'Sàn chiến giọng hát', year: '2023' },
  { title: 'Ca sĩ bí ẩn', year: '2023' },
  { title: 'Đấu trường âm nhạc', year: '2025' },
]

// Ảnh giả lập tạm thời (Sử dụng các ảnh Hologram đang có)
const STAGE_IMAGES = [
  '/images/tuyetdinhsongca.jpg',
  '/images/sanchiengionghat.jpg',
  '/images/casibian.jpg',
  '/images/dautruongamnhac.jpg',
]

export function CareerHighlights() {
  return (
    <section id="career" className="px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-card/40 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
        
        {/* Tiêu đề Section */}
        <header className="mb-12 text-center md:mb-16">
          <span className="flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary">
            <Sparkles className="size-4" /> Career Highlights
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
            Dấu Ấn <span className="text-primary">Sự Nghiệp</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Cột Trái: Danh sách Giải thưởng & Gameshow */}
          <div className="space-y-12">
            
            {/* Khối Giải Thưởng */}
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-foreground">
                <Trophy className="size-8 text-primary" /> Giải Thưởng
              </h3>
              <ul className="space-y-4">
                {AWARDS.map((award, idx) => (
                  <li key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="font-bold text-foreground md:text-lg">{award.title}</p>
                      <p className="font-mono text-xs tracking-widest text-muted-foreground">{award.year}</p>
                    </div>
                    <span className="rounded-full bg-primary/20 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary">
                      {award.result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Khối Gameshow */}
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-display text-2xl uppercase tracking-wide text-foreground">
                <Tv className="size-8 text-primary" /> Gameshow
              </h3>
              <ul className="space-y-4">
                {GAMESHOWS.map((show, idx) => (
                  <li key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="font-bold text-foreground md:text-lg">{show.title}</p>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{show.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Cột Phải: Lưới ảnh giả lập (Masonry-style Grid) */}
          <div className="grid grid-cols-2 gap-4">
            {STAGE_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-lg ${idx === 0 || idx === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}
              >
                <img
                  src={img}
                  alt={`Stage Performance ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}