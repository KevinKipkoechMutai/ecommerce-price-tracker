import Product from "@/lib/models/product.model"
import { connectToDB } from "@/lib/mongoose"
import { scrapeAmazonProduct } from "@/lib/scraper"

export async function GET() {
    try {
        connectToDB()

        const products = await Product.find({})

        if (!products) throw new Error('No products found')

        const updatedProducts = await Promise.all(
            products.map(async (currentProduct) => {
                const scrapedProduct = await scrapeAmazonProduct(currentProduct.url)

                if (!scrapedProduct) throw new Error('No product found')

                const updatedPriceHistory = [
                    
                ]

            })
        )


    } catch (error: any) {
        throw new Error(`Error in GET: ${error}`)
    }
}