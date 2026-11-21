# ThuongNhoQuan

Ứng dụng quản lý quán **Thương Nhớ Quán**: tính bill nước, tính giờ bida, ghi chi, xem thu chi và lãi.
Chạy hoàn toàn trên điện thoại, không cần máy chủ, không cần cài thêm gì.

## Đưa lên GitHub Pages (miễn phí)

1. Vào github.com, tạo repository mới, ví dụ `thuongnhoquan` (để **Public**).
2. Bấm **Add file → Upload files**, kéo toàn bộ nội dung thư mục này vào (gồm `index.html`, `sw.js`,
   `manifest.webmanifest`, `logo.svg`, thư mục `icons`, file `.nojekyll`), rồi **Commit changes**.
3. Vào **Settings → Pages**. Ở mục **Build and deployment**, chọn **Deploy from a branch**,
   branch **main**, thư mục **/ (root)**, bấm **Save**.
4. Đợi 1–2 phút. Địa chỉ web sẽ là `https://TEN-GITHUB.github.io/thuongnhoquan/`.

## Cài về điện thoại

- **Android (Chrome):** mở địa chỉ web, bấm **Cài ngay** ở đầu màn hình Bán hàng, hoặc menu ⋮ → *Cài đặt ứng dụng*.
- **iPhone (Safari):** bấm nút Chia sẻ → *Thêm vào MH chính*.

Cài xong sẽ có biểu tượng quán ở màn hình chính, mở như ứng dụng và dùng được khi mất mạng.

## Dữ liệu nằm ở đâu

Số liệu lưu **trong điện thoại** (không gửi đi đâu). Vì vậy:

- Mỗi điện thoại có dữ liệu riêng. Muốn dùng hai máy thì sao lưu ở máy này rồi khôi phục ở máy kia.
- Xoá dữ liệu trình duyệt hoặc gỡ ứng dụng sẽ mất số liệu. Hãy vào **Cài đặt → Tải file sao lưu** mỗi tuần.
  Ứng dụng sẽ nhắc khi quá 7 ngày chưa sao lưu.
- Trên iPhone, nên **cài vào màn hình chính** để iOS không tự dọn dữ liệu của trang web ít dùng.

## Đổi giá, đổi cách tính bida

Mở `index.html`, tìm đoạn `Bảng giá` ở đầu phần `<script>`:

- `MENU`: tên món và giá.
- `BIDA`: `hour` là giá một giờ, `up1`/`add1` là mốc lố nhẹ (15 phút, +5.000đ),
  `up2`/`add2` là mốc lố vừa (35 phút, +15.000đ). Lố hơn mốc `up2` thì tính thêm một giờ.

Sau khi sửa, đổi `CACHE = "tnq-v1"` trong `sw.js` thành `tnq-v2` để máy đang dùng nhận bản mới ngay.

## Các file

| File | Việc |
|---|---|
| `index.html` | Toàn bộ ứng dụng |
| `manifest.webmanifest` | Tên, biểu tượng, màu khi cài về máy |
| `sw.js` | Cho phép chạy khi mất mạng |
| `logo.svg`, `icons/` | Logo quán và biểu tượng ứng dụng |
