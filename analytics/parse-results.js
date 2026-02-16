const fs = require("fs");
const path = require("path");

// Folder containing all mochawesome JSON files
const reportsDir = path.join(__dirname, "reports");

// Output CSV file
const csvFile = path.join(__dirname, "test-results.csv");

// Number of days to simulate
const daysToSimulate = 30;

// Read all JSON files in the reports folder
const reportFiles = fs.readdirSync(reportsDir).filter(f => f.endsWith(".json"));

if (reportFiles.length === 0) {
  console.error("No mochawesome JSON files found in", reportsDir);
  process.exit(1);
}

const allData = [];

// Load all JSON files
for (const file of reportFiles) {
  const filePath = path.join(reportsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath));
  allData.push(data);
}

// Prepare CSV rows
const rows = [];

for (let dayOffset = 0; dayOffset < daysToSimulate; dayOffset++) {
  const fakeDate = new Date();
  fakeDate.setDate(fakeDate.getDate() - dayOffset);
  const dateString = fakeDate.toISOString().split("T")[0]; // YYYY-MM-DD

  allData.forEach(report => {
    report.results.forEach(result => {
      const specFile = path.basename(result.file); // just filename
      result.suites.forEach(suite => {
        suite.tests.forEach(test => {
          // Slight variation to duration for realism
          const variation = Math.random() * 100 - 50; // ±50ms
          const duration = Math.max(0, test.duration + variation);

          rows.push({
            date: dateString,
            spec: specFile,
            test_name: test.title,
            duration_ms: Math.round(duration),
            status: test.state
          });
        });
      });
    });
  });
}

// Convert rows to CSV format
const csvRows = rows.map(r =>
  `${r.date},${r.spec},${r.test_name},${r.duration_ms},${r.status}`
).join("\n");

// Overwrite CSV (with header)
const csvContent = "date,spec,test_name,duration_ms,status\n" + csvRows;
fs.writeFileSync(csvFile, csvContent);

console.log(`✅ CSV overwritten with ${daysToSimulate} days of test runs from ${reportFiles.length} feature files!`);
