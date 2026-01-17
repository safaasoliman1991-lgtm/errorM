import { User } from "@errormanagement/shared/domain";

export interface PagedResponse {
  data: User[];
  total: number;
  page: number;
  pageSize: number;
}
