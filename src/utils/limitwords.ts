function limitWords(text: string, maxChars: number): string {
  if (text.length > maxChars) {
    return text.substring(0, maxChars) + "..."; // Truncate and add ellipsis
  }
  return text; // Return the original text if it's within the limit
}

export default limitWords;
