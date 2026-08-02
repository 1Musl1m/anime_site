class ApiService {
    private url: string = import.meta.env.VITE_API_URL;

    async fetchData<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${this.url}/${endpoint}`);

            if (!response.ok) {
                throw new Error(
                    `Ошибка: ${response.status} ${response.statusText}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("Ошибка при получении данных", error);
            throw error;
        }
    }

    getData(dataId: number) {
      return this.fetchData<{id: number; name: string}[]>
    }
}

export default ApiService;
