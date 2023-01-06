import request from "./request";

/**
 * 查询资产
 * @param id 资产ID
 */
export const queryAssetById = id =>
  request.post(`/asset/getAssetData?asset_id=${id}`, []);

/**
 * 无鉴权查询资产
 * @param id 资产ID
 */
export const queryAssetById1 = id =>
  request.post(`/form/getAssetData?asset_id=${id}`, []);


export const queryImport = id =>
  request.post(`user/customize/import`, []);

export const queryExport = id =>
  request.post(`user/customize/export`, [], { responseType: 'blob' });