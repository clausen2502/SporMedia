import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsDescription extends Struct.ComponentSchema {
  collectionName: 'components_components_descriptions';
  info: {
    displayName: 'Description';
    icon: 'pencil';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    displayName: 'Image';
    icon: 'layout';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsPictures extends Struct.ComponentSchema {
  collectionName: 'components_components_pictures';
  info: {
    displayName: 'Pictures';
    icon: 'landscape';
  };
  attributes: {
    Pictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.description': ComponentsDescription;
      'components.header': ComponentsHeader;
      'components.image': ComponentsImage;
      'components.pictures': ComponentsPictures;
    }
  }
}
