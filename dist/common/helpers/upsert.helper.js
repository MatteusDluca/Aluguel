"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrUpdate = createOrUpdate;
async function createOrUpdate(model, where, createData) {
    let record = await model.findUnique({ where });
    if (!record) {
        record = await model.create({ data: createData });
    }
    return record;
}
//# sourceMappingURL=upsert.helper.js.map