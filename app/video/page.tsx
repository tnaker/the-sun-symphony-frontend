import { VideoGallery } from "@/components/video-gallery"; // Đảm bảo đúng đường dẫn

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Lưới Video với Modal Cửa sổ nổi */}
        <VideoGallery />
      </div>
    </main>
  );
}