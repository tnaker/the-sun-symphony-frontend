# THE SUN SYMPHONY — Music Band Showcase & Admin Dashboard

Dự án Xây dựng Frontend Web Application cho Công ty Cổ phần Truyền thông Giải trí và Restaurant THE SUN SYMPHONY, thuộc khuôn khổ kỳ Thực tập Tốt nghiệp / Thực tập Ngoài trường (HK253).

**Sinh viên thực hiện:** Hồ Phan Thế Anh  
**Đơn vị đào tạo:** Khoa Khoa học & Kỹ thuật Máy tính (CSE) - Trường Đại học Bách Khoa (HCMUT)  
**Đơn vị thực tập:** THE SUN SYMPHONY (58/27 Phan Chu Trinh, Bình Thạnh, TP.HCM)  

---

## 🎸 Tổng quan dự án (Overview)
Đây là một hệ thống web đa trang (Multi-page Application) được thiết kế riêng cho lĩnh vực giải trí âm nhạc, kết hợp giữa giao diện trình diễn sống động (Showcase) cho khán giả và bảng điều khiển quản trị (Admin Dashboard) cho chủ sở hữu.

Dự án áp dụng phong cách thiết kế **Dark-theme**, **Giant Typography**, và **Masonry/Grid Layout** để truyền tải mạnh mẽ cá tính nghệ thuật, đồng thời đảm bảo trải nghiệm đa phương tiện (nghe nhạc/xem video) liên tục không gián đoạn.

## 🚀 Công nghệ sử dụng (Tech Stack)
* **Framework:** Next.js 14+ (App Router)
* **Ngôn ngữ:** TypeScript / React
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Kiến trúc State:** Global Audio State (via Layout)

## ✨ Tính năng cốt lõi (Key Features)
Theo lộ trình thực tập (Tuần 1 - Tuần 6), hệ thống đã hoàn thiện các Use Cases sau:
1.  **Global Audio Player:** Trình phát nhạc bám đáy màn hình (Sticky Bottom Player) hoạt động xuyên suốt, không bị ngắt quãng khi người dùng chuyển trang.
2.  **Instrument Gallery (Nhạc cụ):** Bố cục lưới trưng bày thiết bị biểu diễn live với hiệu ứng hover tối ưu trải nghiệm thị giác.
3.  **Video Modal (Khoảnh khắc):** Tích hợp cửa sổ nổi (Modal) phát MV YouTube mượt mà, giữ chân người dùng trên trang hiện tại.
4.  **Artist Biography (Nghệ sĩ):** Bố cục chia cột (Split Layout) hiển thị chân dung nghệ sĩ ghim tĩnh (sticky) kết hợp cùng nghệ thuật chữ ngoại cỡ.
5.  **Tour Schedule (Lịch diễn):** Danh sách sự kiện được thiết kế gọn gàng với các tag trạng thái "Mua vé" / "Hết vé".
6.  **Protected Admin Dashboard:** * Trang Đăng nhập (Login) giả lập bảo mật.
    * Bảng quản lý bài hát (Tracks Table) với đầy đủ tính năng CRUD UI và phân loại trạng thái (Bản nháp / Đã phát hành).

## 🛠 Hướng dẫn cài đặt (Installation)

Yêu cầu hệ thống đã cài đặt **Node.js**.

Chạy các lệnh sau trong Terminal:

```bash
# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển
npm run dev
```

## 🌐 Hướng dẫn truy cập ứng dụng

Sau khi khởi chạy dự án, truy cập ứng dụng tại:

**http://localhost:3000**

### Tài khoản quản trị (Admin)

Đường dẫn **`/admin`** yêu cầu đăng nhập.

Sử dụng tài khoản thử nghiệm sau:

- **Email:** `admin@thesunsymphony.com`
- **Mật khẩu:** `123456`
