import { Config } from "./Config";
import { IKVStore } from "./IKVStore";
import { GenericKVStore } from "./GenericKVStore";
import { Payload } from "./Operation";
import { Block, MineBlock, ValidateBlock, ValidBlock } from "./Block"
import { BlockChain } from "./BlockChain";


class BlockStore implements IKVStore {
    Get(key: string) : string {
        throw new Error("Method not implemented.");
    }
    Put(key: string, val: string) : boolean {

        // create a new block for the operation
        // setup block with operation
        // compute nonce until target is found
        // broadcast to all nodes once found
        // call internal kv function to put value
        throw new Error("Method not implemented.");
    }
    Update(key: string, val: string) : boolean {
        throw new Error("Method not implemented.");
    }
    Delete(key: string) : boolean {
        throw new Error("Method not implemented.");
    }

    constructor(config: Config)
    {
        this.kv = new GenericKVStore;
        this.chain = new BlockChain<Payload>();
        this.currentBlock = new Block<Payload>;
    }

    kv: IKVStore;
    chain: BlockChain<Payload>;
    currentBlock: Block<Payload>;
}