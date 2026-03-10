
export async function executeCode(language, code, input = "") {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/execute`, { // backend endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code, input }),
    });

    const data = await response.json();

    if (data.error) {
      return { success: false, error: data?.error };
    }

    return { success: true, output: data?.output || "No output" };
  } catch (err) {
    return { success: false, error: err?.message };
  }
}