import { ArtistBiography } from "@/components/artist-bio"; // Đảm bảo đúng tên file và Component bạn đã lưu

export default function ArtistPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      {/* Component Tiểu sử Nghệ sĩ */}
      <ArtistBiography />
    </main>
  );
}