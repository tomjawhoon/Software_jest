
const converter = require('./converter.js');
// โปรแกรมจำลองการแปลงสกุลเงิน BATH ครับ
describe('ทดลองเปลี่ยนค่า สกุลเงินๆ ', () => {
    test('เมื่อเราใส่ค่า Input เป็น 0 จะได้ค่าออกมาเป็น 0 บาท ', () => {
        const thaibaht = 0;
        const expected = '$0.00';
        const result = converter(thaibaht);
        expect(result).toEqual(expected);
    });
    test('เมื่อเราใส่ค่า Input เป็น 3.5 จะได้ค่าออกมาเป็น 3.5 บาท ', () => {
        const thaibaht = 100;
        const expected = '$3.5';
        const result = converter(thaibaht);
        expect(result).toEqual(expected);
    });
});
