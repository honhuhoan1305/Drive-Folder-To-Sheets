/**
 * Quét thư mục Google Drive và ghi toàn bộ file vào một sheet
 * 
 * @param {string} folderId - ID của thư mục Drive
 * @param {string} sheetName - Tên của Sheet để ghi dữ liệu
 */
function scanDriveFolder(folderId, sheetName) {
  try {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    if (!sheet) {
      throw new Error(`Không tìm thấy sheet "${sheetName}"`);
    }

    while (files.hasNext()) {
      const file = files.next();
      const filename = file.getName(); 
      const link = file.getUrl();
      const date = file.getDateCreated();
      const download = file.getDownloadUrl();
      const size = file.getSize();

      if (!isDuplicateFile(sheet, filename)) {
        sheet.appendRow([filename, link, date, size, download]);
      }
    }
  } catch (err) {
    Logger.log("Lỗi: " + err.message);
  }
}

/**
 * Kiểm tra xem file đã tồn tại trong cột A của sheet chưa
 * 
 * @param {Sheet} sheet - Google Sheet cần kiểm tra
 * @param {string} filename - Tên file cần kiểm tra
 * @returns {boolean} true nếu file đã tồn tại
 */
function isDuplicateFile(sheet, filename) {
  const columnA = sheet.getRange('A:A').getValues();
  return columnA.some(row => row[0] === filename);
}

/**
 * Gọi toàn bộ folder được gán trước
 * XYZW là các folderID
 */
function scanAllFolders() {
  scanDriveFolder('XXXXXXXXXX', 'FILE');         // Các bảng tính
  scanDriveFolder('YYYYYYYYYY', 'File_Y');       
  scanDriveFolder('ZZZZZZZZZZ', 'File_Z');       
  scanDriveFolder('WWWWWWWWWW', 'File_W');       
}
