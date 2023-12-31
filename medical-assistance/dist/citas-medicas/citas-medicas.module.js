"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitasMedicasModule = void 0;
const common_1 = require("@nestjs/common");
const citas_medicas_service_1 = require("./citas-medicas.service");
const citas_medicas_controller_1 = require("./citas-medicas.controller");
const database_service_1 = require("../database.service");
let CitasMedicasModule = class CitasMedicasModule {
};
CitasMedicasModule = __decorate([
    (0, common_1.Module)({
        controllers: [citas_medicas_controller_1.CitasMedicasController],
        providers: [citas_medicas_service_1.CitasMedicasService, database_service_1.DatabaseService]
    })
], CitasMedicasModule);
exports.CitasMedicasModule = CitasMedicasModule;
//# sourceMappingURL=citas-medicas.module.js.map