const Workbook = require('exceljs').Workbook;

module.exports = (sheets) => {
  var workbook = new Workbook(); //creating workbook
  
  sheets.forEach(_sheet => {
  
    var sheet = workbook.addWorksheet(_sheet.name); //creating worksheet
  
    sheet.addRow(_sheet.headers);
  
    _sheet.data.forEach(item => {
      sheet.addRow(Object.values(item));
    });
  
  });

  return workbook.xlsx;

};