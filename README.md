# Access Review Engine

TypeScript decision engine for periodic access reviews, entitlement scoring, and reviewer-ready remediation outputs.

## Why This Exists

Built to model the kind of internal governance service platform and security teams use to identify stale access before audits or incidents.

## What This Demonstrates

- review-candidate scoring and entitlement prioritization
- clear separation between domain rules and transport concerns
- deterministic outputs that read like audit artifacts

## Architecture

1. input records are normalized into typed review entities
1. domain rules score access risk and stale-entitlement likelihood
1. outputs are shaped into reviewer-focused remediation views

## Run It

```bash
npm test
npm run build
```

## Verification

Use `npm test` for behavioral validation and `npm run build` for a clean compile.
