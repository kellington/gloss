-- One learner-state JSON blob per Access-authenticated user. Last-write-wins on updated_at.
CREATE TABLE IF NOT EXISTS learner_state (
  email TEXT PRIMARY KEY,          -- lower-cased Access email (JWT `email` claim)
  state TEXT NOT NULL,             -- JSON object, same shape as localStorage "multi-read-v0.1"
  updated_at INTEGER NOT NULL,     -- client edit time, ms since epoch (LWW key)
  server_updated_at INTEGER NOT NULL -- server write time, ms since epoch (diagnostics)
);
