/* =============================================================
   TaskFlow — Smart To-Do Manager
   Vanilla JavaScript — CRUD + localStorage + search + filter + sort
   ============================================================= */

/* ---------- Constants ---------- */
const STORAGE_KEY = "taskflow_tasks_v1";
const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 80;
const DESC_MAX_LENGTH = 240;

/* ---------- State ----------
   tasks: the single source of truth (array of objects).
   Everything on screen is derived from this array + localStorage. */
let tasks = [];
let editingTaskId = null; // null = "create mode", otherwise the id being edited

/* ---------- DOM references ---------- */
const taskForm = document.getElementById("taskForm");
const taskIdField = document.getElementById("taskId");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const priorityInput = document.getElementById("priorityInput");
const dueDateInput = document.getElementById("dueDateInput");

const titleError = document.getElementById("titleError");
const descError = document.getElementById("descError");
const dateError = document.getElementById("dateError");
const formFeedback = document.getElementById("formFeedback");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");
const sortSelect = document.getElementById("sortSelect");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

const taskListEl = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const emptyTitle = document.getElementById("emptyTitle");
const emptySub = document.getElementById("emptySub");
const resultsSummary = document.getElementById("resultsSummary");

const statTotal = document.getElementById("statTotal");
const statActive = document.getElementById("statActive");
const statCompleted = document.getElementById("statCompleted");
const statHigh = document.getElementById("statHigh");
const ringFillTotal = document.getElementById("ringFillTotal");
const RING_CIRCUMFERENCE = 163.36; // 2 * PI * r(26)

const toastEl = document.getElementById("toast");
const todayPill = document.getElementById("todayPill");

/* =============================================================
   LOCAL STORAGE  (saveTasks / loadTasks)
   ============================================================= */

/** Persist the current `tasks` array to localStorage as JSON. */
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    // localStorage can fail (e.g. private browsing, quota exceeded)
    showToast("Could not save to local storage.", "error");
    console.error("saveTasks failed:", err);
  }
}

/** Load tasks from localStorage into the `tasks` array. */
function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    tasks = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    tasks = Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("loadTasks failed to parse stored data:", err);
    tasks = [];
  }
}

/* =============================================================
   CRUD OPERATIONS
   ============================================================= */

