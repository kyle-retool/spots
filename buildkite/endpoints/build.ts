import { body, endpoint, pathParams, queryParams, request, response} from "@airtasker/spot";

import { Build, Pagination } from "../model"

@endpoint({
  method: "GET",
  path: "/v2/builds"
})
class ListAllBuilds {
  @request
  request(
    @queryParams
    queryParams: Pagination
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build[]
  ) {}
}

@endpoint({
  method: "GET",
  path: "/v2/organization/:organization/builds"
})
class ListAllBuildsForOrganization {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
    },
    @queryParams
    queryParams: Pagination
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build[]
  ) {}
}

@endpoint({
  method: "GET",
  path: "/v2/organization/:organization/pipelines/:pipeline/builds"
})
class ListAllBuildsForPipeline {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
    },
    @queryParams
    queryParams: Pagination
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build[]
  ) {}
}