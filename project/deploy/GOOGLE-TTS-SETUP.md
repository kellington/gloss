# Gloss — Google TTS setup for read-along audio

Written 2026-11-21. Goal: replace the robotic macOS `say` voice with a Google Cloud
Text-to-Speech voice in `scripts/generate_audio.py`.

**Rob runs every step below.** Claude does not create projects, enable billing, or
handle credentials. When the steps are done, send Claude the three items in
"What to send back" and Claude adds the Google provider.

## What this is and is not

- It runs **only on your Mac**, when you generate audio for a chapter. Nothing is added
  to the Worker, the deploy, or the reader. No Google credential is ever deployed.
- It bills **your Google Cloud account**, not Anthropic and not Cloudflare.
- The text sent to Google is the chapter text: public-domain Dumas plus our Simple and
  Advanced rewrites. No personal data.
- The audio files and the reader stay exactly as they are now. Only the voice changes.

## Cost

Check the live numbers on the [official pricing page](https://cloud.google.com/text-to-speech/pricing)
before you start; the figures below came from a web search on 2026-11-21 and the
localised copies of that page did not fully agree with each other.

| Voice family | List price | Free each month | Quality |
|---|---|---|---|
| Chirp 3: HD | about $30 per 1M characters | first 1M characters | Best, most natural |
| Neural2 | about $16 per 1M characters | first 1M characters | Good |
| WaveNet / Standard | about $4 per 1M characters | first 4M characters | Dated |

Chapter 1 is 49,760 characters across all three levels. So:

- One chapter the size of C01 is about $1.50 at the Chirp 3: HD list price, and $0 while
  you stay under the 1M free characters in a month (roughly 20 chapters of that size).
- A 5-passage voice trial is a few thousand characters.
- Reruns only pay for passages whose text changed. Changing the voice regenerates everything.

Billing must be enabled on the project even to use the free allowance.

## Steps

Run the commands from any folder. Replace `PROJECT_ID` with your project's ID.

### 1. Choose the Google Cloud project

Either reuse an existing project or create one just for this (recommended, so the cost
shows up on its own line):

```sh
gcloud projects create PROJECT_ID --name="Gloss TTS"
```

Then link a billing account to it in the console: Billing → Account management →
link the new project. (`gcloud billing projects link PROJECT_ID --billing-account=XXXXXX-XXXXXX-XXXXXX`
does the same.)

### 2. Enable the Text-to-Speech API

```sh
gcloud services enable texttospeech.googleapis.com --project PROJECT_ID
```

### 3. Set a budget alert (recommended)

Console → Billing → Budgets & alerts → Create budget. Scope it to this project, set
something small such as $5 a month, and leave the email alerts on. A budget only
alerts; it does not cap spend.

### 4. Sign in for local API use

This uses your own Google login through the `gcloud` CLI (already installed here, version
588). No API key is created and nothing secret is written into the repo.

```sh
gcloud auth application-default login
gcloud auth application-default set-quota-project PROJECT_ID
```

The first command opens a browser to sign in. Your Google account needs permission to
use the API on that project; if you created the project you are its owner and already do.

### 5. Check that it works

This lists the French voices and costs nothing:

```sh
curl -s \
  -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
  -H "x-goog-user-project: PROJECT_ID" \
  "https://texttospeech.googleapis.com/v1/voices?languageCode=fr-FR" | grep '"name"'
```

You should see a list of names such as `fr-FR-Neural2-…` and `fr-FR-Chirp3-HD-…`.
If you get a `403`, billing is not linked or the API is not enabled; if you get a
`401`, repeat step 4.

### 6. Listen to the voices (optional)

Console → Text-to-Speech has a demo page where you can paste a French sentence and
audition each voice. Note the name of any you like.

## What to send back

1. The project ID. It is not a secret.
2. A go-ahead to spend on it, with the scope: a 5-passage trial first, or straight to all of C01.
3. A voice name if you picked one in step 6. Otherwise Claude generates the first
   5 passages in two or three `fr-FR-Chirp3-HD` voices for you to compare in the reader.

## What Claude does next

- Adds a `google` provider to `scripts/generate_audio.py`. It calls the REST API with
  Python's standard library and gets its token from `gcloud`, so there is no new
  dependency and no key file.
- Usage becomes:
  ```sh
  python3 scripts/generate_audio.py --chapter data/monte-cristo/c01.json \
    --provider google --google-project PROJECT_ID --voice fr-FR-Chirp3-HD-NAME --limit 5
  ```
- Runs the trial, you listen at http://localhost:8789/, then the full chapter on your say-so.
- `--provider say` keeps working as the free fallback.

## Alternative: an API key instead of gcloud login

Simpler to script but leaves a long-lived secret on disk, so it is the second choice.
Console → APIs & Services → Credentials → Create credentials → API key, then restrict
the key to the Cloud Text-to-Speech API. Put it in your shell environment as
`GOOGLE_TTS_API_KEY` for the session that generates audio. Do not paste it into chat,
into `~/.zshrc`, or into any tracked file. Tell Claude you chose this route and the
provider will read that variable instead.

## Turning it off

```sh
gcloud services disable texttospeech.googleapis.com --project PROJECT_ID
gcloud auth application-default revoke
```
