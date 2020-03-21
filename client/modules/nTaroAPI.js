export function remove(id, callback) {
    console.log(`Hello${id}`)
    if (typeof(callback) == "function") {
        callback();
    }
};