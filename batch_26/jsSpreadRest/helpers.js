// Helpers hands on 2
export const PHI_VALUE = 3.14;

export const filterArrayDataByDataType = (
    arrayData = [], customDataType = "number"
) => {
    return arrayData.filter((arrayElement) => {
        return typeof arrayElement === customDataType;
    })
}

export const getTotalArrayData = (arrayData = []) => {
    const totalArray = arrayData.reduce(
        (nilaiSaatIni, elementArrayData) => {
            return nilaiSaatIni + elementArrayData;
    }, 0);

    return totalArray;
}

export const getRataRataSebuahArray = (arrayData = []) => {
    const totalArray = getTotalArrayData(arrayData);
    const rataRataNilaiArray = totalArray / arrayData.length;

    return rataRataNilaiArray;
}