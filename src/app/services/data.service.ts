import { Injectable } from '@angular/core';
import { AreaI, ArticuloI } from '../models/model.interface'


@Injectable()

export class DataService {

	private areas : AreaI[] = [
	{
		id: 1,
		name: 'Madera'
	},
	{
		id: 2,
		name: 'Agua'
	},
	{
		id: 3,
		name: 'Ropa'
	},
];

	private articulos : ArticuloI[] = [
	{
		id: 1,
		areaId: 1,
		name:'Madera Seca 300x100'
	},
	{
		id: 2,
		areaId: 2,
		name:'Bidon de agua'
	},
	{
		id: 3,
		areaId: 3,
		name:'Polera azul c/logo'
	},
	{
		id: 4,
		areaId: 3,
		name:'Poleron micro c/logo'
	},
	{
		id: 5,
		areaId: 3,
		name:'Pantalon seguridad azul'
	},
	{
		id: 6,
		areaId: 3,
		name:'Zapatos de seguridad'
	},

];

	getAreas(): AreaI[]{
		return this.areas;
	}

	getArticulos(): ArticuloI[]{
		return this.articulos;
	}

}
