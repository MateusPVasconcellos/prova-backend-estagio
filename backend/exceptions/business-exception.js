export class BusinessException extends Error {
    constructor(customMessage, httpStatus = 400) {
        super();
        if (!customMessage) {
            this.customMessage = 'Business Exception';
        } else if (typeof customMessage === 'string' || customMessage instanceof String) {
            this.customMessage = customMessage;
        } else {
            this.customMessage = JSON.stringify(customMessage);
        }
        this.httpStatus = httpStatus;
        console.log(`BusinessException: ${this.customMessage}`);
    }
}