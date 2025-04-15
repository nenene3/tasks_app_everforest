function convert(s: string, numRows: number): string {

    if (numRows === 1) {
        return s
    }

    if (numRows === 0) {
        return ""
    }

    let str: string = ""
    for (let i: number = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            for (let j: number = i; j < s.length; j += (numRows - 1) * 2) {
                str += s[j]
            }
        } else {
            for (let j: number = i; j < s.length; j += (numRows - 1) * 2) {
                str += s[j]
            }
        }
    }
    return str
};


convert('PAYPALISHIRING',3)