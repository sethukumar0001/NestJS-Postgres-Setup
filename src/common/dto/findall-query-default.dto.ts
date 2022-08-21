import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { PAGINATION_CONSTANTS } from 'src/common/constants/pagination.constant';
import { SortByDefaultEnum } from 'src/common/constants/sort.enum';

export class FindAllQueryDefaultDTO {
  @IsOptional()
  searchText?: string = '';

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  pageNo?: number = PAGINATION_CONSTANTS.DEFAULT_PAGE_NO;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  pageSize?: number = PAGINATION_CONSTANTS.DEFAULT_PAGE_SIZE;

  @IsOptional()
  @IsEnum(SortByDefaultEnum)
  sortBy?: SortByDefaultEnum = SortByDefaultEnum.NEWEST;
}
