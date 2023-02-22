import { AdEntity } from '../types';
import { ValidationError } from '../utils/errors';

interface NewAdEntity extends Omit<AdEntity, 'id'> {
  id?: string;
}

export class AdRecord implements AdEntity {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public url: string;
  public lat: number;
  public lng: number;

  constructor(obj: NewAdEntity) {
    if (!obj.name || obj.name.length > 100) {
      throw new ValidationError(
        'Ad name cannot be empty or exceed 100 characters.'
      );
    }

    if (obj.description.length > 1000) {
      throw new ValidationError(
        'Ad description cannot exceed 1000 characters.'
      );
    }

    if (obj.price < 0 || obj.price > 9999999) {
      throw new ValidationError('Price must be between 0 and 9999999.');
    }

    //TODO: Check if URL is valid

    if (!obj.url || obj.url.length > 100) {
      throw new ValidationError('Url cannot be empty or exceed 100 characters');
    }

    if (typeof obj.lat !== 'number' || typeof obj.lng !== 'number') {
      throw new ValidationError('Found an error with ad coordinates.');
    }

    this.name = obj.name;
    this.description = obj.description;
    this.price = obj.price;
    this.url = obj.url;
    this.lat = obj.lat;
    this.lng = obj.lng;
  }
}
