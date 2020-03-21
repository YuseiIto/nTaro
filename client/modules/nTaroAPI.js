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
    axios.post("/add", { name: name, datetime: datetime, content: content })
}