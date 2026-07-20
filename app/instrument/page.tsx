import {InstrumentGallery} from "@/components/instrument-gallery"; // Cập nhật đúng đường dẫn file của bạn

export default function InstrumentPage() {
  return (
    <main className="min-h-screen bg-transparent pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Render lưới hiển thị nhạc cụ */}
        <InstrumentGallery />
      </div>
    </main>
  );
}