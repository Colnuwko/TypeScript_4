"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = void 0;
var transport;
(function (transport) {
    var types_doc;
    (function (types_doc) {
        types_doc["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        types_doc["driver_license"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(types_doc = transport.types_doc || (transport.types_doc = {}));
    var types_car;
    (function (types_car) {
        types_car["hetch"] = "\u0445\u0435\u0442\u0447\u0431\u044D\u043A";
        types_car["universal"] = "\u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    })(types_car = transport.types_car || (transport.types_car = {}));
    var clases_car;
    (function (clases_car) {
        clases_car["start"] = "start";
        clases_car["standart"] = "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        clases_car["premium"] = "\u043F\u0440\u0435\u043C\u0438\u0443\u043C";
        clases_car["luxary"] = "\u043B\u0443\u0445\u0430\u0440\u0438";
        clases_car["ultimate_plus_3000_gt_extra_sport"] = "\u0423\u043B\u0442\u0438\u043C\u0435\u0439\u0442 \u043F\u043B\u044E\u0441 300 \u0434\u0436\u0438\u0442\u0438 \u0435\u0445\u0442\u0440\u0430 \u0441\u043F\u043E\u0440\u0442";
    })(clases_car = transport.clases_car || (transport.clases_car = {}));
    var Vehicle = /** @class */ (function () {
        function Vehicle(_marka, _model, _years, _vin_num, _reg_num) {
            this._marka = _marka;
            this._model = _model;
            this._years = _years;
            this._vin_num = _vin_num;
            this._reg_num = _reg_num;
        }
        Object.defineProperty(Vehicle.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "marka", {
            get: function () {
                return this._marka;
            },
            set: function (value) {
                this._marka = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "years", {
            get: function () {
                return this._years;
            },
            set: function (value) {
                this._years = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "vin_num", {
            get: function () {
                return this._vin_num;
            },
            set: function (value) {
                this._vin_num = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "reg_num", {
            get: function () {
                return this._reg_num;
            },
            set: function (value) {
                this._reg_num = value;
            },
            enumerable: false,
            configurable: true
        });
        Vehicle.prototype.vehicleInfo = function () {
            return 'марка - ' + this._marka + '\n модель - ' + this._model + '\nгод выпуска - ' + this._years + '\nВин номер - ' + this._vin_num + '\nРегистрационный номер' + this._reg_num;
        };
        return Vehicle;
    }());
    transport.Vehicle = Vehicle;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(marka, model, years, vin_num, reg_num) {
            return _super.call(this, marka, model, years, vin_num, reg_num) || this;
        }
        Object.defineProperty(Car.prototype, "types", {
            get: function () {
                return this._types;
            },
            set: function (value) {
                this._types = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "class", {
            get: function () {
                return this._class;
            },
            set: function (value) {
                this.class = value;
            },
            enumerable: false,
            configurable: true
        });
        return Car;
    }(Vehicle));
    transport.Car = Car;
    var Motorbike = /** @class */ (function (_super) {
        __extends(Motorbike, _super);
        function Motorbike(marka, model, years, vin_num, reg_num) {
            return _super.call(this, marka, model, years, vin_num, reg_num) || this;
        }
        Object.defineProperty(Motorbike.prototype, "type_ram", {
            get: function () {
                return this.type_ram;
            },
            set: function (value) {
                this.type_ram = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "for_sport", {
            get: function () {
                return this.for_sport;
            },
            set: function (value) {
                this.for_sport = value;
            },
            enumerable: false,
            configurable: true
        });
        return Motorbike;
    }(Vehicle));
    transport.Motorbike = Motorbike;
    var Owner = /** @class */ (function () {
        function Owner(birthDate, name, surname, type_doc, series_doc, number_doc) {
            this._birthDate = birthDate;
            this._name = name;
            this._series_doc = series_doc;
            this._number_doc = number_doc;
            this._surname = surname;
            this._type_doc = type_doc;
        }
        Object.defineProperty(Owner.prototype, "birthDate", {
            get: function () {
                return this._birthDate;
            },
            set: function (value) {
                this._birthDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "surname", {
            get: function () {
                return this._surname;
            },
            set: function (value) {
                this._surname = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "type_doc", {
            get: function () {
                return this._type_doc;
            },
            set: function (value) {
                this._type_doc = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "series_doc", {
            get: function () {
                return this._series_doc;
            },
            set: function (value) {
                this._series_doc = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "number_doc", {
            get: function () {
                return this._number_doc;
            },
            set: function (value) {
                this._number_doc = value;
            },
            enumerable: false,
            configurable: true
        });
        Owner.prototype.ownerInfo = function () {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n день рождения: ' + this.birthDate.toString() + '\nтип документа' + this._type_doc + '\nсерия документа' + this._series_doc + '\nНомер документа' + this._number_doc;
        };
        return Owner;
    }());
    transport.Owner = Owner;
    var VehicleStorage = /** @class */ (function () {
        function VehicleStorage() {
            this._created = new Date();
            this._data = [];
        }
        Object.defineProperty(VehicleStorage.prototype, "created", {
            get: function () {
                return this._created;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorage.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        VehicleStorage.prototype.getAll = function () {
            return this.data;
        };
        VehicleStorage.prototype.remove = function (index) {
            this.data.splice(index, 1);
        };
        VehicleStorage.prototype.save = function (data) {
            this._data.push(data);
        };
        return VehicleStorage;
    }());
    transport.VehicleStorage = VehicleStorage;
})(transport || (exports.transport = transport = {}));
