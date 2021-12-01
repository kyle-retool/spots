export interface Pagination {
  page?: number;
  per_page?: number;
}

export interface Build {
  id: string;
  graphql_id: string;
  url: string;
  web_url: string;
  number: number,
}

export interface Organization {
  id: string;
  graphql_id: string;
  url: string;
  web_url: string;
  name: string;
  slug: string;
  pipelines_url: string;
  agents_url: string;
  emojis_url: string;
  created_at: string;
}

export interface Pipeline {
  id: string;
  graphql_id: string;
}
