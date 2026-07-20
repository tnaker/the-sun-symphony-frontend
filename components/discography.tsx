// components/discography.tsx
import Link from "next/link"

const RELEASES = [
  {
    title: "TÌNH TÌNH TỨ",
    type: "(OFFICIAL MV)",
    image: "/images/tinhtu.jpg", 
    link: "/video",
    isExternal: false,
  },
  {
    title: "CON CŨNG MUỐN TẾT MÀ",
    type: "(OFFICIAL MV)",
    image: "/images/concungmuontetma.jpg", 
    link: "/video",
    isExternal: false,
  },
  {
    title: "THÍCH TẾT",
    type: "(OFFICIAL MV)",
    image: "/images/thichtet.jpg",
    link: "/video",
    isExternal: false,
  },
  {
    title: "TRÓT YÊU",
    type: "(COVER / LANY BÙI)",
    image: "https://img.youtube.com/vi/CAccDwUY9m0/hqdefault.jpg", // Tự động lấy ảnh bìa Youtube
    link: "https://www.youtube.com/watch?v=CAccDwUY9m0",
    isExternal: true,
  },
  {
    title: "SHE'S GONE",
    type: "(COVER / LANY S)",
    image: "https://img.youtube.com/vi/jWUjvy17Q-I/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=jWUjvy17Q-I",
    isExternal: true,
  },
  {
    title: "WASTELAND",
    type: "(OST ARCANE 2 COVER)",
    image: "https://img.youtube.com/vi/C8mHVk0wEOU/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=C8mHVk0wEOU",
    isExternal: true,
  },
]

export function Discography() {
  return (
    <section className="w-full px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[90rem] rounded-[2.5rem] border border-white/40 bg-white/60 p-8 shadow-2xl backdrop-blur-xl md:p-14">
        
        {/* --- Header theo chuẩn ảnh mẫu --- */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl uppercase tracking-tight text-foreground drop-shadow-sm md:text-6xl">
            KHÁM PHÁ
          </h2>
          <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-700 md:text-xs">
            Những dự án âm nhạc và bản cover mới nhất của LANY S
          </p>
        </div>

        {/* --- Grid 6 cột --- */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {RELEASES.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              
              {/* Ảnh vuông (Aspect-square) */}
              <div className="relative mb-5 w-full overflow-hidden rounded-xl border border-white/50 shadow-lg aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 mix-blend-overlay transition-colors duration-300 group-hover:bg-primary/20" />
              </div>

              {/* Thông tin */}
              <div className="mb-6 flex flex-col items-center gap-1.5 flex-1">
                <h3 className="line-clamp-2 font-display text-base font-bold uppercase leading-tight text-foreground transition-colors group-hover:text-primary md:text-lg">
                  {item.title}
                </h3>
                <p className="font-mono text-[0.65rem] font-bold tracking-widest text-slate-600">
                  {item.type}
                </p>
              </div>

              {/* Nút MORE */}
              {item.isExternal ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full max-w-[120px] rounded-full border-2 border-slate-900 bg-transparent py-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-slate-900 hover:text-white"
                >
                  More
                </a>
              ) : (
                <Link
                  href={item.link}
                  className="mt-auto block w-full max-w-[120px] rounded-full border-2 border-slate-900 bg-transparent py-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-slate-900 hover:text-white"
                >
                  More
                </Link>
              )}
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}