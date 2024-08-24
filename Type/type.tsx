export interface Job {
    data: Array<JobDetail>;
  }
  export interface JobDetail {
    id: number;
    slug: string;
    name: string;
    image: ImageDetail;
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Array<IncludeDetail>;
    gallery: GalleryDetail;
    others: Array<OtherDetail>;
  }
  
  export interface ImageDetail {
    mobile: string;
    tablet: string;
    desktop: string;
  }
  export interface IncludeDetail {
    item: string;
    quantity: number;
  }
  export interface FirstGallery {
    mobile: string;
    tablet: string;
    desktop: string;
  }
  export interface GalleryDetail {
    first: FirstGallery;
    second: FirstGallery;
    third: FirstGallery;
  }
  export interface OtherDetail {
    slug: string;
    name: string;
    image: ImageDetail;
  }
  
  export interface RootState {
    job: {
      job: Job["data"];
      id: number | null;
    };
  }
  
