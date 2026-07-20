// app/api/contact/route.ts
import { NextResponse } from 'next/server';

// Hàm xử lý HTTP POST request
export async function POST(request: Request) {
  try {
    // 1. Phân tích dữ liệu JSON gửi lên từ Frontend
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validate dữ liệu cơ bản
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin (Tên, Email, Lời nhắn).' },
        { status: 400 } // Bad Request
      );
    }

    // 3. Xử lý nghiệp vụ (Business Logic)
    // Tại đây, bạn có thể lưu vào Database (MySQL, MongoDB) hoặc gửi Email
    // Tạm thời, chúng ta sẽ in ra console của server để kiểm tra
    console.log('--- CÓ TIN NHẮN MỚI ---');
    console.log('Từ:', name, `(${email})`);
    console.log('Nội dung:', message);
    console.log('-----------------------');

    // 4. Trả về phản hồi cho Frontend
    return NextResponse.json(
      { success: true, message: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.' },
      { status: 200 } // OK
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi hệ thống (Internal Server Error).' },
      { status: 500 }
    );
  }
}