/** Create a new task object and add it to the tasks array. */
function addTask(title, description, priority, dueDate) {
  const newTask = {
    id: generateId(),
    title: title.trim(),
    description: description.trim(),
    priority: priority,
    dueDate: dueDate || "",
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

/** Update an existing task's fields by id. */
function updateTask(id, updates) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  task.title = updates.title.trim();
  task.description = updates.description.trim();
  task.priority = updates.priority;
  task.dueDate = updates.dueDate || "";

  saveTasks();
  renderTasks();
}

/** Remove a task permanently. */
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

/** Flip a task between completed / active. */
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

/** Remove every completed task in one go. */
function clearCompletedTasks() {
  const completedCount = tasks.filter((t) => t.completed).length;
  if (completedCount === 0) {
    showToast("No completed tasks to clear.", "error");
    return;
  }
  tasks = tasks.filter((t) => !t.completed);
  saveTasks();
  renderTasks();
  showToast(`Cleared ${completedCount} completed task${completedCount > 1 ? "s" : ""}.`, "success");
}

/* =============================================================
   SEARCH + FILTER + SORT
   ============================================================= */

/** Return only tasks whose title or description match the search term. */
function searchTasks(taskArray, term) {
  const query = term.trim().toLowerCase();
  if (!query) return taskArray;

  return taskArray.filter((t) => {
    const inTitle = t.title.toLowerCase().includes(query);
    const inDesc = t.description.toLowerCase().includes(query);
    return inTitle || inDesc;
  });
}

/** Apply status + priority filters to a task array. */
function filterTasks(taskArray, status, priority) {
  return taskArray.filter((t) => {
    const matchesStatus =
      status === "all" ||
      (status === "active" && !t.completed) ||
      (status === "completed" && t.completed);

    const matchesPriority = priority === "all" || t.priority === priority;

    return matchesStatus && matchesPriority;
  });
}

/** Sort a task array according to the chosen strategy. Returns a new array. */
function sortTasks(taskArray, strategy) {
  const priorityRank = { high: 0, medium: 1, low: 2 };
  const copy = [...taskArray];

  if (strategy === "newest") {
    copy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (strategy === "oldest") {
    copy.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (strategy === "priority") {
    copy.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
  }
  return copy;
}

/** Combine search + filter + sort using the current control values. */
function getVisibleTasks() {
  let result = [...tasks];
  result = searchTasks(result, searchInput.value);
  result = filterTasks(result, statusFilter.value, priorityFilter.value);
  result = sortTasks(result, sortSelect.value);
  return result;
}

/* =============================================================
   STATISTICS
   ============================================================= */

/** Recalculate and render the dashboard numbers. Never hardcoded. */
function updateStatistics() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const high = tasks.filter((t) => t.priority === "high" && !t.completed).length;

  statTotal.textContent = total;
  statActive.textContent = active;
  statCompleted.textContent = completed;
  statHigh.textContent = high;

  const progress = total === 0 ? 0 : completed / total;
  const offset = RING_CIRCUMFERENCE - progress * RING_CIRCUMFERENCE;
  ringFillTotal.style.strokeDashoffset = offset;
}

/* =============================================================
   RENDERING
   ============================================================= */

/** Build one task card element. Uses textContent to avoid unsafe HTML injection. */
function createTaskCard(task) {
  const card = document.createElement("div");
  card.className = `task-card priority-${task.priority}${task.completed ? " completed" : ""}`;
  card.dataset.id = task.id;

  // Checkbox
  const check = document.createElement("button");
  check.type = "button";
  check.className = `task-check${task.completed ? " checked" : ""}`;
  check.setAttribute("aria-label", task.completed ? "Mark as active" : "Mark as completed");
  check.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none"><path d="M4 12.5l5 5L20 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  check.addEventListener("click", () => toggleTask(task.id));

  // Body
  const body = document.createElement("div");
  body.className = "task-body";

  const top = document.createElement("div");
  top.className = "task-top";

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title; // safe: textContent, not innerHTML

  top.appendChild(title);
  body.appendChild(top);

  if (task.description) {
    const desc = document.createElement("p");
    desc.className = "task-desc";
    desc.textContent = task.description; // safe
    body.appendChild(desc);
  }

  const meta = document.createElement("div");
  meta.className = "task-meta";

  const badge = document.createElement("span");
  badge.className = `badge badge-${task.priority}`;
  badge.textContent = task.priority;
  meta.appendChild(badge);

  if (task.dueDate) {
    const dateSpan = document.createElement("span");
    const overdue = !task.completed && isOverdue(task.dueDate);
    dateSpan.className = `meta-date${overdue ? " overdue" : ""}`;
    dateSpan.textContent = `Due ${formatDate(task.dueDate)}`;
    meta.appendChild(dateSpan);
  }

  const createdSpan = document.createElement("span");
  createdSpan.className = "meta-date";
  createdSpan.textContent = `Added ${formatDate(task.createdAt)}`;
  meta.appendChild(createdSpan);

  body.appendChild(meta);

  // Actions
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "icon-btn edit-btn";
  editBtn.setAttribute("aria-label", "Edit task");
  editBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M4 20h4l11-11-4-4L4 16v4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
  editBtn.addEventListener("click", () => startEditTask(task.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "icon-btn delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0-1 13a1 1 0 01-1 1H8a1 1 0 01-1-1L6 7h12z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  deleteBtn.addEventListener("click", () => {
    if (confirm(`Delete "${task.title}"? This cannot be undone.`)) {
      deleteTask(task.id);
      showToast("Task deleted.", "success");
    }
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  card.appendChild(check);
  card.appendChild(body);
  card.appendChild(actions);

  return card;
}

/** Re-render the task list based on current search/filter/sort state. */
function renderTasks() {
  const visible = getVisibleTasks();

  taskListEl.innerHTML = "";

  if (tasks.length === 0) {
    emptyState.hidden = false;
    taskListEl.hidden = true;
    emptyTitle.textContent = "No tasks yet";
    emptySub.textContent = "Add your first task above to get started.";
  } else if (visible.length === 0) {
    emptyState.hidden = false;
    taskListEl.hidden = true;
    emptyTitle.textContent = "No matching tasks";
    emptySub.textContent = "Try a different search term or filter combination.";
  } else {
    emptyState.hidden = true;
    taskListEl.hidden = false;
    visible.forEach((task) => taskListEl.appendChild(createTaskCard(task)));
  }

  resultsSummary.textContent =
    tasks.length === 0
      ? "Nothing added yet"
      : `Showing ${visible.length} of ${tasks.length} task${tasks.length > 1 ? "s" : ""}`;

  updateStatistics();
}

/* =============================================================
   FORM HANDLING (create + update share one form)
   ============================================================= */

/** Validate the form. Returns true if valid; shows inline errors otherwise. */
function validateForm(title, description, dueDate) {
  let isValid = true;

  titleError.textContent = "";
  descError.textContent = "";
  dateError.textContent = "";
  titleInput.classList.remove("invalid");
  descInput.classList.remove("invalid");

  if (title.trim().length === 0) {
    titleError.textContent = "Title is required.";
    titleInput.classList.add("invalid");
    isValid = false;
  } else if (title.trim().length < TITLE_MIN_LENGTH) {
    titleError.textContent = `Title should be at least ${TITLE_MIN_LENGTH} characters.`;
    titleInput.classList.add("invalid");
    isValid = false;
  } else if (title.trim().length > TITLE_MAX_LENGTH) {
    titleError.textContent = `Title should be under ${TITLE_MAX_LENGTH} characters.`;
    titleInput.classList.add("invalid");
    isValid = false;
  }

  if (description.trim().length > DESC_MAX_LENGTH) {
    descError.textContent = `Description should be under ${DESC_MAX_LENGTH} characters.`;
    descInput.classList.add("invalid");
    isValid = false;
  }

  if (dueDate) {
    const parsed = new Date(dueDate);
    if (isNaN(parsed.getTime())) {
      dateError.textContent = "Enter a valid date.";
      isValid = false;
    }
  }

  return isValid;
}

/** Handle form submission for both create and update modes. */
function handleFormSubmit(event) {
  event.preventDefault();

  const title = titleInput.value;
  const description = descInput.value;
  const priority = priorityInput.value;
  const dueDate = dueDateInput.value;

  if (!validateForm(title, description, dueDate)) {
    formFeedback.textContent = "Please fix the highlighted fields.";
    formFeedback.classList.add("is-error");
    return;
  }

  if (editingTaskId) {
    updateTask(editingTaskId, { title, description, priority, dueDate });
    showToast("Task updated.", "success");
    exitEditMode();
  } else {
    addTask(title, description, priority, dueDate);
    showToast("Task added.", "success");
  }

  formFeedback.textContent = "";
  formFeedback.classList.remove("is-error");
  taskForm.reset();
  priorityInput.value = "medium";
  titleInput.focus();
}

/** Populate the form with an existing task and switch to edit mode. */
function startEditTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  editingTaskId = id;
  taskIdField.value = id;
  titleInput.value = task.title;
  descInput.value = task.description;
  priorityInput.value = task.priority;
  dueDateInput.value = task.dueDate || "";

  formTitle.textContent = "Edit task";
  submitBtn.textContent = "Save changes";
  cancelEditBtn.hidden = false;

  titleError.textContent = "";
  descError.textContent = "";
  dateError.textContent = "";
  titleInput.classList.remove("invalid");
  descInput.classList.remove("invalid");

  document.querySelector(".form-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  titleInput.focus();
}

/** Reset the form back to "create" mode. */
function exitEditMode() {
  editingTaskId = null;
  taskIdField.value = "";
  formTitle.textContent = "Add a task";
  submitBtn.textContent = "Add task";
  cancelEditBtn.hidden = true;
}

/* =============================================================
   HELPERS
   ============================================================= */

function generateId() {
  return `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatDate(isoOrDateString) {
  const d = new Date(isoOrDateString);
  if (isNaN(d.getTime())) return isoOrDateString;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function isOverdue(dueDateString) {
  const due = new Date(dueDateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return due < today;
}

let toastTimer = null;
function showToast(message, type) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.className = "toast show" + (type === "error" ? " toast-error" : type === "success" ? " toast-success" : "");
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

function renderTodayPill() {
  const today = new Date();
  todayPill.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric"
  });
}

/* =============================================================
   EVENT LISTENERS
   ============================================================= */

taskForm.addEventListener("submit", handleFormSubmit);
cancelEditBtn.addEventListener("click", () => {
  exitEditMode();
  taskForm.reset();
  priorityInput.value = "medium";
});

searchInput.addEventListener("input", renderTasks);
statusFilter.addEventListener("change", renderTasks);
priorityFilter.addEventListener("change", renderTasks);
sortSelect.addEventListener("change", renderTasks);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

/* =============================================================
   INIT
   ============================================================= */

function init() {
  loadTasks();
  renderTodayPill();
  renderTasks();
}

init();
