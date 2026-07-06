import { TourList } from "@/components/tour-list"

export default function TourPage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Render component danh sách lịch diễn tại đây */}
        <TourList />
      </div>
    </main>
  );
}