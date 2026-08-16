# TaskFlow — Smart To-Do Manager

**She Innovates Full Stack Internship — Task 6**

## Overview

TaskFlow is a fully functional, front-end-only to-do list application built with plain HTML, CSS, and JavaScript. It goes beyond a basic to-do tutorial by implementing complete CRUD operations, persistent storage, live search, combinable filters, sorting, form validation, and a small statistics dashboard — all without any framework, library, or backend.

## Features

- Add tasks with a title, optional description, priority (High/Medium/Low), and due date
- Edit any existing task in place, using the same form used to create tasks
- Mark tasks complete/active with a single click, with the state persisted
- Delete individual tasks (with a confirmation prompt) or clear all completed tasks at once
- Live search across task titles and descriptions as you type
- Filter by status (All/Active/Completed) and by priority, combinable with search
- Sort by newest first, oldest first, or priority
- Dashboard showing total, active, completed, and high-priority task counts, updated dynamically
- Client-side validation with inline error messages (required title, length limits, valid date)
- Fully responsive layout for desktop, tablet, and mobile
- Toast notifications for add/update/delete/clear actions
- Data persists in `localStorage` — tasks survive refreshes and browser restarts

## Technologies

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6+)
- Browser `localStorage` API

No frameworks, no build tools, no backend. Open `index.html` directly in a browser.

## CRUD Implementation

- **Create** — `addTask()` builds a task object (`id`, `title`, `description`, `priority`, `dueDate`, `completed`, `createdAt`), pushes it into the in-memory `tasks` array, then calls `saveTasks()` and `renderTasks()`.
- **Read** — `renderTasks()` reads from the `tasks` array (after search/filter/sort are applied) and builds task cards using safe DOM methods (`textContent`, `createElement`) rather than string-based HTML injection.
- **Update** — Clicking the edit icon calls `startEditTask()`, which pre-fills the form and switches it into "edit mode." Submitting the form then calls `updateTask(id, updates)`, which mutates the matching task object and re-saves/re-renders.
- **Delete** — `deleteTask(id)` filters the task out of the array; `clearCompletedTasks()` removes every completed task in one action.

## Local Storage

Every mutation (`addTask`, `updateTask`, `deleteTask`, `toggleTask`, `clearCompletedTasks`) calls `saveTasks()`, which serializes the `tasks` array with `JSON.stringify()` and writes it to `localStorage` under the key `taskflow_tasks_v1`. On page load, `loadTasks()` reads that key with `localStorage.getItem()`, parses it with `JSON.parse()`, and restores it into the `tasks` array before the first render. The array in memory is always treated as the source of truth; localStorage is just where it's persisted.

```
User Action → JavaScript handler → tasks array → saveTasks() → localStorage → renderTasks() → UI
```

## Search and Filtering

- `searchTasks(tasks, term)` lowercases the query and checks it against each task's title and description using `String.includes()`.
- `filterTasks(tasks, status, priority)` applies the status filter (all/active/completed) and priority filter (all/high/medium/low) together using `Array.filter()`.
- `sortTasks(tasks, strategy)` sorts a copy of the array by creation date or by a priority rank map.
- `getVisibleTasks()` chains all three together, so search, both filters, and sort always apply simultaneously (e.g. searching "report" + Completed + High priority narrows to only tasks matching all three).

## Responsive Design

The layout uses CSS Grid for the two-column desktop view (form + task list) and the four-card stats row. Media queries collapse the stats grid and the main layout to a single column under 860px, stack the search/filter toolbar under 560px, and switch the form's two-column row (priority/due date) to one column under 480px, so the form, cards, and controls all stay usable down to small phone widths.

## How to Run

1. Download or clone this folder.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari) — either by double-clicking it or via a local dev server.
3. No build step, no `npm install`, no server required.

## How to Test

1. Add a task with just a title.
2. Add a task with title, description, priority, and due date.
3. Try submitting an empty title — confirm the inline validation error appears.
4. Edit a task and save the changes.
5. Mark a task complete, then switch it back to active.
6. Delete a single task and confirm the prompt works.
7. Add a few tasks, mark some complete, then click "Clear completed."
8. Type in the search box and confirm the list narrows live.
9. Combine a search term with the status and priority filters.
10. Change the sort order and confirm the list re-orders.
11. Refresh the browser and confirm all tasks are still there.
12. Resize the window (or open dev tools device toolbar) to check tablet and mobile layouts.

## Learning Outcomes

This project demonstrates:

- DOM manipulation using safe, non-`innerHTML` techniques for user content
- Event handling (`submit`, `click`, `input`, `change`)
- Full CRUD logic on an in-memory array synced to `localStorage`
- `JSON.stringify` / `JSON.parse` for structured persistence
- Array methods (`filter`, `map`, `sort`, `find`) and string methods (`includes`, `trim`, `toLowerCase`)
- Client-side form validation with user-facing error messages
- Building a responsive UI with CSS Grid, Flexbox, and media queries
