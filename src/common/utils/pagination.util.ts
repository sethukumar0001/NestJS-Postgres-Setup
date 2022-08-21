import { PAGINATION_CONSTANTS } from '../constants/pagination.constant';
import { IPagination } from '../interfaces/pagination.interface';

export function getOffsetAndLimitFromQuery(query: any) {
  const limit: number = query.pageSize
    ? parseInt(query.pageSize)
    : PAGINATION_CONSTANTS.DEFAULT_PAGE_SIZE;
  const offset: number = query.pageNo
    ? (parseInt(query.pageNo) - 1) * limit
    : (PAGINATION_CONSTANTS.DEFAULT_PAGE_NO - 1) * limit;
  return { offset, limit };
}

export function getPaginationObject(offset, limit, totalCount): IPagination {
  const pageNo = offset / limit + 1;
  const pageSize = limit;
  const totalPages = Math.ceil(totalCount / limit);
  return { pageNo, pageSize, totalPages, totalCount };
}
