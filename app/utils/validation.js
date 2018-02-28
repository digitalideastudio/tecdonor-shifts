export function getValidationErrorString( valResult ) {
    if (!valResult) return;

    let errorString = '';

    Object.keys(valResult).forEach((key) => {
         errorString += `${valResult[key][0]}\n`;
    });

    return errorString.trim();
}