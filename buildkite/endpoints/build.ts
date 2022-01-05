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
  path: "/v2/organizations/:organization/builds"
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
  path: "/v2/organizations/:organization/pipelines/:pipeline/builds"
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

@endpoint({
  method: "GET",
  path: "/v2/organizations/:organization/pipelines/:pipeline/builds/:build"
})
class GetABuild {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
      build: number;
    },
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build
  ) {}
}

@endpoint({
  method: "POST",
  path: "/v2/organizations/:organization/pipelines/:pipeline/builds"
})
class CreateABuild {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
    },
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: Build
  ) {}
}

@endpoint({
  method: "PUT",
  path: "/v2/organizations/:organization/pipelines/:pipeline/builds/:build/cancel"
})
class CancelABuild {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
      build: number;
    },
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build
  ) {}
}

@endpoint({
  method: "PUT",
  path: "/v2/organizations/:organization/pipelines/:pipeline/builds/:build/rebuild"
})
class RebuildABuild {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
      pipeline: string;
      build: number;
    },
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Build
  ) {}
}
