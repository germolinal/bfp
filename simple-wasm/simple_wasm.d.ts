/* tslint:disable */
/* eslint-disable */
/**
*/
export class ModelHandler {
  free(): void;
/**
* @param {number} ptr
* @param {number} len
*/
  constructor(ptr: number, len: number);
/**
*/
  pre_process(): void;
/**
* @returns {number}
*/
  get_state(): number;
/**
* @returns {number}
*/
  state_len(): number;
/**
* @param {number} tout
*/
  march(tout: number): void;
/**
* @param {number} i
* @returns {number}
*/
  get_space_temperature_index(i: number): number;
/**
* @param {number} i
* @returns {number}
*/
  get_hvac_power_index(i: number): number;
}
