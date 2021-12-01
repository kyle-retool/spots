import { api } from "@airtasker/spot";

import "./endpoints/organization"
import "./endpoints/pipeline"
import "./endpoints/build"

@api({ name: "Buildkite REST AP" })
class Api {}