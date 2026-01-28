# Design System Architecture

## Структура

```
src/
 ├─ styles/
 │   ├─ tokens/          # Design tokens (single source of truth)
 │   │   ├─ colors.ts
 │   │   ├─ typography.ts
 │   │   ├─ spacing.ts
 │   │   ├─ radii.ts
 │   │   ├─ shadows.ts
 │   │   ├─ transitions.ts
 │   │   └─ index.ts
 │   ├─ globals.scss     # Global styles
 │   └─ reset.scss       # CSS reset
 ├─ mui/
 │   ├─ theme.ts         # MUI theme adapter
 │   ├─ componentOverrides.ts
 │   └─ index.ts
 └─ components/
     └─ Button/          # Example abstraction component
```

## Рівні архітектури

### РІВЕНЬ 1 — Design Tokens (незалежні від MUI)

- **colors.ts** — всі кольори проекту
- **typography.ts** — типографіка, шрифти, розміри
- **spacing.ts** — відступи та відстані
- **radii.ts** — радіуси закруглень
- **shadows.ts** — тіні та елевації
- **transitions.ts** — анімації та переходи

**Переваги:**

- Легко замінити MUI без втрати дизайну
- Single source of truth
- Type-safe з TypeScript

### РІВЕНЬ 2 — MUI Theme (adapter layer)

- **theme.ts** — мапить design tokens на MUI theme
- **componentOverrides.ts** — кастомізація MUI компонентів

**Переваги:**

- MUI використовує наші tokens
- Легко замінити MUI — просто змінити theme.ts

### РІВЕНЬ 3 — Custom Components (поверх MUI)

- **Button** — абстракція над MUI Button
- Можна замінити реалізацію без зміни використання

**Переваги:**

- Абстракція від конкретної бібліотеки
- Легка заміна без рефакторингу всього UI

## Використання

### Design Tokens (TypeScript)

```typescript
import { colors, typography, spacing } from "@/styles/tokens";

const style = {
  color: colors.text.primary,
  fontSize: typography.fontSizes.lg,
  padding: spacing[4],
};
```

### MUI Theme

```typescript
import { theme } from '@/mui';
import { ThemeProvider } from '@mui/material/styles';

<ThemeProvider theme={theme}>
  {/* Your app */}
</ThemeProvider>
```

### Custom Components

```typescript
import { Button } from '@/components';

<Button variant="contained" color="primary">
  Click me
</Button>
```

### SCSS (для layout/grid/responsive)

```scss
// Використовуй SCSS для:
// - Layout
// - Grid систем
// - Responsive дизайну
// - Сторінок
// - Нестандартних компонентів

.my-component {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-unit);
}
```

## Коли використовувати що

✅ **Design Tokens** — для кольорів, типографіки, spacing
✅ **MUI Theme** — для базових UI компонентів
✅ **SCSS** — для layout, grid, responsive, сторінок
✅ **Custom Components** — для абстракції над UI бібліотеками

❌ **НЕ використовуй SCSS** для базових UI (Button, Input) — це має бути в tokens + theme

## Заміна MUI

Щоб замінити MUI на іншу бібліотеку:

1. Створи новий theme адаптер (наприклад, `src/chakra/theme.ts`)
2. Онови компоненти (Button, Input тощо) для використання нової бібліотеки
3. Design tokens залишаються незмінними
4. Решта коду працює без змін
