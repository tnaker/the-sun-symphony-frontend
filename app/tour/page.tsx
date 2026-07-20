import { TourList } from "@/components/tour-list"

export default function TourPage() {
  return (
    <main className="min-h-screen bg-transparent pt-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Render component danh sách lịch diễn tại đây */}
        <TourList />
      </div>
    </main>
  );
}