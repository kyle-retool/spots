buildkite/api.json: buildkite/api.ts
	npx @airtasker/spot generate --generator openapi3 --contract buildkite/api.ts --language json --out ./buildkite