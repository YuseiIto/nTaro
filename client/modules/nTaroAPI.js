import axios from "axios";

export function ntaroRemove(id, callback) {
    axios.post("/remove", { id: id })
    if (typeof(callback) == "function") {
        callback();
    }
};

export async function ntaroGet() {
    const res = await axios.get("/get")
    return res.data;
};

export function ntaroAdd(name, datetime, content) {
    return new Promise(resolve => {
        axios.post("/add", { name: name, datetime: datetime, content: content }).then(() => { resolve(); return; })
    });
}