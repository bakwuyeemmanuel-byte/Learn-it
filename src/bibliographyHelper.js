// Learn It - Bibliography Formatting Helper (File 7)

/**
 * Core Logic Engine: Formats resource parameters into academic citation strings.
 * @param {object} source - Contains author, title, publisher, year details
 * @param {string} style - "MLA" or "APA"
 */
function generateCitation(source, style = "MLA") {
    const { lastName, firstName, title, publisher, year } = source;
    
    if (!lastName || !title || !year) {
        return "⚠️ Error: Missing critical citation metadata (Author, Title, or Year).";
    }

    if (style === "MLA") {
        // MLA Format: LastName, FirstName. Title. Publisher, Year.
        return `${lastName}, ${firstName}. *${title}*. ${publisher || "n.p."}, ${year}.`;
    } else if (style === "APA") {
        // APA Format: LastName, F. (Year). Title. Publisher.
        const initial = firstName ? `${firstName.charAt(0)}.` : "";
        return `${lastName}, ${initial} (${year}). *${title}*. ${publisher || "Publisher unknown"}.`;
    }

    return "⚠️ Error: Unsupported academic citation style requested.";
}

export { generateCitation };
