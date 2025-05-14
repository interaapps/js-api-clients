import {PasteType, PasteVisibility} from "./paste";

export type Filters = {
    search?: string;
    page_limit?: number
    page?: number;
    filter?: Record<string, string | number | boolean>
    [key: string]: any;
}

export type PasteFilters = {
    /**
     * Seperated by comma (,)
     */
    filter_tags?: string
    user_id?: string;
    filter?: {
        key?: string;
        userId?: string;
        forkedFrom?: string
        type?: PasteType
        visibility?: PasteVisibility

    }
} & Filters