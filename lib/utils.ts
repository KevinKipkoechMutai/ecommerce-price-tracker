export function extractPrice(...elements: any) {
    // loop through elements and search for item price in the text
    for (const element of elements) {
        const priceText = element.text().trim()

        if (priceText) return priceText.replace(/[^\d]/g, '')
    }
    return ''
}