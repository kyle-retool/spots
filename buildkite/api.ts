import { api } from "@airtasker/spot";
import { oa3server } from "@airtasker/spot/build/lib/src/syntax/oa3server";

import "./endpoints/organization"
import "./endpoints/pipeline"
import "./endpoints/build"

@api({ name: "Buildkite REST AP" })
class Api {
  @oa3server({ url: "https://api.buildkite.com" })
  productionServer() {}
}
