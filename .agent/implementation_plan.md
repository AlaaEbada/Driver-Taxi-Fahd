# Debugging and Fix Plan: Aligning with Reference Project

Based on the analysis of the reference project (`italy-driver-connect-nextjs`) and the current failing project (`italy-driver-connect-nextjs - V2`), the following discrepancies were identified and will be corrected.

## 1. Analysis of Discrepancies

### `postcss.config.mjs`
- **Reference:** Simple configuration using `@tailwindcss/postcss` without options.
- **Current (V2):** Modified to explicitly pass the config path.
- **Action:** Revert to the reference implementation to avoid potential conflicts with the `@config` directive in CSS.

### `src/app/globals.css`
- **Reference:** Includes `@config "../../tailwind.config.ts";` to explicitly link the Tailwind configuration.
- **Current (V2):** This line was removed, causing Tailwind to lose access to custom theme tokens (like `border-border`, `bg-background`), resulting in build errors.
- **Action:** Restore the `@config` directive. The previous path resolution error might have been a transient issue or a side effect of the mismatch between `postcss.config.mjs` and the CSS directive.

### Font Configuration
- **User Request:** Use `Tajawal` font.
- **Reference:** Uses `Cairo`.
- **Action:** Maintain the switch to `Tajawal` in `tailwind.config.ts`, `globals.css`, and layout files while ensuring the rest of the configuration matches the reference structure.

## 2. Implementation Steps

1.  **Revert `postcss.config.mjs`**: Restore it to the clean state found in the reference project.
2.  **Restore `src/app/globals.css`**:
    - Add back `@config "../../tailwind.config.ts";`.
    - Keep `@import "tailwindcss";`.
    - Restore the `@layer base` and `@layer components` structure from the reference.
    - **Crucially**: Ensure the `font-family` uses `var(--font-tajawal)` instead of `cairo`.
3.  **Verify `tailwind.config.ts`**: Ensure it is correctly set up to export the configuration that `globals.css` will reference.
4.  **Clean and Rebuild**: Delete `.next` cache and run the dev server.

## 3. Verification

After applying these changes, we will run `npm run dev`. The expected outcome is:
- The build will succeed (no "unknown utility class" errors).
- The site will load with the **Tajawal** font.
- The styling will match the reference design system (Luxury Navy & Gold).
