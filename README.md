## 🛠 Cách sử dụng

1. Vào Google Sheet → mở Apps Script
2. Dán toàn bộ code từ `Code.gs` vào
3. Chạy hàm `scanAllFolders()` và cài đặt chạy realtime
4. Để thêm người mới:
   - Tạo một sheet mới (vd: `File_Hoan`)
   - Tạo thư mục Drive riêng cho người đó
   - Gọi thêm dòng như:
     ```javascript
     scanDriveFolder('drive_folder_id_cua_Hoan', 'File_Hoang');
     ```

📌 Lưu ý: Sheet phải đúng tên, folder phải đúng ID nhé!
