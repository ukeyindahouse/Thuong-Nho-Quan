# ThuongNhoQuan

Ứng dụng quản lý quán **Thương Nhớ Quán**: tính bill nước, tính giờ bida, ghi chi, xem thu chi và lãi.
Chạy trên điện thoại, có thể dùng chung số liệu giữa 2-3 máy (xem phần "Dùng chung nhiều máy").

## Đưa lên GitHub Pages (miễn phí)

1. Vào github.com, tạo repository mới, ví dụ `thuongnhoquan` (để **Public**).
2. Bấm **Add file → Upload files**, kéo toàn bộ nội dung thư mục này vào (gồm `index.html`, `sw.js`,
   `manifest.webmanifest`, `firebase-config.js`, `logo.svg`, thư mục `icons`, file `.nojekyll`), rồi **Commit changes**.
3. Vào **Settings → Pages**. Ở mục **Build and deployment**, chọn **Deploy from a branch**,
   branch **main**, thư mục **/ (root)**, bấm **Save**.
4. Đợi 1–2 phút. Địa chỉ web sẽ là `https://TEN-GITHUB.github.io/thuongnhoquan/`.

## Cài về điện thoại

- **Android (Chrome):** mở địa chỉ web, bấm **Cài ngay** ở đầu màn hình Bàn, hoặc menu ⋮ → *Cài đặt ứng dụng*.
- **iPhone (Safari):** bấm nút Chia sẻ → *Thêm vào MH chính*.

Cài xong sẽ có biểu tượng quán ở màn hình chính, mở như ứng dụng và dùng được khi mất mạng.

## Cách dùng hằng ngày (3 tab)

- **Bàn:** khách vào chơi thì bấm nút to **Khách mới vào**, máy tự tính giờ. Khách gọi nước bấm **+ Gọi nước**. Khách về bấm **Khách về, tính tiền**, rồi **Gửi hình bill** (qua Zalo) hoặc **Lưu bill**. Bàn chơi quá 2 giờ đổi viền màu cam.
- **Bán nhanh:** bán nước mang đi hoặc nhập tay (kể cả bida nhập giờ tay).
- **Sổ sách:** *Bill* (xem, **Sửa bill**, **Mở lại bill** nếu lỡ tính sớm, xoá), *Chi tiền*, *Báo cáo*.
- Xoá hoặc huỷ nhầm: bấm **Hoàn tác** ở thanh thông báo (còn 10 giây).
- Chữ nhỏ khó đọc: **Cài đặt → Chữ to**.

## Dùng chung nhiều máy (2-3 người cùng một số liệu)

Làm một lần khoảng 10 phút, hoàn toàn miễn phí. Sau đó mọi điện thoại đăng nhập cùng một mật khẩu
sẽ thấy cùng bàn đang chơi, cùng hóa đơn, cùng thu chi. Ai bấm tính giờ, ai bấm kết thúc cũng được.

1. Vào **console.firebase.google.com**, đăng nhập Gmail của quán, bấm **Create a project**,
   đặt tên `thuongnhoquan`, tắt Google Analytics, bấm **Create**.
2. Ở menu trái chọn **Build → Firestore Database → Create database**. Chọn vị trí `asia-southeast1`
   (Singapore), chọn **Production mode**, bấm **Enable**. Sang thẻ **Rules**, xoá hết, dán nội dung file
   `firestore.rules` trong thư mục này, bấm **Publish**.
3. Bấm biểu tượng bánh răng → **Project settings** → kéo xuống **Your apps** → bấm biểu tượng web `</>`,
   đặt tên bất kỳ, bấm **Register app**. Chép 6 dòng trong `firebaseConfig` dán vào file `firebase-config.js`.
4. Menu trái chọn **Build → Authentication → Get started → Email/Password → Enable → Save**.
   Sang thẻ **Users → Add user**: email `quan@thuongnhoquan.app` (có thể đặt tên khác, không cần là email thật),
   mật khẩu là **mật khẩu chung của quán** (ít nhất 6 ký tự). Dán đúng email đó vào dòng `email` trong `firebase-config.js`.
5. Tải lại các file đã sửa lên GitHub (ít nhất là `firebase-config.js`). Đợi 1-2 phút, mở app: màn hình đăng nhập hiện ra,
   nhập mật khẩu chung. Mỗi điện thoại chỉ cần nhập một lần.

Lưu ý:

- Muốn **đổi mật khẩu** thì đổi trong Firebase → Authentication → Users. Các máy sẽ hỏi lại mật khẩu mới.
- Số liệu đã ghi trên một máy trước khi bật đồng bộ vẫn nằm trong máy đó. Vào **Cài đặt → Đưa mục cũ lên dùng chung** để gom lên.
- Mất mạng vẫn bấm tính giờ, lưu bill được. Có mạng lại máy sẽ tự đồng bộ.
- Nếu hai người cùng bấm kết thúc một bàn, người bấm sau sẽ được báo bàn đã được tính ở máy khác, không bị tính trùng.
- Các khoá trong `firebaseConfig` không phải mật khẩu, để công khai trên GitHub được.
  Dữ liệu được bảo vệ bởi mật khẩu quán và file `firestore.rules`.
- Gói Firebase miễn phí đủ cho quán nhỏ (hàng chục nghìn lượt ghi mỗi ngày). Vẫn nên **Tải file sao lưu** thỉnh thoảng.

Nếu chưa điền `firebase-config.js`, app chạy riêng từng điện thoại: dữ liệu nằm trong máy đó, sao lưu bằng file như trước.

## Đổi món, đổi giá

Mở app, bấm nút **Cài đặt** (góc phải trên) → **Sửa món và giá**. Sửa tên, sửa giá, thêm món mới (trà đá, sinh tố…)
hoặc xoá món. Khi đã bật dùng chung nhiều máy, đổi ở một máy thì các máy khác đổi theo. Bill cũ giữ nguyên giá lúc bán.

## Tên người thao tác

Lần đầu mở app, máy hỏi "Bạn tên gì?". Tên này được ghi ở bill (ai bấm bắt đầu, ai bấm kết thúc) và khoản chi.
Xem ở **Sổ sách → Bill**, bấm vào một bill. Mỗi điện thoại một tên, đổi lại ở **Cài đặt → Tên của bạn**.

## Đổi cách tính bida

Mở `index.html`, tìm đoạn `Bảng giá` ở đầu phần `<script>`, dòng `BIDA`: `hour` là giá một giờ,
`up1`/`add1` là mốc lố nhẹ (15 phút, +5.000đ), `up2`/`add2` là mốc lố vừa (35 phút, +15.000đ).
Lố hơn mốc `up2` thì tính thêm một giờ. Sau khi sửa, đổi `CACHE = "tnq-v4"` trong `sw.js` thành `tnq-v5`
(tăng số lên một) để các máy đang dùng nhận bản mới ngay.

## Các file

| File | Việc |
|---|---|
| `index.html` | Toàn bộ ứng dụng |
| `manifest.webmanifest` | Tên, biểu tượng, màu khi cài về máy |
| `sw.js` | Cho phép chạy khi mất mạng |
| `firebase-config.js` | Điền cấu hình để các máy dùng chung số liệu |
| `firestore.rules` | Luật bảo mật dán vào Firebase (bước 2) |
| `logo.svg`, `icons/` | Logo quán và biểu tượng ứng dụng |
