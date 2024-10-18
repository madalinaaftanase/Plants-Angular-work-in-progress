export interface PlantsApiResponse{
    _id: string;
    indoor: boolean;
    common_name: string;
    scientific_name: string;
    origin: string[];
    dimension: string;
    watering: string;
    sunlight: string[];
    maintenance: string | null;
    care_guides: string;
    growth_rate: string;
    salt_tolerant: boolean;
    invasive: boolean;
    tropical: boolean;
    care_level: string;
    flowers: boolean;
    flower_color: string;
    fruits: boolean;
    fruit_nutritional_value: string;
    harvest_season: string | null;
    cuisine: boolean;
    medicinal: boolean;
    poisonous_to_pets: number;
    description: string;
    default_imageUrl?: string;
}