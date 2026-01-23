# AGENTS.md  -  instructions for coding agents


## Security & data handling
- Never introduce real secrets. Use .env.example placeholders.
- Do not log PII. Follow existing logging/redaction patterns.

## PR / commit expectations
- Include a brief summary + rationale.
- Ensure all checks pass: `npm run lint`.
- If you must make a tradeoff, document it in the PR description.