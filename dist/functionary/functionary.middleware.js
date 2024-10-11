"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionaryMiddleware = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
let functionaryMiddleware = class functionaryMiddleware {
    use(req, res, next) {
        const validData = zod_1.z.object({
            name: zod_1.z.string().min(2, 'O nome deve conter mais de 2 caracteres'),
            cpf: zod_1.z
                .string()
                .length(11, 'O CPF deve ter 11 dígitos')
                .refine((val) => /^\d+$/.test(val), {
                message: 'O CPF deve conter apenas números',
            }),
            happyday: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
                message: 'A data deve ser no formato válido',
            }),
            tell: zod_1.z
                .number()
                .min(100000000, 'O número de telefone deve ter pelo menos 9 dígitos'),
            role: zod_1.z.string().min(1, 'O papel deve ser informado'),
            address: zod_1.z.object({
                num: zod_1.z.number().positive(),
                street: zod_1.z.string().min(1),
                cep: zod_1.z
                    .string()
                    .refine((val) => /^[0-9]{5}-[0-9]{3}$/.test(val), {
                    message: 'O CEP deve estar no formato 12345-678',
                })
                    .or(zod_1.z.string().length(8, 'O CEP deve ter exatamente 8 dígitos')),
                complement: zod_1.z.string().optional().nullable(),
            }),
        });
        try {
            const validateData = validData.parse(req.body);
            req.body = validateData;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                throw new common_1.BadRequestException({
                    message: 'Erro ao criar o usuário',
                    errors: error.errors.map((e) => ({
                        path: e.path,
                        message: e.message,
                    })),
                });
            }
            throw new common_1.BadRequestException({
                message: 'Erro ao criar o usuário',
                errors: error.errors.map((e) => ({
                    path: e.path,
                    message: e.message,
                })),
            });
        }
    }
};
exports.functionaryMiddleware = functionaryMiddleware;
exports.functionaryMiddleware = functionaryMiddleware = __decorate([
    (0, common_1.Injectable)()
], functionaryMiddleware);
//# sourceMappingURL=functionary.middleware.js.map