# Alpha Announcement Widget

A one-time announcement widget that shows context to alpha test users based on their localStorage state.

**User states:**
- **New user** (no `crosslex:seen_build` in localStorage): full-page overlay blocks the app until the user clicks the CTA.
- **Returning user on a new build** (`crosslex:seen_build` value ≠ `CURRENT_BUILD_ID`): dismissible card at bottom-right.
- **Returning user, same build**: nothing renders.

**Files:**
```
frontend/widgets/src/Crosslex/AlphaAnnouncement/
├── changelog.ts          ← edit this for every new build
├── AlphaAnnouncement.tsx ← orchestrator, reads localStorage
├── NewUserOverlay.tsx    ← full-page overlay for first-time visitors
└── ReturningUserCard.tsx ← card for returning visitors on a new build
```

**To cut a new build:**
1. Open `changelog.ts`
2. Update `CURRENT_BUILD_ID` to a new string, e.g. `'alpha-2026-05-11'`
3. Add a matching entry to `CHANGELOG`:
   ```ts
   'alpha-2026-05-11': {
     newUser: { heading: '...', body: '...', cta: "Let's go →" },
     returningUser: {
       heading: "You're back — something's new",
       body: 'Here is what changed.',
       changes: ['Added X', 'Fixed Y'],
     },
   },
   ```
4. Commit. No env vars, no Vite config changes needed.

**localStorage key:** `crosslex:seen_build` — stores the last acknowledged build ID.

**Before merging any feature branch:** update `changelog.ts` as described above so returning alpha users are notified of the change. Treat it as part of the feature work, not an afterthought.
