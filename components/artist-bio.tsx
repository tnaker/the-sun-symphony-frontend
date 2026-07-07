"use client"

// components/artist-bio.tsx
// -----------------------------------------------------------------------------
// Artist Biography component. Features a modern split layout with a sticky 
// portrait on one side and elegant, readable typography on the other.
// -----------------------------------------------------------------------------
import { Globe, Camera, PlaySquare, Music2 } from "lucide-react"

export function ArtistBiography() {
  return (
    <section className="w-full overflow-hidden bg-background px-4 py-16 md:px-8 md:py-24">
      {/* Giant Typography Header */}
      <div className="relative z-10 mx-auto mb-16 flex max-w-7xl flex-col items-center text-center lg:mb-24">
        <span className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-primary md:text-sm">
          Về Chúng Tôi
        </span>
        <h1 className="flex flex-col items-center font-display uppercase leading-[0.8] text-foreground">
          <span className="text-[16vw] lg:text-[11rem]">The Sun</span>
          <span className="-mt-[3vw] text-[16vw] text-primary lg:-mt-6 lg:text-[11rem]">
            Symphony
          </span>
        </h1>
      </div>

      {/* Split Layout Container */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        
        {/* Left Column: Portrait Placeholder (Spans 5 cols) */}
        <div className="relative lg:col-span-5">
          {/* Sticky positioning keeps the image in view while scrolling the text */}
          <div className="sticky top-28 aspect-[3/4] w-full overflow-hidden border border-border bg-card">
            <img
              src="/images/artist-portrait.png"
              alt="Chân dung The Sun Symphony"
              className="h-full w-full object-cover grayscale-[30%] transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />
            {/* Dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>
        </div>

        {/* Right Column: Biography Text (Spans 7 cols) */}
        <div className="flex flex-col justify-center lg:col-span-7 lg:py-10">
          <h2 className="mb-8 font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl">
            Hành trình <span className="text-primary">âm nhạc</span>
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Được thành lập từ những tâm hồn đồng điệu yêu sự tự do và phóng khoáng, <strong className="font-semibold text-foreground">THE SUN SYMPHONY</strong> không chỉ là một dự án âm nhạc, mà là một không gian nghệ thuật nơi mọi dải âm đều mang hơi thở của cuộc sống.
            </p>
            <p>
              Chúng tôi tin rằng âm nhạc chân chính không cần đến những kỹ xảo hào nhoáng của phòng thu. Nó đến từ những nhịp bass trầm mặc, những đoạn riff gai góc, và những giọng hát <span className="text-primary">thô ráp nhưng chân thực</span>. Đó là lý do tại sao mọi tiết mục live của chúng tôi đều mang một nguồn năng lượng không thể sao chép.
            </p>

            {/* Accent Quote */}
            <blockquote className="my-8 border-l-2 border-primary pl-6 font-display text-2xl uppercase italic leading-snug text-foreground md:text-3xl">
              "Chúng tôi lấy con người làm trung tâm, lấy nội lực làm sức mạnh. Đam mê và sáng tạo không giới hạn."
            </blockquote>

            <p>
              Từ những đêm diễn ấm cúng ẩn mình trong lòng thành phố đến những sân khấu đại nhạc hội rực sáng ánh đèn, hành trình của The Sun Symphony luôn có sự đồng hành của những khán giả nhiệt thành nhất. Chúng tôi ở đây để tiếp tục kể câu chuyện đó — <strong className="font-semibold text-foreground">to và rõ hơn bao giờ hết</strong>.
            </p>
          </div>

          {/* Follow Section (Social Icons) */}
          <div className="mt-12 border-t border-border pt-8">
            <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-foreground">
              Kết nối cùng chúng tôi
            </span>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                aria-label="Globe"
                className="group flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Globe className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                aria-label="Camera"
                className="group flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Camera className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                aria-label="PlaySquare"
                className="group flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                <PlaySquare className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                aria-label="Spotify"
                className="group flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                {/* Sử dụng Music2 để đại diện cho Spotify */}
                <Music2 className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}