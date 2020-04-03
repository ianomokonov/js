export function createGetter(field) {
    const path = field.split('.');

    return (obj) => {
        for(let field of path){
            obj = obj[field];
            if('undefined' == typeof obj){
                break;
            }
        }
        return obj;
    }
}