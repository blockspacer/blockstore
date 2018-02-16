import bindings = require("bindings");
const native = bindings("addon");

import {Block} from "./Block"

class Put
{
    key: string;
    val: string;
}

class Del
{
    key: string;
}

class Upd
{
    key: string;
    val: string;
}

type Op = Put | Del | Upd;

class PlType
{
    ops: Array<Op>;
}

const b = new Block<PlType>();

class BlockStore implements IKVStore {
    put(key: any, val: any) {
        throw new Error("Method not implemented.");
    }
    get(key: any) {
        throw new Error("Method not implemented.");
    }
    delete(key: any) {
        throw new Error("Method not implemented.");
    }
    update(key: any, val: any) {
        throw new Error("Method not implemented.");
    }
}

native.mineAsync("yolo", 4, (nonce) => {
    console.log(4, nonce);
});

native.mineAsync("yolo", 8, (nonce) => {
    console.log(8, nonce);
});

native.mineAsync("yolo", 12, (nonce) => {
    console.log(12, nonce);
});

native.mineAsync("yolo", 16, (nonce) => {
    console.log(16, nonce);
});

native.mineAsync("yolo", 17, (nonce) => {
    console.log(17, nonce);
});

native.mineAsync("yolo", 18, (nonce) => {
    console.log(18, nonce);
});

native.mineAsync("yolo", 20, (nonce) => {
    console.log(20, nonce);
});


interface IKVStore
{
    put(key, val);
    get(key);
    delete(key);
    update(key, val);
}

let chain : Array<Block<string>>;
let kv : IKVStore;

// blk -> put("yo", 123);

// wait majority before calling this
function handle_new_block(blk: Block<string>)
{
    chain.push(blk);
}