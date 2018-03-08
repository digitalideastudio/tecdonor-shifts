export function getValidationErrorString( valResult ) {
    console.log('error object: ', valResult);
    if (!valResult) return;

    let errorString = '';

    Object.keys(valResult).forEach((key) => {
        if (Array.isArray(valResult[key])) {
            errorString += `${valResult[key][0]}\n`;
        } else {
            errorString += `${valResult[key]}\n`;
        }
    });

    console.log('parsed message: ', errorString);

    return errorString.trim();
}