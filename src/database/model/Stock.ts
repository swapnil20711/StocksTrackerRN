import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Stock extends Model {
    static table = 'Stocks'

    @date('created_at')
    created_at!: Date

    @field('symbol_name')
    symbol_name!: string

    @field('current_price')
    current_price!: number

    @field('listed_at')
    listed_at!: string

    @field('target_price')
    target_price!: number

    @field('description')
    description!: string

    @field('analysis_image')
    analysis_image!: string
}