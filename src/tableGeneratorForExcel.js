const tableGenerator = (project) => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  const tasks = project.getTodoTasks();
  const tasksArray = [];

  for (const t in tasks) {
    tasksArray.push(tasks[t]);
  }
  // Create headers
  const row = document.createElement("tr");

  for (const [key, value] of Object.entries(tasksArray[0])) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${key}`);

    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tableBody.appendChild(row);

  for (let i = 0; i < tasksArray.length; i++) {
    const row = document.createElement("tr");
    const task = tasksArray[i];

    for (const [key, value] of Object.entries(task)) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${value}`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);

  return table;
};

const toCSV = (table) => {
  const rows = table.querySelectorAll("tr");
  return [].slice
    .call(rows)
    .map((row) => {
      // Query all cells
      const cells = row.querySelectorAll("th,td");
      return [].slice
        .call(cells)
        .map((cell) => cell.textContent)
        .join(",");
    })
    .join("\n");
};

const download = (text, fileName) => {
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`
  );
  link.setAttribute("download", fileName);

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export { tableGenerator, toCSV, download };
