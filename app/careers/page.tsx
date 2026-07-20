import { CareerHighlights } from "@/components/career-highlights"; // Đảm bảo đúng đường dẫn

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-transparent pt-24 pb-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Lưới Video với Modal Cửa sổ nổi */}
        <CareerHighlights />
      </div>
    </main>
  );
}