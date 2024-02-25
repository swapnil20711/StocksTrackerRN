import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'Stocks',
            columns: [
                { name: 'created_at', type: 'number' },
                { name: 'symbol_name', type: 'string' },
                { name: 'listed_at', type: 'string' },
                { name: 'target_price', type: 'number' },
                { name: 'description', type: 'string' },
                { name: 'analysis_image', type: 'string' },
                { name: 'current_price', type: 'number' }
            ]
        })
    ]
})