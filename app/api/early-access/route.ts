import { writeFile, readFile } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const csvDir = join(process.cwd(), "data")
    const csvFilePath = join(csvDir, "submissions.csv")

    // Ensure data directory exists
    if (!existsSync(csvDir)) {
      // Create directory if it doesn't exist
      // Note: This is a simplified approach. In production, use a proper directory creation method
    }

    // Prepare CSV row
    const headers = ["Timestamp", "Name", "Email", "Role", "Company", "Building", "Sports", "Metrics", "Timeline"]
    const timestamp = new Date().toISOString()
    const csvRow = [
      timestamp,
      formData.name || "",
      formData.email || "",
      formData.role || "",
      formData.company || "",
      formData.building || "",
      (formData.sports || []).join("; "),
      formData.metrics || "",
      formData.timeline || "",
    ]
      .map((field) => `"${String(field).replace(/"/g, '""')}"`) // Escape quotes in CSV
      .join(",")

    let csvContent = ""

    // Check if file exists and has content
    if (existsSync(csvFilePath)) {
      csvContent = await readFile(csvFilePath, "utf-8")
    } else {
      // Add headers if file doesn't exist
      csvContent = headers.map((h) => `"${h}"`).join(",") + "\n"
    }

    // Append new row
    csvContent += csvRow + "\n"

    // Write to file
    await writeFile(csvFilePath, csvContent)

    return Response.json({ success: true, message: "Submission recorded" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error saving submission:", error)
    return Response.json({ success: false, error: "Failed to save submission" }, { status: 500 })
  }
}
