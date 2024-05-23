import fetch from 'node-fetch';
import { Api, JsonRpc } from "eosjs";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
//import assert from 'node:assert'
//imports para Mintear
//import { transact } from "./utilities/transact";
//import { name, collectionName } from "./utilities/name";
//
const author = 'borntowinnft';

export function createApiRpc() {
    const privateKey = "5KFwa3F3TVu14oXkfM6mcjtYXwUjpEZUsYQ5o18fkhhTWN5tGfJ";
    const endpoint = "https://testnet.wax.pink.gg";

    //assert(privateKey, "Missing WAX_PRIVATE_KEY");
    //assert(endpoint, "Missing WAX_ENDPOINT");

    const signatureProvider = new JsSignatureProvider([privateKey]);

    const rpc = new JsonRpc(endpoint, {
        fetch,
    });

    const apiRpc = new Api({
        rpc,
        signatureProvider,
        textDecoder: new TextDecoder(),
        textEncoder: new TextEncoder(),
    });

    return apiRpc;
}

const TAPOS = {
    blocksBehind: 3,
    expireSeconds: 30,
};

export function transact(actions) {
    const apiRpc = createApiRpc();

    return apiRpc.transact({ actions }, TAPOS);
}

async function mintNFT(value, index, array) {
    //const author = process.env.WAX_ACCOUNT;

    if (!author) {
        throw new Error("Missing WAX_ACCOUNT");
    }

    const templateId = value;

    if (!templateId) {
        throw new Error("Missing TEMPLATE_ID");
    }

    try {
        await transact([
            {
                account: "atomicassets",
                name: "mintasset",
                authorization: [
                    {
                        actor: author,
                        permission: "active",
                    },
                ],
                data: {
                    authorized_minter: author,
                    collection_name: 'borntowinnft',
                    schema_name: 'series1.card',
                    new_asset_owner: author,
                    template_id: templateId,
                    immutable_data: [],
                    mutable_data: [],
                    tokens_to_back: [],
                },
            },
        ])
        const newNFT= 'Ball';
        alert("New Assest created OK! " + newNFT);
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function nuevoMint(array) {
    //const result = await mintNFT(array);
    const result = await array.map(mintNFT);
    console.log(result);
}

export function FreeVersionMint() {

    return (
        <>
            
            
        </>
    )

}
export default FreeVersionMint;