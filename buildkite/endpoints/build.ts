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
    @body body: CreateBuildRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: Build
  ) {}
}

interface CreateBuildRequest {
  /** Ref, SHA or tag to be built.
   * Note: Before running builds on tags, make sure your agent is fetching git tags. 
   * @oaSchemaProp example
   * "HEAD"
   */
  commit: string

  /** Branch the commit belongs to. This allows you to take advantage of your
   * pipeline and step-level branch filtering rules.
   * @oaSchemaProp example
   * "master"
   */
  branch: string

  /** A hash with a "name" and "email" key to show who created this build.
   * Default value: the user making the API request.
   */
  author?: {
    name?: string
    email?: string
  }

  /** Force the agent to remove any existing build directory and perform a fresh checkout.
   * Default value: false.
   */
  clean_checkout?: boolean

  /** Environment variables to be made available to the build. */
  env?: {}

  /** Run the build regardless of the pipeline’s branch filtering rules. Step
   * branch filtering rules will still apply.
   * Default value: false.
   */
  ignore_pipeline_branch_filters?: boolean

  /** Message for the build.
   * @oaSchemaProp example
   * "Testing all the things :rocket:"
   */
  message?: string

  /** A hash of meta-data to make available to the build.
   * Default value: {}.
   */
  meta_data?: {}

  /** For a pull request build, the base branch of the pull request.
   * @oaSchemaProp example
   * "master"
   */
  pull_request_base_branch?: string

  /** For a pull request build, the pull request number
   * @oaSchemaProp example
   * 42
   */
  pull_request_id?: number

  /** For a pull request build, the git repository of the pull request.
   * @oaSchemaProp example
   * "git://github.com/my-org/my-repo.git"
   */
  pull_request_repository?: string
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
