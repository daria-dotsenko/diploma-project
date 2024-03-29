import httpService from "./http.service";
const operationsEndPoint = "operations/";

const operationsService = {
    createOperation: async (payload) => {
        const { data } = await httpService.put(operationsEndPoint + payload._id, payload);
        return data;
    },
    getOperations: async () => {
        const { data } = await httpService.get(operationsEndPoint);
        return data;
    },
    getCurrentOperation: async (id) => {
        const { data } = await httpService.get(operationsEndPoint + id);
        return data;
    },
    removeOperation: async (operationId) => {
        const { data } = await httpService.delete(operationsEndPoint + operationId);
        return data;
    },
    updateOperation: async (payload) => {
        const { data } = await httpService.patch(
            operationsEndPoint + payload._id,
            payload
        );
        return data;
    }
};

export default operationsService;
