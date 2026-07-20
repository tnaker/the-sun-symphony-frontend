export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-32 pt-24 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border bg-card/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur md:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          Contact & Booking
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-tight text-foreground md:text-5xl">
          Kết nối với LANY S
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Nếu bạn muốn trao đổi về các cơ hội hợp tác, biểu diễn, dự án nghệ thuật hoặc kết nối với hành trình âm nhạc của LANY S, hãy liên hệ qua thông tin bên dưới.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-background/70 p-6">
            <h2 className="font-display text-2xl uppercase text-foreground">Thông tin liên hệ</h2>
<ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
  <li>
    <span className="font-semibold text-foreground">Email:</span>{" "}
    <a
      href="mailto:lanys.artist@gmail.com"
      className="text-primary hover:underline"
    >
      lanys.artist@gmail.com
    </a>
  </li>

  <li>
    <span className="font-semibold text-foreground">Phone / Zalo:</span>{" "}
    <a
      href="tel:076690601"
      className="text-primary hover:underline"
    >
      076690601
    </a>
  </li>

  <li>
    <span className="font-semibold text-foreground">Facebook:</span>{" "}
    <a
      href="https://www.facebook.com/lanys.artist"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      LANY S
    </a>
  </li>

  <li>
    <span className="font-semibold text-foreground">Instagram:</span>{" "}
    <a
      href="https://www.instagram.com/lanys.artist/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      @lanys.artist
    </a>
  </li>

  <li>
    <span className="font-semibold text-foreground">TikTok:</span>{" "}
    <a
      href="https://www.tiktok.com/@lanys.artist"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      @lanys.artist
    </a>
  </li>

  <li>
    <span className="font-semibold text-foreground">YouTube:</span>{" "}
    <a
      href="https://www.youtube.com/@lanys.artist"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      LANY S
    </a>
  </li>
</ul>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-background/70 p-6">
            <h2 className="font-display text-2xl uppercase text-foreground">Mời hợp tác</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mình luôn sẵn sàng kết nối với các đơn vị sản xuất, nhà tổ chức sự kiện, cộng đồng nghệ thuật và những người yêu thích âm nhạc chân thật.
            </p>
            <a
              href="mailto:lanys.artist@gmail.com"
              className="mt-6 inline-flex rounded-full border border-primary/40 bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.35em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Gửi email ngay
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}