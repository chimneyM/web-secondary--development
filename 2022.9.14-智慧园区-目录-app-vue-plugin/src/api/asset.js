import request from "./request";

/**
 * 查询资产
 * @param id 资产ID
 */
export const queryAssetById = id =>
  request.post(`/asset/getAssetData?asset_id=${id}`, []);
export const queryMenuByAssetId = data =>
  request.post(`/WisdomPark/queryMenuByAssetId`,data);

/**
 * 无鉴权查询资产
 * @param id 资产ID
 */
export const queryAssetByIdForm = id =>
  request.post(`/form/getAssetData?asset_id=${id}`, []);