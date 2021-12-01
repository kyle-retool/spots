import { body, endpoint, pathParams, queryParams, request, response} from "@airtasker/spot";

import { Pipeline } from "../model"

@endpoint({
  method: "GET",
  path: "/v2/organizations/:organization/pipelines"
})
class ListPipelines {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
    },
    @queryParams
    queryParams: {
      page?: number;
      per_page?: number;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Pipeline[]
  ) {}
}

@endpoint({
  method: "GET",
  path: "/v2/organizations/:organization/pipelines/:pipeline"
})
class GetPipeline {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Pipeline
  ) {}
}