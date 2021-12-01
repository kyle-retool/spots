import { body, endpoint, pathParams, queryParams, request, response} from "@airtasker/spot";

import { Organization, Pagination} from "../model"

@endpoint({
  method: "GET",
  path: "/v2/organizations"
})
class ListOrganizations {
  @request
  request(
    @queryParams
    queryParams: Pagination
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Organization[]
  ) {}
}

@endpoint({
  method: "GET",
  path: "/v2/organizations/:organization"
})
class GetOrganization {
  @request
  request(
    @pathParams
    pathParams: {
      organization: string;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: Organization
  ) {}
}