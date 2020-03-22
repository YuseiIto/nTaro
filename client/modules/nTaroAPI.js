import axios from "axios";

export function ntaroRemove(id) {
    return new Promise(resolve => {
        axios.post("/remove", { id: id }).then(() => { resolve(); return; })
    });
};

export function ntaroGet() {
    return new Promise(resolve => {
        axios.get("/get").then((res, err) => {
            resolve(res.data);
            return res.data;
        });
    });
};

export function ntaroAdd(name, datetime, content) {
    return new Promise(resolve => {
        axios.post("/add", { name: name, datetime: datetime, content: content }).then(() => { resolve(); return; })
    });
}