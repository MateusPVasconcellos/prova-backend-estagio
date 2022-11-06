export const throwIf = (e, clause) => {
    if (clause) {
        throw e;
    }
};