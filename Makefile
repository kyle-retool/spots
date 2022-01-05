buildkite/api.json: $(wildcard buildkite/*.ts) $(wildcard buildkite/**/*.ts)
	npx @airtasker/spot generate --generator openapi3 --contract buildkite/api.ts --language json --out ./buildkite
