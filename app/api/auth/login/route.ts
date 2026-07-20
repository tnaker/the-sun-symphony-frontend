// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate dữ liệu gửi lên
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Vui lòng nhập đầy đủ Email và Mật khẩu.' },
        { status: 400 }
      );
    }

    // XỬ LÝ XÁC THỰC (Business Logic)
    // Thực tế bạn sẽ so sánh với Database (MySQL/MongoDB/Prisma) và mã hóa bcrypt
    // Tạm thời để hardcode bảo mật tại Backend (không lọt ra Client)
    if (email === "admin@thesunsymphony.com" && password === "123456") {
      
      // Ở các hệ thống thật, người ta sẽ tạo ra một JWT Token và gán vào HttpOnly Cookie tại đây.
      // Để đơn giản, ta trả về cờ success = true.
      return NextResponse.json(
        { success: true, message: 'Đăng nhập thành công!' },
        { status: 200 }
      );
    }

    // Nếu sai thông tin
    return NextResponse.json(
      { error: 'Email hoặc mật khẩu không chính xác!' },
      { status: 401 } // Unauthorized
    );

  } catch (error) {
    console.error('Login API Error:', error);
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi hệ thống.' },
      { status: 500 }
    );
  }
}