# Tip Calculator

## 1. 🚀 How to run

### Requirements
- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git (optional)

### Steps to run locally

1. Clone the repository:
```bash
git clone https://github.com/kashaf955/Tip-Calculator.git
```

2. Move into project directory:
```bash
cd your-repo-name
```

3. Install dependencies:
```bash
npm install
```

4. Start development server (Vite):
```bash
npm run dev
```

5. Open in browser:
```
http://localhost:5173
```

### Deployed URL
https://tip-calculator-pi-amber.vercel.app/



## 2. Stack & Design Choices

### Why React + Vite?

I used React with Vite because the project requires real-time UI updates and fast interaction handling. React’s state management makes it easy to instantly update calculations as the user types, while Vite provides a lightweight and fast development environment with instant hot module replacement.



### Design Decision 1: Live Updating Output Panel

I designed the output panel to update automatically without a “Calculate” button. This improves usability because users can instantly see how changes in bill amount, tip percentage, or number of people affect the final split. This reduces friction and makes the app feel more interactive.

**Where it applies:**
- Output panel showing:
  - Tip Amount
  - Grand total
  - Per-person amount



### Design Decision 2: Preset + Custom Tip System

I implemented both preset buttons (10%, 15%, 20%) and a custom input field. Only one active state is allowed at a time. This gives users quick access to common values while still allowing flexibility.

**Where it applies:**
- Tip selection section (buttons + custom input)
- Active highlight state for selected preset



## 3. Responsive & Accessibility

### Responsive behavior

- **360px mobile:**
  - Layout stacks vertically
  - Inputs become full width
  - Output panel moves below inputs for better scrolling
  - Buttons are optimized for touch interaction

- **1440px desktop:**
  - Layout is centered with fixed max-width
  - Inputs and output appear side-by-side or in structured sections
  - Spacing is increased for readability



### Accessibility consideration (implemented)

- All inputs have clear labels (bill, tip %, number of people)
- Keyboard navigation works using proper tab order
- Focus states are visible for interactive elements (buttons and inputs)



### Accessibility consideration (skipped)

I did not implement full ARIA live region announcements for dynamically changing results. The scope of the project focused on UI responsiveness and interaction logic, and values update visually in real time without requiring screen reader announcements.



## 4.  AI Usage

### Where I used AI

- Suggested UI layout patterns (card layout, input grouping, responsive structure
- Helped improve wording for README and documentation



### What I changed from AI output (important)

AI initially suggested using fixed grid columns for input layout (e.g., 3-column layout for all screens). I modified this to a **flexible responsive layout using flexbox and auto-wrapping**, so that on small screens (360px) inputs stack vertically instead of shrinking or overflowing.

This improved usability significantly on mobile devices and prevented layout breaking on smaller viewports.



## 5. ⚠️ Honest Gap (What can be improved)

One area that is not fully polished is **advanced edge-case UX handling**, especially for extremely large numbers or rapid input changes.

### Current limitation:
- Very large numeric inputs can slightly affect layout spacing
- Rapid typing in multiple fields simultaneously can occasionally feel visually heavy due to continuous recalculation

### How I would improve it with more time:
- Add debouncing to input handling to reduce unnecessary re-renders
- Add better formatting for large numbers (e.g., commas: 1,000,000)
- Improve animation transitions for output updates to make changes feel smoother
- Add more robust validation UX (inline suggestions instead of only error text)

