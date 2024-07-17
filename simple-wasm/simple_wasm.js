import * as wasm from "./simple_wasm_bg.wasm";
import { __wbg_set_wasm } from "./simple_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./simple_wasm_bg.js";
