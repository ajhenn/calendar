export interface InviteCode {
    id: string;
    code: string;
    owner_id: string;
    created_at?: string;
}

export interface CalendarAccess {
    id: string;
    viewer_id: string;
    owner_id: string;
    created_at?: string;
}