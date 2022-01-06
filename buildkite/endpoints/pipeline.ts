import { body, endpoint, pathParams, queryParams, request, response} from "@airtasker/spot";

import { Pipeline, Pagination } from "../model"

/** Returns a paginated list of an organization’s pipelines. */
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
    queryParams: Pagination
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
class GetAPipeline {
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

/** YAML pipelines are the recommended way to manage your pipelines. To create a
YAML pipeline using this endpoint, set the configuration key in your json
request body to an the YAML you want in your pipeline. */
@endpoint({
  method: "POST",
  path: "/v2/organizations/:organization/pipelines"
})
class CreateAYAMLPipeline {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
    },
    @body body: CreateYAMLPipelineRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: Pipeline
  ) {}
}
interface CreateYAMLPipelineRequest {
  /** The name of the pipeline. */
  name: string;

  /** The repository URL. */
  repository: string;

  /** The YAML pipeline that consists of the build pipeline steps. */
  configuration: string;

  /** A branch filter pattern to limit which pushed branches trigger builds on this pipeline.
   * @oaSchemaProp example
   * "master feature/*"
   */
  branch_configuration?: string

  /** Cancel intermediate builds. When a new build is created on a branch, any previous builds that are running on the same branch will be automatically canceled.
   * @oaSchemaProp example
   * true
   * @default false
   */
  cancel_running_branch_builds?: boolean

  /**
   * A branch filter pattern to limit which branches intermediate build cancelling applies to.
   * @oaSchemaProp example
   * "develop prs/*"
   */
  cancel_running_branch_builds_filter?: string

  /** The name of the branch to prefill when new builds are created or triggered in
   * Buildkite. It is also used to filter the builds and metrics shown on the
   * Pipelines page.
   * @oaSchemaProp example
   * "master"
   */
  default_branch?: string

  /** The pipeline description.
   * @oaSchemaProp example
   * "📦 A testing pipeline"
   */
  description?: string
}