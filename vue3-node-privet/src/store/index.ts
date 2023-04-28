import { defineStore } from 'pinia'
export const useProductStore = defineStore('product', {
    state: () => ({
        tableData: {
            "items": [],
            "count": 0
        }
    }),
    getters: {
        getTableData(state) {
            return state.tableData.items
        },
    },
    actions: {
        async fetchTableData(endpoint) {
            await fetch(`http://localhost:3000/${endpoint}`)
                .then((res) => res.json())
                .then((res) => this.tableData = res)
                .then((res) => console.log(res))
                .catch(() => console.log('Ошибка получения данных с сервера'))
            // фетчинг данных с адреса сервера ноды. 
        }
    }
})