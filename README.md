# Trust Lens UI

Build a web app UI called "TrustLens" — a media verification tool.

[Paste your reference image]

Design language: soft off-white background with subtle mint gradient blob, white rounded-2xl cards with soft shadows, pastel circular icon badges (blue/purple/orange/red/green tints), rounded-full pill tags and buttons, clean sans-serif typography.

Pages/states needed (all in one page, conditionally rendered — no routing needed):

1. Upload state: centered card with drag-drop zone, URL input, rounded "Analyze" button

2. Loading state: skeleton cards with cycling status text

3. Results state: stack of cards —

   - Trust Score card (big number + colored verdict pill + explanation text)

   - Metadata Analysis card (camera icon, key-value rows, red flag pills)

   - Manipulation Scan card (two thumbnails side by side, score pill)

   - Source Trace card (domain/date pill, "view original" button, or empty state text)

   - Red Flags card (icon rows with warning dots)

   - Limitations footer text

   - "Analyze another" button

Use dummy/placeholder data for now to show all states. No backend needed yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ebbe554c-4502-4dc1-8444-ed50d654c8e3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
