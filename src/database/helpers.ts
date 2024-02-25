import { database } from '.'
import Stock from './model/Stock'
import { type Model, Q } from '@nozbe/watermelondb'

export const saveStock = async (
    stock: any,
    onUploadSuccess: () => void
): Promise<void> => {
    await database
        .write(async () => {
            const newStock = await database.collections
                .get<Stock>('Stocks')
                .create((entry) => {
                    entry.created_at = new Date()
                    entry.symbol_name = stock.symbol_name
                    entry.listed_at = stock.listed_at
                    entry.description = stock.description
                    entry.target_price = stock.target_price
                    entry.analysis_image = stock.analysis_image
                    entry.current_price=stock.current_price
                })
            console.log('Stock successfully created ', newStock)
        })
        .then((res) => {
            onUploadSuccess()
        })
}


export const fetchStocks = async (): Promise<Model[]> =>
    await database.collections
        .get('Stocks')
        .query()
        .fetch()